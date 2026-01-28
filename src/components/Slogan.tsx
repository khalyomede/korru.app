// src/components/Slogan.tsx
import { Component } from 'solid-js';
import SloganProperties from './properties/SloganProperties';

const Slogan: Component<SloganProperties> = (properties) => {
    return (
        <div class="text-center mt-8 mb-6 px-4">
            <h2 class="text-2xl md:text-3xl font-medium text-stone-600 dark:text-stone-300 leading-tight tracking-wide">
                <p>{properties.firstLine}</p>
                <p>{properties.secondLine}</p>
            </h2>
        </div>
    );
};

export default Slogan;
