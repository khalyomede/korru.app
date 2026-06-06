import { Component } from "solid-js";
import AppResultOpenButtonProperties from "./properties/AppResultOpenButtonProperties";
import { vibrate } from "../utilities";
import { ExternalLink } from "lucide-solid";

const AppResultOpenButton: Component<AppResultOpenButtonProperties> = (properties) => {
    return (
        <a href={properties.url} onclick={() => vibrate(12)} target="_blank" rel="noopener noreferrer" class="
                inline-flex items-center gap-1.5
                px-4 py-2
                rounded-control
                border border-stone-700
                bg-stone-700 text-stone-50
                dark:border-stone-300 dark:bg-stone-300 dark:text-stone-900
                text-sm tracking-wider font-medium
                hover:bg-stone-800 dark:hover:bg-stone-100
                focus:outline-none focus:ring-2 focus:ring-stone-400
                transition-colors duration-200 ease-in-out
                whitespace-nowrap
                select-none"
        >
            <span>{properties.text}</span>
            <ExternalLink size={16} class="shrink-0" />
        </a>
    );
};

export default AppResultOpenButton;
