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
        <div class="min-h-dvh bg-background font-sans flex flex-col">
            <Navbar />
            <main class="flex-grow flex flex-col max-w-xl mx-auto w-full px-4">
                {/* Top half: Slogan + Icons */}
                <div class="flex-1 flex flex-col justify-center items-center gap-6">
                    <Slogan firstLine={import.meta.env.VITE_APP_SLOGAN_1} secondLine={import.meta.env.VITE_APP_SLOGAN_2} />
                    <AppIconPreviewList />
                </div>

                {/* Bottom half: Search bar */}
                <div class="flex-1 flex flex-col justify-start items-center pt-8 pb-12">
                    <SearchBar id="search" placeholder="Search for your favorite apps..." onFocus={onSearchBarFocus} value={store.search} focusOnMount={false} />
                    <p class="text-muted-foreground text-sm mt-4 tracking-wide">Discover thousands of web apps</p>
                </div>
            </main>
        </div>
    );
};

export default Home;
