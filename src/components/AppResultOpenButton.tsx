import { Component } from "solid-js";
import AppResultOpenButtonProperties from "./properties/AppResultOpenButtonProperties";
import { vibrate } from "../utilities";

const AppResultOpenButton: Component<AppResultOpenButtonProperties> = (properties) => {
    return (
        <a 
            href={properties.url} 
            onclick={() => vibrate(60)} 
            target="_blank" 
            rel="noopener noreferrer" 
            class="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium text-sm rounded-lg
                border border-primary
                hover:bg-primary/90
                focus:outline-none focus:ring-2 focus:ring-ring/20 focus:ring-offset-2 focus:ring-offset-background
                active:scale-95
                transition-all duration-200 ease-out
                whitespace-nowrap select-none"
        >
            {properties.text}
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
        </a>
    );
};

export default AppResultOpenButton;
