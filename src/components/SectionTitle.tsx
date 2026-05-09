import { ParentComponent } from "solid-js";

const SectionTitle: ParentComponent = (properties) => {
    return <div class="text-stone-700 dark:text-stone-500 text-sm font-bold tracking-wider uppercase select-none">
        {properties.children}
    </div>;
};

export default SectionTitle;
