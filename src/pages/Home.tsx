// src/App.tsx
import { Component, onMount } from 'solid-js';
import Navbar from '../components/Navbar';
import Slogan from '../components/Slogan';
import AppIconPreviewList from '../components/AppIconPreviewList';
import SearchBar from '../components/SearchBar';
import useStore from '../hooks/useStore';
import { useNavigate } from '@solidjs/router';

const Home: Component = () => {
    onMount(() => {
        // Detect system color scheme and enable dark mode if preferred
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        }
        // If light mode is preferred, we do nothing — Tailwind defaults to light
    });

    const [store, _] = useStore();
    const navigate = useNavigate();
    const prefersReducedMotions = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const onSearchBarFocus = () => {
        if (document.startViewTransition && !prefersReducedMotions()) {
            document.startViewTransition(() => {
                navigate("/search");
            });
        } else {
            navigate("/search");
        }
    };

    return (
        <div class="min-h-dvh bg-stone-100 font-sans flex flex-col bg-stone-100 dark:bg-stone-900">
            <Navbar />
            <main class="flex-grow flex flex-col max-w-lg lg:max-w-md mx-auto">
                {/* Top half: Slogan + Icons */}
                <div class="flex-1 flex flex-col justify-center items-center p-4 gap-0">
                    <Slogan firstLine={import.meta.env.VITE_APP_SLOGAN_1} secondLine={import.meta.env.VITE_APP_SLOGAN_2} />
                    <AppIconPreviewList />
                </div>

                {/* Bottom half: Search bar */}
                <div class="flex-1 flex flex-col justify-start items-center p-4">
                    <SearchBar id="search" placeholder="Search anything..." onFocus={onSearchBarFocus} value={store.search} focusOnMount={false} />
                </div>
            </main>
        </div>
    );
};

export default Home;
