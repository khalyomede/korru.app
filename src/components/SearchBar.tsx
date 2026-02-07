// src/components/LandingSearchBar.tsx
import { Component, onMount } from 'solid-js';
import SearchBarProperties from './properties/SearchBarProperties';

const SearchBar: Component<SearchBarProperties> = (properties) => {
    let element: HTMLInputElement | undefined;

    onMount(() => {
        if (properties.focusOnMount) {
            element?.focus();
        }
    });

    return (
        <div class="w-full">
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
                class="w-full px-4 py-3 rounded-lg border border-stone-300 tracking-wider
                    focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-stone-500
                    text-stone-900 placeholder-stone-400 place
                    dark:bg-stone-800 dark:border-stone-600 dark:text-stone-300 dark:placeholder-stone-500
                    transition-colors duration-200"
            />
        </div>
    );
};

export default SearchBar;
