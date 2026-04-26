// src/components/AppIconPreview.tsx
import { Component } from 'solid-js';
import AppIconProperties from './properties/AppIconProperties';

const AppIcon: Component<AppIconProperties> = (props) => {
    return (
        <div
            classList={{
                "border": !props.maskable,
                "dark:border-stone-700": true,
                "border-stone-300": true,
                "flex-shrink-0": true,
                "mx-1": true,
                "my-1": true,
                "rounded-3xl": true,
                "overflow-hidden": true,
                "transition-transform": true,
                "hover:scale-105": true,
                "select-none": true,
            }}
        >
            <img
                src={props.src.trim()} // Added .trim() to fix whitespace in URLs
                alt={props.alt}
                class="w-16 h-16 object-cover bg-stone-50 dark:bg-stone-700"
                loading="lazy"
            />
        </div>
    );
};

export default AppIcon;
