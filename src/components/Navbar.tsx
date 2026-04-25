// src/components/Navbar.tsx
import { Component } from 'solid-js';

const Navbar: Component = () => {
    return (
        <header class="sticky top-0 z-50 flex items-center justify-center px-6 py-4 bg-background/80 backdrop-blur-lg border-b border-border">
            <a href="/" class="flex items-center gap-3 group">
                <div class="relative">
                    <div class="absolute -inset-1 bg-primary/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img src="/logo/korru-logo-192.png" class="relative h-8 w-8 select-none rounded-lg" alt="Logo" loading="lazy" />
                </div>
                <h1 class="text-xl font-bold text-foreground tracking-tight">
                    {import.meta.env.VITE_APP_NAME}
                </h1>
            </a>
        </header>
    );
};

export default Navbar;
