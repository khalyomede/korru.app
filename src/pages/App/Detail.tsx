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
import Navbar from "../../components/Navbar";
import { ExternalLink, Share2 } from "lucide-solid";

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
        <Navbar />
        <div class="grow overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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
                <a href={foundApp.url} onclick={() => vibrate(12)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 tracking-wider font-medium hover:cursor-pointer rounded-control px-6 py-2.5 text-center grow text-lg select-none outline-none transition-colors duration-200 border border-stone-700 bg-stone-700 text-stone-50 dark:border-stone-300 dark:bg-stone-300 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-100 focus:ring-2 focus:ring-stone-400">
                    <span>Open</span>
                    <ExternalLink size={20} class="shrink-0" />
                </a>
                <Show when={appCanBeShared}>
                    <button onClick={shareApp} class="inline-flex items-center justify-center gap-2 tracking-wider font-medium hover:cursor-pointer rounded-control px-6 py-2.5 text-center text-lg shrink-0 select-none outline-none transition-colors duration-200 border border-stone-300 dark:border-stone-600 text-stone-600 dark:text-stone-300 hover:bg-stone-200 hover:border-stone-400 dark:hover:bg-stone-800 dark:hover:border-stone-500 focus:border-stone-500 dark:focus:border-stone-400">
                        <Share2 size={20} class="shrink-0" />
                        <span>Share</span>
                    </button>
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
        </div>
    </Layout >;
};

export default Detail;
