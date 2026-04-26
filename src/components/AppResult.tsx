import { Component, Show } from "solid-js";
import AppResultProperties from "./properties/AppResultProperties";
import AppResultOpenButton from "./AppResultOpenButton";
import AppIconPreview from "./AppIcon";

const AppResult: Component<AppResultProperties> = (properties) => {
    return (
        <div class="mb-12">
            <div class="flex">
                <AppIconPreview src={properties.app.icon.url} alt={properties.app.name} maskable={properties.app.icon.maskable} />
            </div>
            <div class="flex gap-6 my-2 items-center">
                <span class="grow text-xl tracking-wider min-w-0 text-stone-600 dark:text-stone-300 font-bold">
                    <div class="flex items-center gap-2">
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
