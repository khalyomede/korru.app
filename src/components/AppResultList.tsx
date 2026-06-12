import { Component, For, Show } from "solid-js";
import AppResultListProperties from "./properties/AppResultListProperties";
import AppResult from "./AppResult";
import InfiniteScroll from "./InfiniteScroll";

const AppResultList: Component<AppResultListProperties> = (properties) => {
    return (
        <>
            <Show when={properties.apps.length === 0}>
                <div class="dark:text-stone-700 text-stone-700 tracking-wider flex justify-center items-center h-dvh">
                    No apps found.
                </div>
            </Show>
            <Show when={properties.apps.length > 0}>
                <InfiniteScroll
                    items={properties.apps}
                    batchSize={40}
                >
                    {app => (
                        <AppResult app={app} />
                    )}
                </InfiniteScroll>
            </Show>
        </>
    );
};

export default AppResultList;
