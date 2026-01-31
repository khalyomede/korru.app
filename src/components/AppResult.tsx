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
                <span class="grow text-xl tracking-wider min-w-0 text-stone-600 dark:text-stone-300 font-bold">
                    <div class="flex items-center gap-2">
                        <Show when={properties.app.recommanded}>
                            <i class="fa-solid fa-star text-amber-400 text-sm"></i>
                        </Show>
                        <span>{properties.app.name}</span>
                    </div>
                    <Show when={properties.app.description.trim().length > 0}>
                        <div class="text-xs text-stone-500 dark:text-stone-400 mt-1 truncate">
                            {properties.app.description}
                        </div>
                    </Show>
                </span>
                <span class="shrink">
                    <AppResultOpenButton text="Open" url={properties.app.url} />
                </span>
            </div>
        </div>
    );
};

export default AppResult;
