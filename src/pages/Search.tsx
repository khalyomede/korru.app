import { Component, For, onMount } from 'solid-js';
import useStore from '../hooks/useStore';
import AppResultList from '../components/AppResultList';
import App from '../interfaces/App';
import Fuse from "fuse.js";
import SearchBar from '../components/SearchBar';
import { useSearchParams } from '@solidjs/router';
import Filter from '../interfaces/Filter';
import { vibrate } from "../utilities";

// Main component
const Search: Component = () => {
    const [store, setStore] = useStore();
    const [searchParams, setSearchParams] = useSearchParams();
    let filtersContainer;

    /**
     * Overriding setSearchParams globally to prevent each key strokes to save a URL navigation.
     * Without it, the UX is bad because the user would have to hit "back" button for each search terms characters.
     */
    const setSearchQueries = (params: Record<string, string | null>) => setSearchParams(params, { replace: true });

    let fuse: Fuse<App> | null = null;

    /**
     * When the user share a link with a search terms (?search=2048),
     * ff another use never browsed the app, we try to get this search param
     * and if it is not empty, we persiste the value in store
     * which will filter the app list in the same time.
     */
    const persistSearchQueryInStore = () => {
        const { search } = store;
        const searchIsEmpty = search.trim().length === 0;
        const { term, filter } = searchParams;

        if (typeof term === "string") {
            const searchTermIsFilled = term.trim().length > 0;

            if (searchIsEmpty && searchTermIsFilled) {
                setStore("search", term);
            }
        }

        if (typeof filter === "string") {
            const { filters } = store;

            if (filter.trim().length > 0) {
                setStore("filters", filters.map(baseFilter => ({ ...baseFilter, selected: baseFilter.name === filter })));
            }
        }
    };

    /**
     * This method is the reverse of the other above.
     *
     * If for any reason the user copies the search page URL without queries,
     * if we have a search term in the store (local storage),
     * then we persist it in the query strings as well.
     */
    const persistsStoreInSearchQueries = () => {
        const { search } = store;
        const { term } = searchParams;
        const searchIsFilled = search.trim().length > 0;
        const searchQueryIsEmpty = typeof term !== "string" || term.trim().length === 0;

        let queries: Record<string, string> = {};

        if (searchIsFilled && searchQueryIsEmpty) {
            queries.term = search;
        }

        const currentFilter = getCurrentFilter();

        if (!currentFilter.default) {
            queries.filter = currentFilter.name;
        }

        setSearchQueries(queries);
    };

    onMount(() => {
        persistSearchQueryInStore();
        persistsStoreInSearchQueries();
    });

    const filteredApps = () => {
        const { search, apps } = store;
        const currentFilter = getCurrentFilter();

        if (fuse === null) {
            const appList: Array<App> = apps.map((app) => ({ ...app }));

            /**
             * @todo Include URL as searchable terms with 2nd degree importance (above description).
             */
            fuse = new Fuse<App>(appList, {
                isCaseSensitive: false,
                ignoreDiacritics: true,
                shouldSort: true,
                findAllMatches: false,
                ignoreLocation: true,
                ignoreFieldNorm: true,
                threshold: 0.2,
                keys: [
                    { name: "name", weight: 3 },
                    { name: "description", weight: 1 },
                ]
            });
        }

        const filteredApps = currentFilter.categories.length === 0 ? apps : apps.filter(app => {
            return app.categories.filter(category => currentFilter.categories.includes(category)).length > 0;
        });

        const matchedAppsIds = fuse.search(search).map((app) => app.item.id);
        const searchedApps = matchedAppsIds.length === 0 ? filteredApps : filteredApps.filter((app) => matchedAppsIds.includes(app.id));

        return searchedApps;
    };

    const getCurrentFilter = (): Filter => {
        const { filters } = store;

        return filters.find(filter => filter.selected) ?? filters[0];
    };

    const onSearchBarInput = (event: InputEvent) => {
        if (!(event.target instanceof HTMLInputElement)) {
            return;
        }

        const term = event.target.value.trim();

        setSearchQueries({
            term: term.length > 0 ? event.target.value : null,
        });

        setStore("search", term);
    };

    const onFilterClick = (filter: Filter): void => {
        vibrate(60);

        const updatedFilters = store.filters
            .map(storedFilter => ({
                ...storedFilter,
                selected: filter.id === storedFilter.id
            }))
            .sort((firstFilter, secondFilter) => {
                // Always keep the default filter "all" at the begining.
                if (firstFilter.default) {
                    return -1;
                }

                if (secondFilter.default) {
                    return 1;
                }

                // Pushes the selected item at the begining of the filter bar.
                if (firstFilter.selected) {
                    return -1;
                }

                if (secondFilter.selected) {
                    return 1;
                }

                // Keep the other filters in the same default order (using their id).
                if (firstFilter.id < secondFilter.id) {
                    return -1;
                } else if (firstFilter.id > secondFilter.id) {
                    return 1;
                }

                return 0;
            });

        setStore("filters", updatedFilters);

        // Scrolls filters bar to the begining after the selected item has been pushed at the begining.
        filtersContainer?.scrollTo(0, 0);

        // Update the search queries
        const currentFilter = getCurrentFilter();

        setSearchQueries({
            filter: !currentFilter.default ? currentFilter.name : null,
        });
    };

    return (
        <div class="flex flex-col h-dvh bg-stone-100 dark:bg-stone-900 text-stone-900 dark:text-stone-100 max-w-2xl mx-auto">
            <header class="shrink p-4 md:py-8 fixed top-0 left-0 right-0 dark:bg-stone-900 bg-stone-100 max-w-2xl mx-auto">
                <SearchBar
                    id="search"
                    placeholder="Search anything..."
                    value={store.search}
                    onInput={event => onSearchBarInput(event)}
                    focusOnMount={true}
                />
                <div class="mt-4 flex flex-nowrap gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" ref={filtersContainer}>
                    <For each={store.filters}>
                        {filter => <button classList={{
                            "flex-shrink-0": true,
                            "dark:text-stone-900": filter.selected,
                            "dark:text-stone-400": !filter.selected,
                            "dark:bg-stone-400": filter.selected,
                            "text-stone-50": filter.selected,
                            "text-stone-700": !filter.selected,
                            "bg-stone-700": filter.selected,
                            "border": true,
                            "border-stone-700": !filter.selected,
                            "rounded-lg": true,
                            "px-4": true,
                            "py-1": true,
                            "tracking-wider": true
                        }} onClick={() => onFilterClick(filter)}>
                            {filter.name}
                        </button>}
                    </For>
                </div>
            </header>
            <main class="grow p-4 mt-22 pt-20 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <AppResultList apps={filteredApps()} />
            </main>
        </div>
    );
};

export default Search;
