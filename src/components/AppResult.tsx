import { Component, For, Show } from "solid-js";
import AppResultProperties from "./properties/AppResultProperties";

const AppResult: Component<AppResultProperties> = (properties) => {
    const numberOfFilledStars = Math.floor(properties.app.rating);
    const numberOfEmptyStars = 5 - numberOfFilledStars;

    return (
        <div class="my-12">
            <div>
                <img src={properties.app.icon.url} alt={properties.app.name} classList={{ "h-16": true, "w-16": true, "rounded-xl": properties.app.icon.maskable }} loading="lazy" />
            </div>
            <div class="flex gap-6 my-2 items-center">
                <span class="grow text-xl tracking-wider min-w-0 text-stone-600 dark:text-stone-300">
                    <div>
                        {properties.app.name}
                    </div>
                    <Show when={properties.app.description.trim().length > 0}>
                        <div class="text-xs text-stone-500 dark:text-stone-400 mt-1 truncate">
                            {properties.app.description}
                        </div>
                    </Show>
                </span>
                <span class="shrink">
                    <a
                        href={properties.app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="px-4 py-2 border border-stone-300 text-stone-700 font-medium text-sm rounded-lg tracking-widest
                            hover:bg-stone-100 hover:border-stone-500 hover:text-stone-900
                            focus:outline-none focus:ring-2 focus:ring-stone-500
                            dark:border-stone-600 dark:text-stone-300
                            dark:hover:bg-stone-700 dark:hover:border-stone-500 dark:hover:text-white
                            transition-all duration-200 ease-in-out inline-block"
                    >
                        Get
                    </a>
                </span>
            </div>
        </div>
    );
};

export default AppResult;
