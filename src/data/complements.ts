import App from "../interfaces/App";

/**
 * @todo Complement PWAs to adjust keys or add missing informations for optimal UX.
 * To be merged with data/apps.ts
 */
const complements: Array<Partial<App>> = [
    {
        id: 165,
        name: "Microsoft Bing Webmaster Tools",
        icon: {
            url: "https://www.bing.com/webmasters/Content/PWA/logo/bing-logo-192.png",
            maskable: true
        },
    },
    {
        id: 179,
        name: "Nanocell-csv",
        icon: {
            url: "https://www.nanocell-csv.com/favicon-96x96.png",
            maskable: false,
        },
        screenshots: [
            {
                url: "https://www.nanocell-csv.com/web/img/screenshot_light.png",
                name: "App spreadsheet in light mode"
            },
            {
                url: "https://www.nanocell-csv.com/web/img/screenshot_dark.png",
                name: "App spreadsheet in dark mode"
            }
        ]
    },
    {
        id: 198,
        name: "The Cube",
        icon: {
            url: "https://bsehovac.github.io/the-cube/assets/icons/android-chrome-192x192.png",
            maskable: false,
        },
    },
    {
        id: 204,
        name: "Slingshot",
    }
];

export default complements;
