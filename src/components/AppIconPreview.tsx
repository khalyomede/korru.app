// src/components/AppIconPreview.tsx
import { Component } from 'solid-js';

interface AppIconPreviewProps {
    src: string;
    alt: string;
}

const AppIconPreview: Component<AppIconPreviewProps> = (props) => {
    return (
        <div class="flex-shrink-0 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 select-none">
            <img
                src={props.src.trim()}
                alt={props.alt}
                class="w-14 h-14 object-cover rounded-2xl"
            />
        </div>
    );
};

export default AppIconPreview;
