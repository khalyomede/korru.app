// src/components/Navbar.tsx
import { Component } from 'solid-js';

const Navbar: Component = () => {
    return (
        <header class="flex items-center gap-2 p-4 bg-stone-100 border-b border-stone-200 dark:bg-stone-900 dark:border-stone-700">
            <img src="/logo/korru-logo-192.png" class="h-6 w-6 select-none" alt="" loading="lazy" />
            <h1 class="text-xl font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wider">
                {import.meta.env.VITE_APP_NAME}
            </h1>
        </header>
    );
};

export default Navbar;
