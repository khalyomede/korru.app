import { Component, For } from "solid-js";
import AppResultListProperties from "./properties/AppResultListProperties";
import AppResult from "./AppResult";

const AppResultList: Component<AppResultListProperties> = (properties) => {
    return (
        <>
            <For each={properties.apps}>
                {(app, index) => <AppResult app={app} />}
            </For>
        </>
    );
};

export default AppResultList;
