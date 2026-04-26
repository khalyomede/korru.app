// src/components/AppIconPreviewList.tsx
import { Component, Index } from 'solid-js';
import AppIconPreview from './AppIcon';

import useStore from '../hooks/useStore';

const AppIconPreviewList: Component = () => {
    const [store,] = useStore();
    const { apps } = store;
    const featuredApps = apps.filter(app => !app.disabled && app.featuredOnHomePage);

    // Calculate columns needed for 2 balanced rows
    const itemCount = featuredApps.length;
    const columns = Math.ceil(itemCount / 2);

    return (
        <div
            class="grid justify-center gap-2 px-4 py-4"
            style={{ "grid-template-columns": `repeat(${columns}, auto)` }}
        >
            <Index each={featuredApps}>
                {app => <AppIconPreview src={app().icon.url} alt={app().name} maskable={app().icon.maskable} />}
            </Index>
        </div>
    );
};

export default AppIconPreviewList;
