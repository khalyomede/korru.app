import { Component, Show } from "solid-js";
import AppResultProperties from "./properties/AppResultProperties";
import AppResultOpenButton from "./AppResultOpenButton";
import AppIcon from "./AppIcon";
import { A } from "@solidjs/router";
import slug from "slug";
import { vibrate } from "../utilities";

const AppResult: Component<AppResultProperties> = (properties) => {
    const slugifiedAppName = slug(properties.app.name);
    const appUrl = `/app/${slugifiedAppName}-${properties.app.id}`;

    return (
        <div class="mb-6 md:mb-12">
            <A href={appUrl} class="flex gap-4 md:gap-6 my-2 items-center" onClick={() => vibrate(12)}>
                <AppIcon src={properties.app.icon.url} alt={properties.app.name} maskable={properties.app.icon.maskable} />
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
            </A>
        </div>
    );
};

export default AppResult;
