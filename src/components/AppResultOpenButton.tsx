import { Component } from "solid-js";
import AppResultOpenButtonProperties from "./properties/AppResultOpenButtonProperties";

const AppResultOpenButton: Component<AppResultOpenButtonProperties> = (properties) => {
    return (
        <a href={properties.url} target="_blank" rel="noopener noreferrer" class="px-4 py-2 border border-stone-300 text-stone-700 font-medium text-sm rounded-lg tracking-widest
                hover:bg-stone-100 hover:border-stone-500 hover:text-stone-900
                focus:outline-none focus:ring-2 focus:ring-stone-500
                dark:border-stone-600 dark:text-stone-300
                dark:hover:bg-stone-700 dark:hover:border-stone-500 dark:hover:text-white
                transition-all duration-200 ease-in-out
                whitespace-nowrap"
        >
            {properties.text}
        </a>
    );
};

export default AppResultOpenButton;
