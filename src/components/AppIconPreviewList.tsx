// src/components/AppIconPreviewList.tsx
import { Component, Index } from 'solid-js';
import AppIconPreview from './AppIconPreview';

const AppIconPreviewList: Component = () => {
    const apps = [
        { src: "https:\/\/static.cdninstagram.com\/rsrc.php\/yM\/r\/h1DANLym4e8.webp", alt: "Threads" },
        { src: "https://play2048.co/favicon192.png", alt: "2048" },
        { src: "https://grok.com/images/android-chrome-192x192.png", alt: "Grok" },
        { src: "https://substack.com/img/manifest-icons/app-maskable-192.png", alt: "Substack" },
        { src: "https://www.gstatic.com/aistudio/ai_studio_favicon_2_96x96.png", alt: "Google AI Studio" },
        { src: "https://www.thefork.fr/statics/icons/icon-72x72.png", alt: "TheFork" },
        { src: "https://www.gstatic.com/images/branding/product/2x/drive_2020q4_96dp.png", alt: "Google Drive" },
        { src: "https://open.spotifycdn.com/cdn/images/icons/Spotify_128.45316d66.png", alt: "Spotify" },
    ];

    return (
        <div class="flex flex-wrap justify-center gap-2 px-4 py-4">
            <Index each={apps}>
                {app => <AppIconPreview src={app().src} alt={app().alt} />}
            </Index>
        </div>
    );
};

export default AppIconPreviewList;
