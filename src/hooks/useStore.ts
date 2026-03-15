import { createStore, unwrap } from "solid-js/store";
import Store from "../interfaces/Store";
import apps from "../data/apps";
import complements from "../data/complements";
import Filter from "../interfaces/Filter";

/**
 * We use "complements" to fix mistakes or missing informations in
 * apps manifests, like broken icons, missing categories, ...
 */
const completedApps = apps.map(app => ({
    ...app,
    ...complements.find(complement => complement.id === app.id) || {},
}));

const localData = window.localStorage.getItem("store");
const jsonLocalData = localData === null ? { search: "" } : JSON.parse(localData);

const savedFilters: Array<Filter> = jsonLocalData.filters ?? [];
const defaultFilters: Array<Filter> = [
    {
        id: 1,
        name: "all",
        selected: true,
        categories: [],
        default: true,
    },
    {
        id: 2,
        name: "game",
        selected: false,
        categories: [
            "games",
        ],
        default: false,
    },
    {
        id: 3,
        name: "news",
        selected: false,
        categories: [
            "magazines",
            "news",
        ],
        default: false,
    },
    {
        id: 4,
        name: "social",
        selected: false,
        categories: [
            "social",
            "dating",
            "social networking",
        ],
        default: false,
    },
    {
        id: 5,
        name: "shopping",
        selected: false,
        categories: [
            "shopping",
        ],
        default: false,
    },
    {
        id: 6,
        name: "tools",
        selected: false,
        categories: [
            "utilities",
        ],
        default: false,
    }
];

const filters: Array<Filter> = defaultFilters
    .map(filter => ({
        ...filter,
        selected: savedFilters.find(savedFilter => savedFilter.id === filter.id)?.selected ?? filter.selected
    }));

const data: Store = {
    search: jsonLocalData.search ?? "",
    apps: completedApps,
    filters: filters
};

const useStore = () => {
    const [store, setStore] = createStore<Store>(data);

    const setLocalStore = <K extends keyof Store>(key: K, value: Store[K]) => {
        setStore(key, value);
        window.localStorage.setItem("store", JSON.stringify(unwrap(store)));
    };

    return [store, setLocalStore] as const; // `as const` helps with tuple typing
};

export default useStore;
