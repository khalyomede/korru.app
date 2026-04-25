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
        <div class="w-full relative group">
            <div class="relative flex items-center">
                <svg class="absolute left-4 w-5 h-5 text-muted-foreground pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
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
                    class="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-card text-foreground
                        placeholder:text-muted-foreground placeholder:select-none
                        focus:outline-none focus:border-foreground/30
                        transition-all duration-200 text-base tracking-wide"
                />
            </div>
        </div>
    );
};

export default SearchBar;
