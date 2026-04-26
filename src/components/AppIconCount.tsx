// src/components/AppIconCount.tsx
import { Component } from 'solid-js';
import useStore from '../hooks/useStore';

/**
 * Formats a number in a compact way for display.
 * Examples: 444 → "444", 1500 → "1.5k", 12000 → "12k", 150000 → "150k"
 */
const formatCount = (count: number): string => {
    if (count < 1000) {
        return count.toString();
    }
    if (count < 10000) {
        // Show one decimal for 1k-9.9k range (e.g., 1.5k)
        const value = count / 1000;
        return value % 1 === 0 ? `${value}k` : `${value.toFixed(1)}k`;
    }
    // 10k+ just show rounded (e.g., 12k, 150k)
    return `${Math.round(count / 1000)}k`;
};

const AppIconCount: Component = () => {
    const [store] = useStore();

    const totalApps = () => store.apps.filter(app => !app.disabled).length;
    const featuredApps = () => store.apps.filter(app => !app.disabled && app.featuredOnHomePage).length;
    const remainingCount = () => totalApps() - featuredApps();

    return (
        <div
            class="flex-shrink-0 mx-1 my-1 rounded-3xl overflow-hidden select-none w-16 h-16 flex items-center justify-center bg-stone-200 dark:bg-stone-700 border border-stone-300 dark:border-stone-600"
        >
            <span class="text-xs font-medium text-stone-600 dark:text-stone-300 text-center leading-tight px-1">
                +{formatCount(remainingCount())}
            </span>
        </div>
    );
};

export default AppIconCount;
