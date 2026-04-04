import { Component, For, Show } from "solid-js";
import AppResultListProperties from "./properties/AppResultListProperties";
import AppResult from "./AppResult";

const AppResultList: Component<AppResultListProperties> = (properties) => {
    return (
        <>
            <Show when={properties.apps.length === 0}>
                <div class="dark:text-stone-700 text-stone-700 tracking-wider flex justify-center items-center h-dvh">
                    No apps found.
                </div>
            </Show>
            <Show when={properties.apps.length > 0}>
                <For each={properties.apps}>
                    {(app, index) => <AppResult app={app} />}
                </For>
            </Show>
        </>
    );
};

export default AppResultList;
