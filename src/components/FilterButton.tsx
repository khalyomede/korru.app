import { Component, Match, Switch } from "solid-js";
import FilterButtonProperties from "./properties/FilterButtonProperties";
import { Gamepad2, Wallet, Newspaper, Users, Music, ShoppingBag, Wrench, Code } from 'lucide-solid';

const FilterButton: Component<FilterButtonProperties> = (properties) => {
    return <button classList={{
        "flex-shrink-0": true,
        "flex": true,
        "gap-2": true,
        "items-center": true,
        "dark:text-stone-900": properties.selected,
        "dark:text-stone-400": !properties.selected,
        "dark:bg-stone-400": properties.selected,
        "text-stone-50": properties.selected,
        "text-stone-700": !properties.selected,
        "text-sm": true,
        "bg-stone-600": properties.selected,
        "border": true,
        "border-stone-500": !properties.selected,
        "rounded-xl": true,
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
        "hover:cursor-pointer": true,
        "hover:bg-stone-200": true,
        "dark:hover:bg-stone-700": true,
    }} onClick={properties.onClick}>
        <Switch>
            <Match when={properties.name === "game"}>
                <Gamepad2 size="20px" />
            </Match>
            <Match when={properties.name === "finance"}>
                <Wallet size="18" />
            </Match>
            <Match when={properties.name === "news"}>
                <Newspaper size="16" />
            </Match>
            <Match when={properties.name === "social"}>
                <Users size="16" />
            </Match>
            <Match when={properties.name === "music"}>
                <Music size="18" />
            </Match>
            <Match when={properties.name === "shopping"}>
                <ShoppingBag size="18" />
            </Match>
            <Match when={properties.name === "tools"}>
                <Wrench size="18" />
            </Match>
            <Match when={properties.name === "developer"}>
                <Code size="20" />
            </Match>
        </Switch>
        {properties.name}
    </button>;
};

export default FilterButton;
