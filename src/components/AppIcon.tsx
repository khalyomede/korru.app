// src/components/AppIconPreview.tsx
import { Component, createSignal, onMount } from 'solid-js';
import AppIconProperties from './properties/AppIconProperties';

const AppIcon: Component<AppIconProperties> = (props) => {
    const [broken, setBroken] = createSignal(false);
    const [online, setOnline] = createSignal(true);
    let imageElement: HTMLImageElement | undefined;

    window.addEventListener("online", () => {
        setOnline(true);

        if (imageIsWithinViewport()) {
            retryLoadingIconImage();
        }
    });

    window.addEventListener("offline", () => setOnline(false));

    window.addEventListener("scroll", () => {
        if (imageIsWithinViewport()) {
            retryLoadingIconImage();
        }
    });

    onMount(() => {
        retryLoadingIconImageWhenCrossingViewport();
    });

    const retryLoadingIconImageWhenCrossingViewport = () => {
        if (imageElement instanceof HTMLImageElement) {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting && entry.target instanceof HTMLImageElement) {
                    retryLoadingIconImage();
                }
            }, {
                root: document.querySelector('body'),
            });

            observer.observe(imageElement);
        }
    };

    const retryLoadingIconImage = () => {
        if (imageElement instanceof HTMLImageElement && broken() && online()) {
            imageElement.setAttribute("src", imageElement.src);
            setBroken(false);
        }
    };
    /**
     * @see https://stackoverflow.com/a/7557433/3753055
     */
    const imageIsWithinViewport = () => {
        if (!(imageElement instanceof HTMLImageElement)) {
            return false;
        }

        const elementBounding = imageElement.getBoundingClientRect();

        return (
            elementBounding.top >= 0 &&
            elementBounding.left >= 0 &&
            elementBounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
            elementBounding.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
        );
    };

    return (
        <div
            classList={{
                "border": !props.maskable,
                "dark:border-stone-700": true,
                "border-stone-300": true,
                "flex-shrink-0": true,
                "mx-1": true,
                "my-1": true,
                "rounded-3xl": true,
                "overflow-hidden": true,
                "transition-transform": true,
                "hover:scale-105": true,
                "select-none": true,
            }}
        >
            <img
                ref={imageElement}
                src={props.src.trim()} // Added .trim() to fix whitespace in URLs
                alt={props.alt}
                class="w-16 h-16 object-cover bg-stone-50 dark:bg-stone-700"
                loading="lazy"
                onError={() => setBroken(true)}
            />
        </div>
    );
};

export default AppIcon;
