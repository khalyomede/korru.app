import { Component, Show } from "solid-js";
import AppResultProperties from "./properties/AppResultProperties";
import AppResultOpenButton from "./AppResultOpenButton";

const AppResult: Component<AppResultProperties> = (properties) => {
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
                    <a href={properties.app.url} target="_blank" rel="noopener noreferrer">
                        <AppResultOpenButton text="Open" />
                    </a>
                </span>
            </div>
        </div>
    );
};

export default AppResult;
