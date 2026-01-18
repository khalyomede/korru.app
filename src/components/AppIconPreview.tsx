// src/components/AppIconPreview.tsx
import { Component } from 'solid-js';

interface AppIconPreviewProps {
    src: string;
    alt: string;
}

const AppIconPreview: Component<AppIconPreviewProps> = (props) => {
    return (
        <div class="flex-shrink-0 mx-2 my-2 rounded-lg overflow-hidden transition-transform hover:scale-105 dark:shadow-md">
            <img
                src={props.src.trim()} // Added .trim() to fix whitespace in URLs
                alt={props.alt}
                class="w-16 h-16 object-cover"
            />
        </div>
    );
};

export default AppIconPreview;
