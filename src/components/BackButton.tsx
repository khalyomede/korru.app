import { useNavigate } from "@solidjs/router";
import { Component, Show } from "solid-js";
import { vibrate } from "../utilities";
import { ArrowLeft } from "lucide-solid";

const BackButton: Component = () => {
    const navigate = useNavigate();
    // 1 for the base browser navigation
    // +1 for the SolidJS router navigation (on first page browsed)
    const hasNavigatedBefore = window.history.length > 2;

    const vibrateThenNavigateBackOrToSearch = (): void => {
        vibrate(12);

        hasNavigatedBefore ? navigate(-1) : navigate("/search")
    };

    return <button onClick={vibrateThenNavigateBackOrToSearch} class="inline-flex items-center gap-1.5 rounded-control border border-stone-300 dark:border-stone-600 px-4 py-1.5 text-sm font-medium tracking-wider text-stone-600 dark:text-stone-300 hover:cursor-pointer select-none hover:bg-stone-200 hover:border-stone-400 dark:hover:bg-stone-800 dark:hover:border-stone-500 focus:border-stone-500 dark:focus:border-stone-400 outline-none transition-colors duration-200">
        <ArrowLeft size={16} class="shrink-0" />
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
