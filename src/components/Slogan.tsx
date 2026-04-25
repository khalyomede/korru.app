// src/components/Slogan.tsx
import { Component } from 'solid-js';
import SloganProperties from './properties/SloganProperties';

const Slogan: Component<SloganProperties> = (properties) => {
    return (
        <div class="text-center px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-foreground leading-snug tracking-tight text-balance">
                <span class="block">{properties.firstLine}</span>
                <span class="block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                    {properties.secondLine}
                </span>
            </h2>
        </div>
    );
};

export default Slogan;
