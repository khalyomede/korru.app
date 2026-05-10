import { useNavigate } from "@solidjs/router";
import { Component, Show } from "solid-js";

const BackButton: Component = () => {
    const navigate = useNavigate();
    // 1 for the base browser navigation
    // +1 for the SolidJS router navigation (on first page browsed)
    const hasNavigatedBefore = window.history.length > 2;

    return <button onClick={() => hasNavigatedBefore ? navigate(-1) : navigate("/search")} class="border border-stone-500 rounded-xl px-4 py-1 inline-block text-stone-600 dark:text-stone-200 font-bold flex items-center hover:cursor-pointer select-none hover:bg-stone-200 dark:hover:bg-stone-800 focus:bg-stone-300 dark:focus:border-stone-300 dark:focus:bg-stone-900 outline-none">
        <span class="mr-2">←</span>
        <span>
            <Show when={hasNavigatedBefore}>
                back
            </Show>
            <Show when={!hasNavigatedBefore}>
                browse
            </Show>
        </span>
    </button>;
};

export default BackButton;
