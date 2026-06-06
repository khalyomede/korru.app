import { A } from "@solidjs/router";
import { Component } from "solid-js";
import { vibrate } from "../utilities";
import { LayoutGrid } from "lucide-solid";

const BackToCatalogButton: Component = () => {
    return <A href="/search" onClick={() => vibrate(12)} class="
        inline-flex items-center gap-2
        select-none tracking-wider rounded-control px-5 py-2 text-sm font-medium outline-none
        text-stone-600 dark:text-stone-300
        border border-stone-300 dark:border-stone-600
        hover:bg-stone-200 hover:border-stone-400 dark:hover:bg-stone-800 dark:hover:border-stone-500
        focus:border-stone-500 dark:focus:border-stone-400
        transition-colors duration-200
        ">
        <LayoutGrid size={16} class="shrink-0" />
        <span>Back to catalog</span>
    </A>;
};

export default BackToCatalogButton;
