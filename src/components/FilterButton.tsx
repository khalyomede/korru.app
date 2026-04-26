import { Component } from "solid-js";
import FilterButtonProperties from "./properties/FilterButtonProperties";

const FilterButton: Component<FilterButtonProperties> = (properties) => {
    return <button classList={{
        "flex-shrink-0": true,
        "dark:text-stone-900": properties.selected,
        "dark:text-stone-400": !properties.selected,
        "dark:bg-stone-400": properties.selected,
        "text-stone-50": properties.selected,
        "text-stone-700": !properties.selected,
        "text-sm": true,
        "bg-stone-600": properties.selected,
        "border": true,
        "border-stone-500": !properties.selected,
        "rounded-3xl": true,
        "px-4": true,
        "py-1": true,
        "tracking-wider": true,
        "focus:outline-none": true,
        "focus:border-stone-950": true,
        "focus:bg-stone-200": !properties.selected,
        "focus:bg-stone-800": properties.selected,
        "focus:dark:bg-stone-300": properties.selected,
        "focus:dark:bg-stone-700": !properties.selected,
        "focus:dark:text-stone-300": !properties.selected,
        "focus:dark:border-stone-100": true,
        "select-none": true,
    }} onClick={properties.onClick}>
        {properties.name}
    </button>;
};

export default FilterButton;
