import { Component } from 'solid-js';
import useStore from '../hooks/useStore';
import AppResultList from '../components/AppResultList';
import App from '../interfaces/App';
import Fuse from "fuse.js";
import SearchBar from '../components/SearchBar';

// Main component
const Search: Component = () => {
    const [store, setStore] = useStore();

    let fuse: Fuse<App> | null = null;

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

    return (
        <div class="min-h-dvh bg-stone-100 dark:bg-stone-900 text-stone-900 dark:text-stone-100 px-6 py-6 md:px-12 md:py-12">
            <header class="max-w-2xl mx-auto sticky top-0 left-0 right-0 dark:bg-stone-900 bg-stone-100 py-4 px-0 mb-8 z-1">
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
