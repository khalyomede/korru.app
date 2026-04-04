import { Component } from "solid-js";
import AppResultOpenButtonProperties from "./properties/AppResultOpenButtonProperties";
import { vibrate } from "../utilities";

const AppResultOpenButton: Component<AppResultOpenButtonProperties> = (properties) => {
    return (
        <a href={properties.url} onclick={() => vibrate(60)} target="_blank" rel="noopener noreferrer" class="
                px-4 py-2 border border-stone-300 text-stone-500 font-medium text-sm rounded-lg tracking-widest
                hover:bg-stone-100 hover:border-stone-500 hover:text-stone-900
                focus:outline-none
                focus:border-stone-700 focus:text-stone-700 focus:bg-stone-200
                focus:dark:border-stone-400 focus:dark:text-stone-300 focus:dark:bg-stone-700
                dark:border-stone-600 dark:text-stone-400
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
