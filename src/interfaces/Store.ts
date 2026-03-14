import App from "./App";
import Filter from "./Filter";

interface Store {
    search: string,
    apps: Array<App>,
    filters: Array<Filter>,
};

export default Store;
