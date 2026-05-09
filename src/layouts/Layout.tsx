import { Component, ParentComponent } from "solid-js";

const Layout: ParentComponent = (properties) => {
    return <div class="flex flex-col h-dvh bg-stone-100 dark:bg-stone-900 text-stone-900 dark:text-stone-100 max-w-2xl mx-auto">
        {properties.children}
    </div>
};

export default Layout;
