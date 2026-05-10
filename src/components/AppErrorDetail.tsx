import { Component, Show } from "solid-js";
import AppErrorDetailProperties from "./properties/AppErrorDetailProperties";

const AppErrorDetail: Component<AppErrorDetailProperties> = (properties) => {
    return <Show when={properties.message !== null && properties.message.trim().length > 0}>
        <div class="tracking-wider text-stone-300 dark:text-stone-700 mb-5">{properties.message}</div>
    </Show>
};

export default AppErrorDetail;
