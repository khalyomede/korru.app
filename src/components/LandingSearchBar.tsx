// src/components/LandingSearchBar.tsx
import { Component } from 'solid-js';
import LandingSearchBarProperties from './properties/LandingSearchBarProperties';

const LandingSearchBar: Component<LandingSearchBarProperties> = (properties) => {
    return (
        <div class="w-full px-4">
            <input
                onInput={properties.onInput}
                type="text"
                placeholder="Search anything..."
                class="w-full px-4 py-3 rounded-lg border border-gray-300
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       text-gray-900 placeholder-gray-400
                       dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-500"
            />
        </div>
    );
};

export default LandingSearchBar;
