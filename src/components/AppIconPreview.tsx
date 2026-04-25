// src/components/AppIconPreview.tsx
import { Component } from 'solid-js';

interface AppIconPreviewProps {
    src: string;
    alt: string;
}

const AppIconPreview: Component<AppIconPreviewProps> = (props) => {
    return (
        <div class="flex-shrink-0 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-110 hover:-translate-y-1 select-none shadow-sm hover:shadow-xl bg-card p-1">
            <img
                src={props.src.trim()}
                alt={props.alt}
                class="w-14 h-14 object-cover rounded-xl"
            />
        </div>
    );
};

export default AppIconPreview;
