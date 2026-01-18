// src/App.tsx
import { Component, onMount } from 'solid-js';
import Navbar from './components/Navbar';
import Slogan from './components/Slogan';
import AppIconPreviewList from './components/AppIconPreviewList';
import LandingSearchBar from './components/LandingSearchBar';

const App: Component = () => {
    onMount(() => {
        // Detect system color scheme and enable dark mode if preferred
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        }
        // If light mode is preferred, we do nothing — Tailwind defaults to light
    });

    return (
        <div class="min-h-dvh bg-white font-sans flex flex-col dark:bg-gray-900">
            <Navbar />
            <main class="flex-grow flex flex-col md:flex-row">
                {/* Top half: Slogan + Icons */}
                <div class="flex-1 flex flex-col justify-center items-center p-4 gap-0">
                    <Slogan />
                    <AppIconPreviewList />
                </div>

                {/* Bottom half: Search bar */}
                <div class="flex-1 flex flex-col justify-start items-center p-4">
                    <LandingSearchBar />
                </div>
            </main>
        </div>
    );
};

export default App;
