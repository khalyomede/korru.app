// src/components/Navbar.tsx
import { Component } from 'solid-js';

const Navbar: Component = () => {
    return (
        <header class="flex items-center justify-between p-4 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div class="w-8"></div>

            <h1 class="text-xl font-bold text-gray-800 dark:text-gray-100 uppercase tracking-wider">korru</h1>

            <button class="p-2 focus:outline-none text-gray-600 dark:text-gray-300">
                <i class="fa-solid fa-bars"></i>
            </button>
        </header>
    );
};

export default Navbar;
