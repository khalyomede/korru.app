import {
    createSignal,
    createMemo,
    onMount,
    onCleanup,
    For,
    JSX,
} from "solid-js";

interface InfiniteScrollProperties<T> {
    items: Array<T>;
    batchSize?: number;
    children: (item: T, index: () => number) => JSX.Element;
}

function InfiniteScroll<T>(
    properties: InfiniteScrollProperties<T>
) {
    const batchSize = properties.batchSize ?? 50;

    const [visibleCount, setVisibleCount] = createSignal(batchSize);

    let sentinel!: HTMLDivElement;

    const visibleItems = createMemo(() =>
        properties.items.slice(0, visibleCount())
    );

    const loadMore = () => {
        setVisibleCount(previous =>
            Math.min(
                previous + batchSize,
                properties.items.length
            )
        );
    };

    onMount(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    loadMore();
                }
            },
            {
                rootMargin: "500px",
            }
        );

        observer.observe(sentinel);

        onCleanup(() => observer.disconnect());
    });

    createMemo(() => {
        properties.items.length;
        setVisibleCount(batchSize);
    });

    return (
        <>
            <For each={visibleItems()}>
                {properties.children}
            </For>

            <div ref={sentinel} />
        </>
    );
}

export default InfiniteScroll;
