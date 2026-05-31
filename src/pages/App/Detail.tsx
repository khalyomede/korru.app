import { Component, For, Index, onMount, Show } from "solid-js";
import { A, useLocation, useNavigate, useParams } from "@solidjs/router";
import useStore from "../../hooks/useStore";
import App from "../../interfaces/App";
import Layout from "../../layouts/Layout";
import AppIcon from "../../components/AppIcon";
import FilterButton from "../../components/FilterButton";
import FilterLink from "../../interfaces/FilterLink";
import SectionTitle from "../../components/SectionTitle";
import { vibrate } from "../../utilities";
import BackButton from "../../components/BackButton";

const Detail: Component = () => {
    const { app } = useParams();
    const [store, _] = useStore();
    const { apps } = store;
    const navigate = useNavigate();
    const { filters } = store;

    const getAppFromRouteParameter = (parameter: string | undefined): App | null => {
        if (parameter === undefined) {
            return null;
        }

        const { id } = parameter.match(/(?<id>\d+)$/)?.groups ?? { id: "" };

        if (id.trim().length === 0) {
            return null;
        }

        const numberedId = Number(id);

        for (const app of apps) {
            if (app.id === numberedId) {
                return app;
            }
        }

        return null;
    };

    const foundApp = getAppFromRouteParameter(app);

    onMount(() => {
        if (foundApp === null) {
            const { pathname } = useLocation();

            window.sessionStorage.setItem("previousPage", pathname);

            navigate("/app/not-found", {
                replace: true,
            });

            return;
        }

        if (foundApp.disabled) {
            window.sessionStorage.setItem("previousAppName", foundApp.name);

            navigate("/app/removed", {
                replace: true,
            });

            return;
        }
    });

    /**
     * To prevent working with a ?App on the component HTML below.
     * Should never go to this path otherwise.
     */
    if (foundApp === null) {
        navigate("/app/not-found", {
            replace: true,
        });

        return;
    }

    const shareApp = async () => {
        /**
         * @todo Wrap with try-catch, and display a toast if sharing could not happen.
         */
        try {
            await navigator.share({
                title: foundApp.name,
                text: foundApp.description,
                url: foundApp.url,
            });

            vibrate(12);
        } catch (error) {
            if (error instanceof DOMException && error.name === "AbortError") {
                // User canceled the share, nothing to report.
                return;
            }
        }
    };

    /**
     * Basically, this will only display the categories that match our own filters.
     * For example, if an app have "game" and "multimedia" filters, only "game" will be displayed.
     * Because "multimedia" is not among the filters of the search page.
     */
    const appFilters: Array<FilterLink> = foundApp.categories
        .filter(appFilter => filters.filter(filter => filter.categories.includes(appFilter)).length > 0)
        .map(category => ({
            name: category,
            url: "/search?" + new URLSearchParams([["filter", category]]),
        }));

    const firstFilter = appFilters.length < 1 ? null : appFilters[0];

    const appCanBeShared = "canShare" in navigator && "share" in navigator && navigator.canShare({
        title: foundApp.name,
        text: foundApp.description,
        url: foundApp.url,
    });

    return <Layout>
        <div class="p-4 md:py-8">
            <BackButton />
            <div class="mt-10 flex items-top gap-4">
                <div>
                    <AppIcon src={foundApp.icon.url ?? ""} alt={foundApp.name ?? ""} maskable={foundApp.icon.maskable ?? false} />
                </div>
                <div class="w-full min-w-0">
                    <div class="text-2xl tracking-wider font-bold truncate text-stone-700 dark:text-stone-300" style={`view-transition-name: app-name-${foundApp.id}`}>{foundApp.name}</div>
                    <div class="text-md truncate text-stone-500 tracking-wider" style={`view-transition-name: app-description-${foundApp.id}`}>{foundApp.description}</div>
                    <Show when={firstFilter !== null}>
                        <div class="mt-2">
                            <FilterButton onClick={() => vibrate(12)} name={firstFilter?.name ?? ""} selected={false} />
                        </div>
                    </Show>
                </div>
            </div>
            <div class="flex items-center gap-4 mt-5">
                <a href={foundApp.url} onclick={() => vibrate(12)} target="_blank" rel="noopener noreferrer" class="tracking-wider font-bold hover:cursor-pointer border border-stone-500 rounded-2xl px-6 py-2 text-center text-stone-600 dark:text-stone-200 grow text-lg hover:bg-stone-300 dark:hover:bg-stone-800 light:focus:bg-stone-400 light:focus:text-stone-100 dark:focus:border-stone-300 select-none outline-none">Open</a>
                <Show when={appCanBeShared}>
                    <button onClick={shareApp} class="tracking-wider font-bold hover:cursor-pointer border border-stone-500 rounded-2xl px-6 py-2 text-center text-stone-700 dark:text-stone-200 shrink bg-stone-300 dark:bg-stone-700 hover:bg-stone-400 dark:hover:bg-stone-500 focus:bg-stone-600 focus:text-stone-300 dark:focus:bg-stone-400 dark:focus:text-stone-700 select-none outline-none">Share...</button>
                </Show>
            </div>
            <div class="hidden">
                <div>Screenshots</div>
                <div>Carousel</div>
            </div>
            <Show when={foundApp.description.trim().length > 0}>
                <div class="mt-6">
                    <SectionTitle>About</SectionTitle>
                    <div class="mb-1"></div>
                    <div class="text-stone-500 dark:text-stone-300 text-lg tracking-wider">{foundApp.description}</div>
                </div>
            </Show>
            <Show when={appFilters.length > 0}>
                <div class="mt-6">
                    <SectionTitle>Categories</SectionTitle>
                    <div class="mb-2"></div>
                    <div class="flex items-center gap-2">
                        <Index each={appFilters}>
                            {filter => <A href={filter().url} tabIndex={-1}>
                                <FilterButton onClick={() => vibrate(12)} name={filter().name} selected={false} />
                            </A>}
                        </Index>
                    </div>
                </div>
            </Show>
        </div >
    </Layout >;
};

export default Detail;
