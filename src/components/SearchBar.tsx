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
                onInput={properties.onInput}
                type="text"
                value={properties.value}
                placeholder={properties.placeholder}
                class="w-full px-4 py-3 rounded-lg border border-gray-300 tracking-wider
                    focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400
                    text-gray-900 placeholder-gray-400 place
                    dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-500
                    transition-colors duration-200"
            />
        </div>
    );
};

export default SearchBar;
