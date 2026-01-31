// src/components/Navbar.tsx
import { Component } from 'solid-js';

const Navbar: Component = () => {
    return (
        <header class="flex items-center justify-between p-4 bg-white border-b border-stone-200 dark:bg-stone-900 dark:border-stone-700">
            <div class="w-5"></div>

            <h1 class="text-xl font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wider">
                <div class="flex items-center gap-2">
                    <img src="/logo/korru-logo-192.png" class="h-6 w-6" alt="Logo" loading="lazy" />
                    <span>{import.meta.env.VITE_APP_NAME}</span>
                </div>
            </h1>

            <span class="p-2 focus:outline-none text-stone-600 dark:text-stone-300">
                {/* <i class="fa-solid fa-bars"></i> */}
            </span>
        </header>
    );
};

export default Navbar;
