// src/components/AppIconPreviewList.tsx
import { Component, Index } from 'solid-js';
import AppIconPreview from './AppIconPreview';

const AppIconPreviewList: Component = () => {
    /**
     * @todo Add another "iconFeaturedOnHomePage" property on the App record + load apps and filter on iconFeaturedOnHomePage: true.
     */
    const apps = [
        { src: "https:\/\/static.cdninstagram.com\/rsrc.php\/yM\/r\/h1DANLym4e8.webp", alt: "Threads", maskable: true },
        { src: "https://play2048.co/favicon192.png", alt: "2048", maskable: false },
        { src: "https://grok.com/images/android-chrome-192x192.png", alt: "Grok", maskable: true },
        { src: "https://substack.com/img/manifest-icons/app-maskable-192.png", alt: "Substack", maskable: true },
        { src: "https://www.gstatic.com/aistudio/ai_studio_favicon_2_96x96.png", alt: "Google AI Studio", maskable: true },
        { src: "https://www.thefork.fr/statics/icons/icon-72x72.png", alt: "TheFork", maskable: false },
        { src: "https://abs.twimg.com/responsive-web/client-web/icon-default-maskable.bacea37a.png", alt: "X", maskable: true },
        { src: "https://open.spotifycdn.com/cdn/images/icons/Spotify_128.45316d66.png", alt: "Spotify", maskable: false },
    ];

    return (
        <div class="flex flex-wrap justify-center gap-2 px-4 py-4">
            <Index each={apps}>
                {app => <AppIconPreview src={app().src} alt={app().alt} maskable={app().maskable} />}
            </Index>
        </div>
    );
};

export default AppIconPreviewList;
