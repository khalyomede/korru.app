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
    {
        id: 305,
        name: "FlightRadar24",
    },
    {
        id: 312,
        name: "VALYRIS"
    },
    {
        id: 329,
        name: "Chromemory",
        categories: [
            "games",
        ],
    },
    {
        id: 343,
        name: "StackBlock",
    },
    {
        id: 345,
        icon: {
            url: "https://easyfollowup.pro/favicon.ico?favicon.4962300e.ico",
            maskable: false,
        }
    },
    {
        id: 369,
        name: "DOTA",
        categories: [
            "games",
        ],
    },
    {
        id: 370,
        name: "Topotron",
        categories: [
            "utilities",
        ],
    },
    {
        id: 371,
        name: "Bragly",
        categories: [
            "utilities",
        ],
    },
    {
        id: 372,
        name: "Ecosia",
        categories: [
            "utilities",
        ],
    },
    {
        id: 373,
        name: "Qwant",
        categories: [
            "utilities",
        ],
    },
    {
        id: 377,
        name: "Mercari",
        categories: [
            "shopping",
        ],
    },
    {
        id: 380,
        name: "Pearl",
        categories: [
            "utilities",
        ],
    },
    {
        id: 381,
        name: "DaleDele",
        categories: [
            "utilities",
        ],
    },
    {
        id: 382,
        name: "SunPath",
        categories: [
            "utilities",
        ],
    },
    {
        id: 383,
        name: "KurwaCoach",
        categories: [
            "utilities",
        ],
    },
    {
        id: 384,
        name: "Listly",
        categories: [
            "utilities",
        ],
    },
    {
        id: 385,
        name: "MateCata",
        categories: [
            "utilities",
            "games",
        ],
    },
    {
        id: 386,
        name: "Doodl",
        categories: [
            "utilities",
        ],
    },
    {
        id: 387,
        name: "PatternFinder",
        categories: [
            "utilities",
        ],
    },
    {
        id: 388,
        name: "GoldenList",
        categories: [
            "utilities",
        ],
    },
    {
        id: 390,
        name: "Berg AR",
        categories: [
            "utilities",
        ],
    },
    {
        id: 391,
        name: "Chipmunkify",
        categories: [
            "music",
            "utilities",
        ],
    },
    {
        id: 392,
        name: "CoffeeGameOnline",
        categories: [
            "games",
        ],
    },
    {
        id: 393,
        name: "is.team",
        categories: [
            "utilities",
        ],
    },
    {
        id: 394,
        name: "Specsight",
        categories: [
            "utilities",
        ],
    },
    {
        id: 395,
        name: "HN",
        categories: [
            "utilities",
        ],
    },
    {
        id: 396,
        name: "Minnow",
        categories: [
            "utilities",
        ],
    },
    {
        id: 397,
        name: "fastsleep.app",
        categories: [
            "utilities",
        ],
    },
    {
        id: 398,
        name: "AMBR",
        categories: [
            "social",
            "music",
        ],
    },
    {
        id: 401,
        name: "Bal",
        categories: [
            "games",
        ],
    },
    {
        id: 402,
        name: "Tallyman",
        categories: [
            "utilities",
        ],
    },
];

export default complements;
