// src/components/Slogan.tsx
import { Component } from 'solid-js';

const Slogan: Component = () => {
    return (
        <div class="text-center mt-8 mb-6 px-4">
            <h2 class="text-2xl md:text-3xl font-medium text-gray-800 dark:text-gray-100 leading-tight tracking-wide">
                <p>The world's largest</p>
                <p>installable web app catalog!</p>
            </h2>
        </div>
    );
};

export default Slogan;
