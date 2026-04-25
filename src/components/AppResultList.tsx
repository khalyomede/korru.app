import { Component, For, Show } from "solid-js";
import AppResultListProperties from "./properties/AppResultListProperties";
import AppResult from "./AppResult";

const AppResultList: Component<AppResultListProperties> = (properties) => {
    return (
        <>
            <Show when={properties.apps.length === 0}>
                <div class="flex flex-col justify-center items-center h-[60vh] text-center px-4">
                    <div class="w-16 h-16 mb-4 rounded-full bg-muted flex items-center justify-center">
                        <svg class="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-foreground mb-1">No apps found</h3>
                    <p class="text-sm text-muted-foreground">Try adjusting your search or filters</p>
                </div>
            </Show>
            <Show when={properties.apps.length > 0}>
                <div class="space-y-2">
                    <For each={properties.apps}>
                        {(app, index) => <AppResult app={app} />}
                    </For>
                </div>
            </Show>
        </>
    );
};

export default AppResultList;
