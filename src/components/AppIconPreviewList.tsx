// src/components/AppIconPreviewList.tsx
import { Component } from 'solid-js';
import AppIconPreview from './AppIconPreview';

const AppIconPreviewList: Component = () => {
    const apps = [
        { src: "https://play2048.co/favicon192.png", alt: "2048" },
        { src: "https://www.gstatic.com/youtube/img/web/maskable/logo_192x192.png", alt: "YouTube" },
        { src: "https://abs.twimg.com/responsive-web/client-web/icon-default.522d363a.png", alt: "X" },
        { src: "https://soundcloud.com/pwa-icon-192.png", alt: "SoundCloud" },
        { src: "https://www.thefork.fr/statics/icons/icon-72x72.png", alt: "TheFork" },
        { src: "https://www.gstatic.com/translate/favicon.ico", alt: "Google Translate" },
        { src: "https://www.gstatic.com/images/branding/product/2x/drive_2020q4_96dp.png", alt: "Google Drive" },
        { src: "https://open.spotifycdn.com/cdn/images/icons/Spotify_128.45316d66.png", alt: "Spotify" },
    ];

    return (
        <div class="flex flex-wrap justify-center gap-2 px-4 py-4">
            {apps.map((app) => (
                <AppIconPreview key={app.alt} src={app.src} alt={app.alt} />
            ))}
        </div>
    );
};

export default AppIconPreviewList;
