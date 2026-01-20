import { createStore } from "solid-js/store";

const useStore = () => createStore({
    search: "",
});

export default useStore;
