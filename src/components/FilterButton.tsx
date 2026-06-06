import { Component } from "solid-js";
import FilterButtonProperties from "./properties/FilterButtonProperties";
import { getFilterIcon } from "./filterIcons";

const FilterButton: Component<FilterButtonProperties> = (properties) => {
    const Icon = getFilterIcon(properties.name);

    return <button classList={{
        "inline-flex": true,
        "items-center": true,
        "gap-1.5": true,
        "shrink-0": true,
        "text-sm": true,
        "font-medium": true,
        "tracking-wider": true,
        "rounded-control": true,
        "px-4": true,
        "py-1.5": true,
        "border": true,
        "transition-colors": true,
        "duration-200": true,
        "select-none": true,
        "hover:cursor-pointer": true,
        "outline-none": true,
        // Selected (solid)
        "bg-stone-700": properties.selected,
        "border-stone-700": properties.selected,
        "text-stone-50": properties.selected,
        "dark:bg-stone-300": properties.selected,
        "dark:border-stone-300": properties.selected,
        "dark:text-stone-900": properties.selected,
        "hover:bg-stone-800": properties.selected,
        "dark:hover:bg-stone-100": properties.selected,
        "focus:ring-2": properties.selected,
        "focus:ring-stone-400": properties.selected,
        // Unselected (outline)
        "bg-transparent": !properties.selected,
        "border-stone-300": !properties.selected,
        "text-stone-600": !properties.selected,
        "dark:border-stone-600": !properties.selected,
        "dark:text-stone-300": !properties.selected,
        "hover:bg-stone-200": !properties.selected,
        "hover:border-stone-400": !properties.selected,
        "dark:hover:bg-stone-800": !properties.selected,
        "dark:hover:border-stone-500": !properties.selected,
        "focus:border-stone-500": !properties.selected,
        "dark:focus:border-stone-400": !properties.selected,
    }} onClick={properties.onClick}>
        <Icon size={16} class="shrink-0" />
        <span>{properties.name}</span>
    </button>;
};

export default FilterButton;
