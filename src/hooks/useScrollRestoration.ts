import { onMount, onCleanup } from "solid-js";
import { useBeforeLeave, useLocation } from "@solidjs/router";

const STORAGE_KEY = "scroll-positions";

type ScrollPositions = Record<string, number>;
type RefCallback<T> = (el: T) => void;
type ResetScroll = () => void;

const readPositions = (): ScrollPositions => {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
    } catch {
        return {};
    }
};

const writePosition = (key: string, top: number): void => {
    const positions = readPositions();
    positions[key] = top;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
};

const deletePosition = (key: string): void => {
    const positions = readPositions();
    delete positions[key];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
};

/**
 * Attaches scroll save/restore behaviour to a scrollable element.
 *
 * Returns a tuple of [refCallback, resetScroll].
 * Call resetScroll() on any intentional navigation (filter click,
 * search input) to prevent restoring a stale position on that URL.
 *
 * Usage:
 *   const [scrollRef, resetScroll] = useScrollRestoration<HTMLElement>();
 *   <main ref={scrollRef} ...>
 */
const useScrollRestoration = <T extends HTMLElement>(): [RefCallback<T>, ResetScroll] => {
    let element: T | undefined;
    const location = useLocation();

    const urlKey = () => location.pathname + location.search;

    const attachScrollListener = (el: T): (() => void) => {
        let ticking = false;

        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                writePosition(urlKey(), el.scrollTop);
                ticking = false;
            });
        };

        el.addEventListener("scroll", onScroll, { passive: true });
        return () => el.removeEventListener("scroll", onScroll);
    };


    onMount(() => {
        if (element === undefined) return;

        const detachScrollListener = attachScrollListener(element);

        // To fix an issue when Search page sets "/search?filter=games", but this hook still sees "/search" because of a timing issue.
        queueMicrotask(() => {
            const saved = readPositions()[urlKey()];

            if (saved !== undefined) {
                requestAnimationFrame(() => {
                    if (element !== undefined) {
                        element.scrollTop = saved;
                    }
                });
            }
        });

        onCleanup(detachScrollListener);
    });

    const refCallback: RefCallback<T> = (el) => {
        element = el;
    };

    const resetScroll: ResetScroll = () => {
        deletePosition(urlKey());
        if (element !== undefined) {
            element.scrollTop = 0;
        }
    };

    return [refCallback, resetScroll];
};

export default useScrollRestoration;
