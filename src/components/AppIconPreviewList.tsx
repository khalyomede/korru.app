// src/components/AppIconPreviewList.tsx
import { Component, Index } from 'solid-js';
import AppIconPreview from './AppIcon';
import AppIconCount from './AppIconCount';
import useStore from '../hooks/useStore';

const AppIconPreviewList: Component = () => {
    const [store,] = useStore();
    const { apps } = store;
    const featuredApps = apps.filter(app => !app.disabled && app.featuredOnHomePage);

    return (
        <div class="flex flex-wrap justify-center gap-2 px-4 py-4">
            <Index each={featuredApps}>
                {app => <AppIconPreview src={app().icon.url} alt={app().name} maskable={app().icon.maskable} />}
            </Index>
            <AppIconCount />
        </div>
    );
};

export default AppIconPreviewList;
