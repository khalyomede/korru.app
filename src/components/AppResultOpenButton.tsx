import { Component } from "solid-js";
import AppResultOpenButtonProperties from "./properties/AppResultOpenButtonProperties";
import { vibrate } from "../utilities";

const AppResultOpenButton: Component<AppResultOpenButtonProperties> = (properties) => {
    return (
        <a href={properties.url} onclick={() => vibrate(60)} target="_blank" rel="noopener noreferrer" class="
                px-4 py-2
                border border-stone-300 rounded-3xl
                dark:border-stone-600
                hover:bg-stone-100 hover:border-stone-500 hover:text-stone-900
                focus:outline-none
                bg-stone-400
                text-stone-100 text-sm tracking-widest font-medium
                dark:text-stone-800
                focus:dark:text-stone-100
                focus:border-stone-700 focus:bg-stone-900
                focus:dark:border-stone-400  focus:dark:bg-stone-700
                dark:hover:bg-stone-700 dark:hover:border-stone-500 dark:hover:text-white
                transition-all duration-200 ease-in-out
                whitespace-nowrap
                select-none"
        >
            {properties.text}
        </a>
    );
};

export default AppResultOpenButton;
