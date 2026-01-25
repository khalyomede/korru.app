import { Component, onMount } from 'solid-js';
import useStore from '../hooks/useStore';
import AppResultList from '../components/AppResultList';
import App from '../interfaces/App';
import Fuse from "fuse.js";
import SearchBar from '../components/SearchBar';

// Main component
const Search: Component = () => {
    const [store, setStore] = useStore();

    let fuse: Fuse<App> | null = null;

    onMount(() => {
        const { apps } = store;

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
    });

    const filteredApps = () => {
        const { search, apps } = store;

        if (fuse === null) {
            /** @toto report error */

            return apps;
        }

        const matchedAppsIds = fuse.search(search).map((app) => app.item.id);

        if (matchedAppsIds.length === 0) {
            return apps;
        }

        const filteredApps = apps.filter((app) => matchedAppsIds.includes(app.id));

        return filteredApps;
    };

    return (
        <div class="min-h-dvh bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
            <header class="max-w-2xl mx-auto mb-6">
                <SearchBar
                    placeholder="Search anything..."
                    value={store.search}
                    onInput={(event) => setStore("search", event.target.value)}
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
