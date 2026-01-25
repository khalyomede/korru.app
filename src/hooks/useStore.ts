import { createStore, unwrap } from "solid-js/store";
import Store from "../interfaces/Store";
import apps from "../data/apps";

const localData = window.localStorage.getItem("store");
const jsonLocalData = localData === null ? { search: "" } : JSON.parse(localData);
const data: Store = {
    search: jsonLocalData.search ?? "",
    apps: apps,
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
