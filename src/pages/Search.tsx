import { Component, JSX, onMount } from 'solid-js';
import useStore from '../hooks/useStore';
import AppResultList from '../components/AppResultList';
import App from '../interfaces/App';
import Fuse from "fuse.js";
import SearchBar from '../components/SearchBar';
import { useSearchParams } from '@solidjs/router';

// Main component
const Search: Component = () => {
    const [store, setStore] = useStore();
    const [searchParams, setSearchParams] = useSearchParams();

    /**
     * Overriding setSearchParams globally to prevent each key strokes to save a URL navigation.
     * Without it, the UX is bad because the user would have to hit "back" button for each search terms characters.
     */
    const setSearchQueries = (params: Record<string, string>) => setSearchParams(params, { replace: true });

    let fuse: Fuse<App> | null = null;

    /**
     * When the user share a link with a search terms (?search=2048),
     * ff another use never browsed the app, we try to get this search param
     * and if it is not empty, we persiste the value in store
     * which will filter the app list in the same time.
     */
    const persistSearchQueryTermIfStoreTermIsEmpty = () => {
        const { search } = store;
        const searchIsEmpty = search.trim().length === 0;
        const { term } = searchParams;

        if (typeof term !== "string") {
            return;
        }

        const searchTermIsFilled = term.trim().length > 0;

        if (searchIsEmpty && searchTermIsFilled) {
            setStore("search", term);
        }
    };

    /**
     * This method is the reverse of the other above.
     *
     * If for any reason the user copies the search page URL without queries,
     * if we have a search term in the store (local storage),
     * then we persist it in the query strings as well.
     */
    const persistSearchTermIfSearchQueryTermIsEmpty = () => {
        const { search } = store;
        const { term } = searchParams;
        const searchIsFilled = search.trim().length > 0;
        const searchQueryIsEmpty = typeof term !== "string" || term.trim().length === 0;

        if (searchIsFilled && searchQueryIsEmpty) {
            setSearchQueries({
                term: search,
            });
        }
    };

    onMount(() => {
        persistSearchQueryTermIfStoreTermIsEmpty();
        persistSearchTermIfSearchQueryTermIsEmpty();
    });

    const filteredApps = () => {
        const { search, apps } = store;

        if (fuse === null) {
            const appList: Array<App> = apps.map((app) => ({ ...app }));

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

        const matchedAppsIds = fuse.search(search).map((app) => app.item.id);

        if (matchedAppsIds.length === 0) {
            return apps;
        }

        const filteredApps = apps.filter((app) => matchedAppsIds.includes(app.id));

        return filteredApps;
    };

    const onSearchBarInput = (event: InputEvent) => {
        if (!(event.target instanceof HTMLInputElement)) {
            return;
        }

        setStore("search", event.target.value);
        setSearchQueries({
            term: event.target.value,
        });
    };

    return (
        <div class="min-h-dvh bg-stone-100 dark:bg-stone-900 text-stone-900 dark:text-stone-100 px-6 py-6 md:px-12 md:py-12">
            <header class="max-w-2xl mx-auto sticky top-0 left-0 right-0 dark:bg-stone-900 bg-stone-100 py-4 px-0 mb-8 z-1">
                <SearchBar
                    placeholder="Search anything..."
                    value={store.search}
                    onInput={event => onSearchBarInput(event)}
                    focusOnMount={true}
                />
            </header>
            <main class="max-w-2xl mx-auto">
                <AppResultList apps={filteredApps()} />
            </main>
        </div>
    );
};

export default Search;
