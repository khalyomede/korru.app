import { Component, Index } from "solid-js";
import AppResultListProperties from "./properties/AppResultListProperties";
import AppResult from "./AppResult";

const AppResultList: Component<AppResultListProperties> = (properties) => {
    return (
        <>
            <Index each={properties.apps}>
                {(app, index) => <AppResult app={app()} />}
            </Index>
        </>
    );
};

export default AppResultList;
