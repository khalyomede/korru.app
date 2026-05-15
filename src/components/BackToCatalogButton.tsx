import { A } from "@solidjs/router";
import { Component } from "solid-js";
import { vibrate } from "../utilities";

const BackToCatalogButton: Component = () => {
    return <A href="/search" onClick={() => vibrate(24)} class="
        select-none tracking-wide rounded-xl px-5 py-2 font-bold outline-none
        text-stone-600 dark:text-stone-200
        border border-stone-500
        hover:bg-stone-200 hover:dark:bg-stone-800
        focus:bg-stone-300 focus:dark:border-stone-300 focus:dark:bg-stone-900
        ">
        Back to catalog
    </A>;
};

export default BackToCatalogButton;
