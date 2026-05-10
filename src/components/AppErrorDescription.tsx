import { ParentComponent } from "solid-js";

const AppErrorDescription: ParentComponent = (properties) => {
    return <div class="text-center text-lg text-stone-400 dark:text-stone-600 max-w-80 mt-2">
        {properties.children}
    </div>;
};

export default AppErrorDescription;
