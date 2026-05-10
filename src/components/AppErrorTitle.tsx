import { ParentComponent } from "solid-js";

const AppErrorTitle: ParentComponent = (properties) => {
    return <div class="text-xl text-stone-500 dark:text-stone-400 font-bold tracking-wide">
        {properties.children}
    </div>;
};

export default AppErrorTitle;
