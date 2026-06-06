// src/components/LandingSearchBar.tsx
import { Component, onMount } from 'solid-js';
import SearchBarProperties from './properties/SearchBarProperties';
import { useLocation } from '@solidjs/router';
import LocationState from '../interfaces/LocationState';
import { Search } from 'lucide-solid';

const SearchBar: Component<SearchBarProperties> = (properties) => {
    let element: HTMLInputElement | undefined;

    onMount(() => {
        const { state } = useLocation<LocationState>();
        const previousPage = state?.previousPage ?? "";

        if (previousPage === "/") {
            element?.focus();
        }
    });

    return (
        <div class="relative w-full">
            <Search
                size={20}
                class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 dark:text-stone-500"
            />
            <input
                ref={element}
                id={properties.id}
                onFocus={properties.onFocus}
                onInput={properties.onInput}
                type="search"
                autocorrect="off"
                autocomplete="off"
                value={properties.value}
                placeholder={properties.placeholder}
                class="w-full pl-12 pr-6 py-3 rounded-control border border-stone-300 tracking-wider
                    focus:outline-none focus:dark:border-stone-300
                    focus:border-stone-700
                    text-stone-900 placeholder-stone-400
                    dark:bg-stone-900 dark:border-stone-600 dark:text-stone-300 dark:placeholder-stone-500
                    transition-colors duration-200
                    placeholder:select-none"
            />
        </div>
    );
};

export default SearchBar;
