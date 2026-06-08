import { useNavigate } from "@solidjs/router";
import { Component, Show } from "solid-js";
import { vibrate } from "../utilities";
import { MoveLeft } from "lucide-solid";

const BackButton: Component = () => {
    const navigate = useNavigate();
    // 1 for the base browser navigation
    // +1 for the SolidJS router navigation (on first page browsed)
    const hasNavigatedBefore = window.history.length > 2;

    const vibrateThenNavigateBackOrToSearch = (): void => {
        vibrate(12);

        hasNavigatedBefore ? navigate(-1) : navigate("/search")
    };

    return <button onClick={vibrateThenNavigateBackOrToSearch} class="
        border border-stone-500 rounded-xl px-4 py-1 text-stone-600 dark:text-stone-200 font-bold flex items-center gap-2 hover:cursor-pointer select-none hover:bg-stone-200 dark:hover:bg-stone-800 focus:bg-stone-300 dark:focus:border-stone-300 dark:focus:bg-stone-900 outline-none
    ">
        <MoveLeft size="20px" />
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
