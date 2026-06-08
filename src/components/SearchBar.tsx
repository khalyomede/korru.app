// src/components/LandingSearchBar.tsx
import { Component, onMount } from 'solid-js';
import SearchBarProperties from './properties/SearchBarProperties';
import { useLocation } from '@solidjs/router';
import LocationState from '../interfaces/LocationState';
import { Search } from 'lucide-solid';

const SearchBar: Component<SearchBarProperties> = (properties) => {
    let element: HTMLInputElement | undefined;
    let input: HTMLInputElement | undefined;

    onMount(() => {
        const { state } = useLocation<LocationState>();
        const previousPage = state?.previousPage ?? "";

        if (previousPage === "/") {
            element?.focus();
        }
    });

    const onClick = () => {
        input?.focus();
    }

    return (
        <div class="w-full flex items-center gap-2 relative" ref={element} id={properties.id}>
            <Search
                size="21px"
                class="ml-4 text-stone-400 absolute cursor-pointer"
                onClick={onClick}
            />
            <input
                ref={input}
                onFocus={properties.onFocus}
                onInput={properties.onInput}
                type="search"
                autocorrect="off"
                autocomplete="off"
                value={properties.value}
                placeholder={properties.placeholder}
                class="w-full px-6 pl-12 py-3 rounded-2xl border border-stone-300 tracking-wider
                    focus:outline-none focus:dark:border-stone-300
                    focus:border-stone-700
                    text-stone-900 placeholder-stone-400 place
                    dark:bg-stone-900 dark:border-stone-600 dark:text-stone-300 dark:placeholder-stone-500
                    transition-colors duration-200
                    placeholder:select-none"
            />
        </div>
    );
};

export default SearchBar;
