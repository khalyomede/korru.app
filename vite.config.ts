import { defineConfig, loadEnv } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';
import tailwindcss from '@tailwindcss/vite'
import { createHtmlPlugin } from 'vite-plugin-html';
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());

    return {
        plugins: [
            devtools(),
            solidPlugin(),
            tailwindcss(),
            createHtmlPlugin({
                minify: true, // enables minification in production
            }),
            VitePWA({
                registerType: "autoUpdate",
                workbox: {
                    globPatterns: ['**/*.{js,css,html,ico,png}']
                },
                devOptions: {
                    enabled: true,
                },
                manifest: {
                    name: env.VITE_APP_NAME,
                    short_name: env.VITE_APP_NAME,
                    description: `${env.VITE_APP_SLOGAN_1} ${env.VITE_APP_SLOGAN_2}`,
                    theme_color: "#1c1917",
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
