import { Component, For } from "solid-js";
import AppResultProperties from "./properties/AppResultProperties";

const AppResult: Component<AppResultProperties> = (properties) => {
    const numberOfFilledStars = Math.floor(properties.app.rating);
    const numberOfEmptyStars = 5 - numberOfFilledStars;
    const rangeOfFilledStars = Array.from({ length: numberOfFilledStars }, () => 1);
    const rangeOfEmptyStars = Array.from({ length: numberOfEmptyStars }, () => 1);

    return (
        <div class="my-12">
            <div>
                <img src={properties.app.icon.url} alt={properties.app.name} classList={{ "h-16": true, "w-16": true, "rounded-xl": properties.app.icon.maskable }} loading="lazy" />
            </div>
            <div class="flex gap-4 my-2">
                <span class="grow text-xl">
                    <div>
                        {properties.app.name}
                    </div>
                    <div class="text-sm mt-2">
                        <For each={rangeOfFilledStars}>
                            {() => <i class="fa-solid fa-star text-gray-700 dark:text-gray-400"></i>}
                        </For>
                        <For each={rangeOfEmptyStars}>
                            {() => <i class="fa-regular fa-star text-gray-700 dark:text-gray-400"></i>}
                        </For>
                    </div>
                </span>
                <span class="shrink">
                    <a
                        href={properties.app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg
                            hover:bg-gray-100 hover:border-gray-400 hover:text-gray-900
                            focus:outline-none focus:ring-2 focus:ring-gray-400
                            dark:border-gray-600 dark:text-gray-300
                            dark:hover:bg-gray-700 dark:hover:border-gray-500 dark:hover:text-white
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
