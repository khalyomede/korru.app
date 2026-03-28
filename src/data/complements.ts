import App from "../interfaces/App";

/**
 * @todo Complement PWAs to adjust keys or add missing informations for optimal UX.
 * To be merged with data/apps.ts
 */
const complements: Array<Partial<App>> = [
    {
        id: 1,
        name: "Spotify",
        categories: [
            "music",
            "entertainment",
            "multimedia",
        ],
    },
    {
        id: 5,
        name: "Youtube",
        categories: [
            "entertainment",
            "multimedia",
            "education",
            "news",
        ]
    },
    {
        id: 7,
        name: "TheFork",
        description: "Discover and book the best restaurant",
        categories: [
            "food",
        ],
    },
    {
        id: 8,
        name: "Google Translate",
        categories: [
            "education",
            "utilities",
        ],
    },
    {
        id: 165,
        name: "Microsoft Bing Webmaster Tools",
        icon: {
            url: "https://www.bing.com/webmasters/Content/PWA/logo/bing-logo-192.png",
            maskable: true
        },
        categories: [
            "business",
            "productivity",
            "developer",
            "developer tools",
        ],
    },
    {
        id: 179,
        name: "Nanocell-csv",
        icon: {
            url: "https://www.nanocell-csv.com/favicon-96x96.png",
            maskable: false,
        },
    },
    {
        id: 198,
        name: "The Cube",
        icon: {
            url: "https://bsehovac.github.io/the-cube/assets/icons/android-chrome-192x192.png",
            maskable: false,
        },
        categories: [
            "games",
        ],
    },
    {
        id: 204,
        name: "Slingshot",
        categories: [
            "finance",
            "productivity",
            "lifestyle",
        ],
    },
    {
        id: 205,
        name: "Reddit",
        description: "",
        icon: {
            url: "https://www.redditstatic.com/shreddit/assets/favicon/192x192.png",
            maskable: false,
        },
        "categories": [
            "news",
            "entertainment",
        ],
    },
    {
        id: 281,
        name: "MediaFast"
    },
    {
        id: 284,
        name: "OpenHour",
        icon: {
            url: "https://www.openhour.ai/favicon.ico?favicon.0b3bf435.ico",
            maskable: false,
        }
    },
];

export default complements;
