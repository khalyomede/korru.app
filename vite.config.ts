import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';
import tailwindcss from '@tailwindcss/vite'
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
    plugins: [
        devtools(),
        solidPlugin(),
        tailwindcss(),
        createHtmlPlugin({
            minify: true, // enables minification in production
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
});
