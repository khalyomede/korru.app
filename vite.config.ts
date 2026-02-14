import { defineConfig, loadEnv } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';
import tailwindcss from '@tailwindcss/vite'
import { createHtmlPlugin } from 'vite-plugin-html';
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());

    return {
        base: env.VITE_BASE_URL || '/',
        plugins: [
            devtools(),
            solidPlugin(),
            tailwindcss(),
            createHtmlPlugin({
                minify: true, // enables minification in production
            }),
            VitePWA({
                registerType: 'autoUpdate',
                workbox: {
                    globPatterns: ['**/*.{js,css,html,png}'],
                    runtimeCaching: [
                        // Images (Apps icons)
                        {
                            handler: "CacheFirst",
                            urlPattern: /.*\.(webp|avif|png|ico|jpg|jpeg)$/,
                            method: "GET",
                        },
                        // Fonts (Google fonts, Fontawesome, ...)
                        {
                            handler: "CacheFirst",
                            urlPattern: /.*\.(ttf|woff|woff2|otf)$/,
                            method: "GET",
                        }
                    ]
                },
                devOptions: {
                    enabled: true,
                },
                manifest: {
                    name: env.VITE_APP_NAME,
                    short_name: env.VITE_APP_NAME,
                    description: `${env.VITE_APP_SLOGAN_1} ${env.VITE_APP_SLOGAN_2}`,
                    theme_color: env.VITE_LIGHT_THEME,
                    dir: "ltr",
                    lang: "en-US",
                    scope: env.VITE_BASE_URL,
                    display: "standalone",
                    orientation: "portrait-primary",
                    start_url: env.VITE_BASE_URL,
                    id: env.VITE_PRODUCTION_DOMAIN,
                    background_color: env.VITE_DARK_THEME,
                    categories: [
                        "reference"
                    ],
                    icons: [
                        {
                            src: `${env.VITE_BASE_URL}logo/korru-logo-2000.png`,
                            sizes: "2000x2000",
                            type: "image/png",
                            purpose: "any",
                        },
                        {
                            src: `${env.VITE_BASE_URL}logo/korru-logo-512.png`,
                            sizes: "512x512",
                            type: "image/png",
                            purpose: "any",
                        },
                        {
                            src: `${env.VITE_BASE_URL}logo/korru-logo-192.png`,
                            sizes: "192x192",
                            type: "image/png",
                            purpose: "any",
                        },
                        {
                            src: `${env.VITE_BASE_URL}logo/korru-logo-maskable-2000.png`,
                            sizes: "2000x2000",
                            type: "image/png",
                            purpose: "maskable",
                        },
                        {
                            src: `${env.VITE_BASE_URL}logo/korru-logo-monochrome-2000.png`,
                            sizes: "2000x2000",
                            type: "image/png",
                            purpose: "monochrome",
                        },
                        {
                            src: `${env.VITE_BASE_URL}logo/korru-logo-maskable-monochrome-2000.png`,
                            sizes: "2000x2000",
                            type: "image/png",
                            purpose: "maskable monochrome",
                        },
                    ],
                    screenshots: [
                        {
                            src: `${env.VITE_BASE_URL}screenshots/korru-home-light-mobile.png`,
                            sizes: "1290x2796",
                            type: "image/png",
                            form_factor: "narrow"
                        },
                        {
                            src: `${env.VITE_BASE_URL}screenshots/korru-apps-light-mobile.png`,
                            sizes: "1290x2796",
                            type: "image/png",
                            form_factor: "narrow"
                        },
                        {
                            src: `${env.VITE_BASE_URL}screenshots/korru-search-light-mobile.png`,
                            sizes: "1290x2796",
                            type: "image/png",
                            form_factor: "narrow"
                        },
                        {
                            src: `${env.VITE_BASE_URL}screenshots/korru-search-dark-mobile.png`,
                            sizes: "1290x2796",
                            type: "image/png",
                            form_factor: "narrow"
                        },
                    ]
                }
            }),
        ],
        server: {
            port: 3000,
        },
        build: {
            target: 'esnext',
            minify: 'terser', // or 'esbuild' (but terser gives more control)
            terserOptions: {
                compress: true,
                mangle: true,
            },
        },
    };
});
