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
        icon: {
            url: "https://www.gstatic.com/youtube/img/web/maskable/logo_192x192.png",
            maskable: false
        },
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
        id: 78,
        name: "regex101",
        categories: [
            "developer tools",
        ],
    },
    {
        id: 151,
        name: "SHEIN",
        categories: [
            "shopping",
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
        id: 180,
        name: "Othello",
        categories: [
            "games",
        ],
    },
    {
        id: 184,
        name: "PWA NES",
        categories: [
            "games",
        ],
    },
    {
        id: 189,
        url: "https://soodoku.com",
        categories: [
            "games",
        ],
    },
    {
        id: 195,
        name: "Tower Game",
        categories: [
            "games",
        ],
    },
    {
        id: 196,
        name: "Hextris",
        categories: [
            "games",
        ],
    },
    {
        id: 197,
        name: "Alchemy 2",
        categories: [
            "games",
        ],
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
        id: 199,
        name: "Bubble Pairs",
        categories: [
            "games",
        ],
    },
    {
        id: 200,
        name: "SNAKISMS",
        categories: [
            "games",
        ],
    },
    {
        id: 201,
        name: "Code Insiders",
        categories: [
            "developer tools",
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
            "social",
        ],
    },
    {
        id: 207,
        name: "PWA Inbox",
        categories: [
            "developer tools",
        ],
    },
    {
        id: 208,
        name: "Lichess",
        categories: [
            "games",
        ],
    },
    {
        id: 218,
        name: "AP News",
        categories: [
            "news",
        ],
    },
    {
        id: 222,
        name: "Tailwatch",
        categories: [
            "developer tools",
        ],
    },
    {
        id: 223,
        url: "https://thelittlegamefactory.com",
        categories: [
            "games",
        ],
    },
    {
        id: 254,
        name: "Padel Tactics",
        categories: [
            "games",
        ],
    },
    {
        id: 272,
        name: "AttaQuiz",
        categories: [
            "games",
        ],
    },
    {
        id: 275,
        name: "neobotnet",
        categories: [
            "developer tools",
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
        id: 296,
        name: "IndexerHub",
        categories: [
            "developer tools",
        ],
    },
    {
        id: 305,
        name: "FlightRadar24",
    },
    {
        id: 311,
        name: "WordBattle",
        categories: [
            "games",
        ],
    },
    {
        id: 312,
        name: "VALYRIS"
    },
    {
        id: 313,
        name: "Collectibles X",
        categories: [
            "shopping",
        ],
    },
    {
        id: 314,
        name: "AnveVoice",
        categories: [
            "business",
            "productivity",
            "developer tools",
        ],
    },
    {
        id: 317,
        name: "Sing2me",
        categories: [
            "music",
        ],
    },
    {
        id: 329,
        name: "Chromemory",
        categories: [
            "games",
        ],
    },
    {
        id: 332,
        name: "OpenRouter",
        categories: [
            "developer tools",
        ],
    },
    {
        id: 340,
        name: "Finance",
        categories: [
            "finance",
        ],
    },
    {
        id: 343,
        name: "StackBlock",
        categories: [
            "games",
        ],
    },
    {
        id: 345,
        icon: {
            url: "https://easyfollowup.pro/favicon.ico?favicon.4962300e.ico",
            maskable: false,
        }
    },
    {
        id: 352,
        name: "CheekyCycle",
        categories: [
            "shopping",
        ],
    },
    {
        id: 354,
        name: "Yesterday's Bread",
        categories: [
            "games",
        ],
    },
    {
        id: 357,
        name: "Sudoku",
        categories: [
            "games",
        ],
    },
    {
        id: 369,
        name: "DOTA",
        categories: [
            "games",
        ],
    },
    {
        id: 364,
        name: "Banxaas",
        categories: [
            "finance",
        ],
    },
    {
        id: 365,
        name: "Tidal",
        categories: [
            "finance",
        ],
    },
    {
        id: 366,
        name: "WheelHouse",
        categories: [
            "finance",
        ],
    },
    {
        id: 367,
        name: "BMI記録",
        categories: [
            "health",
        ],
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
            "news",
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
            "health",
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
    {
        id: 403,
        name: "whirligig",
        categories: [
            "music",
        ],
    },
    {
        id: 413,
        name: "KURONEKO",
        description: "メルカリ出品・在庫・台帳・分析をひとまとめに管理できる KURONEKO アプリです。"
    },
    {
        id: 454,
        name: "Boltz",
        categories: [
            "finance",
        ],
    },
    {
        id: 477,
        name: "Amazon Luna",
        categories: [
            "games",
        ],
    },
    {
        id: 482,
        name: "Farmhand",
        categories: [
            "games",
        ],
    },
    {
        id: 485,
        name: "Checkvist",
        categories: [
            "utilities",
            "productivity",
        ],
    },
    {
        id: 546,
        name: "UNIQLO USA",
        categories: [
            "shopping",
        ],
    },
    {
        id: 547,
        name: "UNIQLO France",
        categories: [
            "shopping",
        ],
    },
    {
        id: 553,
        name: "MicroWins",
        categories: [
            "health & fitness",
            "productivity",
            "lifestyle",
        ],
    },
    {
        id: 555,
        name: "Slider",
        categories: [
            "games",
        ],
    },
    {
        id: 558,
        name: "Chimera Wallet",
        categories: [
            "finance",
        ],
    },
    {
        id: 559,
        name: "Algola",
        categories: [
            "finance",
        ],
    },
    {
        id: 560,
        name: "The Arena",
        categories: [
            "social",
            "news",
            "finance",
        ],
    },
    {
        id: 566,
        name: "calckit",
        categories: [
            "utilities",
        ],
    },
    {
        id: 597,
        name: "justETF",
        categories: [
            "finance",
        ],
    },
    {
        id: 601,
        name: "Supercexy",
        categories: [
            "finance",
        ],
    },
    {
        id: 603,
        name: "ポケかぶ",
        categories: [
            "finance",
        ],
    },
    {
        id: 604,
        name: "FileShare",
        categories: [
            "utilities",
        ],
    },
    {
        id: 605,
        name: "WebIconKit",
        categories: [
            "utilities",
        ],
    },
    {
        id: 606,
        name: "CyberGenesis",
        categories: [
            "games",
        ],
    },
    {
        id: 607,
        name: "牛牛",
        icon: {
            url: "https://kyamajp.github.io/NiuNiu/icons/icon-192x192.png",
            maskable: false,
        },
        categories: [
            "games",
        ],
    },
    {
        id: 608,
        name: "CBS Wallet",
        categories: [
            "finance",
        ],
    },
    {
        id: 609,
        name: "Ging-OS",
        icon: {
            url: "https://www.destinoextinto.com/ging-OS/assets/LOGO.png",
            maskable: false,
        },
    },
    {
        id: 614,
        name: "Euphoria",
        categories: [
            "finance",
        ],
    },
    {
        id: 618,
        name: "Polypad",
        categories: [
            "utilities",
        ],
    },
    {
        id: 621,
        categories: [
            "finance",
        ],
    },
    {
        id: 622,
        categories: [
            "finance",
        ],
    },
    {
        id: 624,
        categories: [
            "finance",
        ],
    },
    {
        id: 625,
        categories: [
            "utilities",
        ],
    },
    {
        id: 637,
        categories: [
            "finance",
        ],
    },
    {
        id: 638,
        categories: [
            "finance",
        ],
    },
    {
        id: 639,
        categories: [
            "finance",
        ],
    },
    {
        id: 641,
        categories: [
            "finance",
        ],
    },
    {
        id: 652,
        categories: [
            "games",
        ],
    },
    {
        id: 643,
        categories: [
            "music",
        ],
    },
    {
        id: 647,
        categories: [
            "games",
        ],
    },
    {
        id: 648,
        categories: [
            "developer tools",
        ],
    },
    {
        id: 659,
        categories: [
            "social",
        ],
    },
    {
        id: 679,
        categories: [
            "games",
        ],
    },
];

export default complements;
