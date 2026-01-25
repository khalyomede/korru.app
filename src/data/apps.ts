import App from "../interfaces/App";

const apps: Array<App> = [
    {
        id: 1,
        icon: {
            url: "https://open.spotifycdn.com/cdn/images/icons/Spotify_MWP_512.50dd387d.png",
            maskable: false,
        },
        name: "Spotify",
        description: "Spotify Web",
        url: "https://open.spotify.com/?utm_source=pwa_install",
        screenshots: [],
    },
    {
        id: 2,
        icon: {
            url: "https://soundcloud.com/pwa-icon-192.png",
            maskable: true,
        },
        url: "https://soundcloud.com/discover",
        name: "Soundcloud",
        description: "SoundCloud - Play Music, Audio & New Songs",
        screenshots: [],
    },
    {
        id: 3,
        icon: {
            url: "https://www.gstatic.com/images/branding/product/1x/drive_2020q4_96dp.png",
            maskable: false,
        },
        url: "https://drive.google.com/?lfhs\u003d2",
        name: "Google Drive",
        description: "",
        screenshots: [],
    },
    {
        id: 4,
        icon: {
            url: "https://play2048.co/favicon192.png",
            maskable: false,
        },
        url: "https://play2048.co/",
        name: "2048",
        description: "Merge the tiles to get 2048!",
        screenshots: [],
    },
    {
        id: 6,
        icon: {
            url: "https://www.gstatic.com/youtube/img/web/maskable/logo_192x192.png",
            maskable: true
        },
        url: "https://www.youtube.com/?feature\u003dytca",
        name: "Youtube",
        description: "",
        screenshots: [],
    },
    {
        id: 7,
        icon: {
            url: "https://abs.twimg.com/responsive-web/client-web/icon-default-maskable.bacea37a.png",
            maskable: true,
        },
        name: "X",
        description: "News, politics, trending music, international events, sports scores, and the latest global updates in real time—all using less data.",
        url: "https://x.com/?utm_source=homescreen&utm_medium=shortcut",
        screenshots: [],
    },
    {
        id: 8,
        icon: {
            url: "https://www.thefork.com/statics/icons/icon-48x48.png",
            maskable: false,
        },
        url: "https://www.thefork.com/",
        name: "TheFork",
        description: "Discover and book the best restaurant",
        screenshots: [],
    },
    {
        id: 9,
        icon: {
            url: "https://www.gstatic.com/translate/favicon.ico",
            maskable: false,
        },
        url: "https://translate.google.com/?lfhs\u003d2",
        name: "Google Translate",
        description: "",
        screenshots: [],
    },
    {
        id: 10,
        name: "Pinterest",
        description: "",
        icon: {
            url: "https://s.pinimg.com/images/favicon_red_192.png",
            maskable: false,
        },
        url: "https://pinterest.com/?utm_source=homescreen_icon",
        screenshots: [],
    },
    {
        id: 11,
        name: "Starbucks",
        description: "",
        icon: {
            url: "https://www.starbucks.com/pwa-icon-192.png",
            maskable: false,
        },
        url: "https://www.starbucks.com",
        screenshots: [],
    },
    {
        id: 12,
        name: "Jumia",
        description: "",
        icon: {
            url: "https://www.jumia.ma/assets_he/manifest/jumia/maskable-icons/icon_512x512.17af53325585e3731db3076f383e6112.png",
            maskable: true,
        },
        url: "https://www.jumia.ma/",
        screenshots: [],
    },
    {
        id: 13,
        name: "OLX Lite",
        description: "",
        icon: {
            url: "https://www.olx.in/logo/olx-medium.png",
            maskable: false,
        },
        url: "https://www.olx.in/?install=true",
        screenshots: [],
    },
    {
        id: 14,
        name: "FT",
        description: "",
        icon: {
            url: "https://www.ft.com/__assets/creatives/brand-ft/icons/v2/android-chrome-36x36.png",
            maskable: false,
        },
        url: "https://www.ft.com",
        screenshots: [],
    },
    {
        id: 15,
        name: "Infobae",
        description: "Noticias de Argentina y del mundo en tiempo real.",
        icon: {
            url: "https://www.infobae.com/assets/images/logos/icon-192x192.png",
            maskable: false,
        },
        url: "https://www.infobae.com/",
        screenshots: [],
    },
    {
        id: 16,
        name: "nau.ch",
        description: "Nachrichten aus der Schweiz und der Welt",
        icon: {
            url: "https://www.nau.ch/static/frontpage/maskable_icon-787x787.png",
            maskable: true,
        },
        url: "https://www.nau.ch",
        screenshots: [],
    },
    {
        id: 17,
        name: "Medium",
        description: "",
        icon: {
            url: "https://miro.medium.com/v2/b94623fa508af2c67a148065448d857f2216e47452564ed07a253c920211811b",
            maskable: false,
        },
        url: "https://medium.com",
        screenshots: [],
    },
    {
        id: 20,
        name: "Weather.com",
        description: "The Weather Channel and weather.com provide a national and local weather forecast for cities, as well as weather radar, report and hurricane coverage.",
        icon: {
            url: "https://s.w-x.co/twc_36x36.png",
            maskable: false
        },
        url: "https://weather.com/",
        screenshots: [],
    },
    {
        id: 22,
        name: "OpenRent",
        description: "",
        icon: {
            url: "https://staticcdn.openrent.co.uk/images/logos/meta/android-chrome-192x192.png",
            maskable: false
        },
        url: "https://www.openrent.co.uk/?utm_source=web_app_manifest",
        screenshots: [],
    },
    {
        id: 23,
        name: "Airbnb",
        description: "Vacation Rentals, Homes, Experiences & Places - Airbnb",
        icon: {
            url: "https://a0.muscache.com/airbnb/static/icons/apple-touch-icon-76x76-3b313d93b1b5823293524b9764352ac9.png",
            maskable: true
        },
        url: "https://www.airbnb.fr/?utm_source=homescreen",
        screenshots: [],
    },
    {
        id: 24,
        name: "CARIGAMI",
        description: "",
        icon: {
            url: "https://www.carigami.fr/android-chrome-512x512-maskable.png",
            maskable: true,
        },
        url: "https://www.carigami.fr/?utm_source=homescreen",
        screenshots: [],
    },
    {
        id: 26,
        name: "Shine",
        description: "",
        icon: {
            url: "https://staticcand.shine.com/c/s1/images/ic_launcher_144.png",
            maskable: false
        },
        url: "https://www.shine.com/?utm_source=m_web_app",
        screenshots: [],
    },
    {
        id: 27,
        name: "Instagram",
        description: "Instagram is a simple way to capture and share the world's moments.",
        icon: {
            url: "https:\/\/static.cdninstagram.com\/rsrc.php\/v4\/yM\/r\/7xwrlYffOBb.png",
            maskable: false
        },
        url: "https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1",
        screenshots: [],
    },
    {
        id: 28,
        name: "Treebo",
        description: "India's Top Rated Budget Hotel Chain",
        icon: {
            url: "https://images.treebohotels.com/images/Icons/pwa-icon.png?h=192&w=192",
            maskable: false
        },
        url: "https://www.treebo.com/",
        screenshots: [],
    },
    {
        id: 30,
        name: "MakeMyTrip",
        description: "MakeMyTrip Commons PWA",
        icon: {
            url: "https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/mmt_launcher_512x512.png",
            maskable: true
        },
        url: "https://www.makemytrip.com/?homescreen=PWA_Bookmark",
        screenshots: [],
    },
    {
        id: 35,
        name: "Soundslice",
        description: "Turn sheet music into an interactive learning environment. Perfect for practicing, teaching, sharing, transcribing and more.",
        icon: {
            url: "https://mediacdn.soundslice.com/images/pwa/logox192-5bbd413a74df3ea319f0742c3bcfdbe4.png",
            maskable: true
        },
        url: "https://www.soundslice.com/login/",
        screenshots: [],
    },
    {
        id: 36,
        name: "1Tuner",
        description: "1 web app to listen to online radio",
        icon: {
            url: "https://1tuner.com/icon-192x192-maskable.png",
            maskable: true
        },
        url: "https://1tuner.com/",
        screenshots: [],
    },
    {
        id: 37,
        name: "9GAG",
        description: "",
        icon: {
            url: "https://9gag.com/s/fab0aa49/7145df03fa8167d146c4ac609ac0cff0c3e8380c/static/dist/es8/mobile/img/launcher-icon-96.png",
            maskable: false
        },
        url: "https://9gag.com/",
        screenshots: [],
    },
    {
        id: 38,
        name: "LOTTO.de",
        description: "",
        icon: {
            url: "https://www.lotto.de/assets/favicon/android-chrome-192x192.png",
            maskable: false
        },
        url: "https://www.lotto.de/",
        screenshots: [],
    },
    {
        id: 39,
        name: "Tinder",
        description: "With 55 billion matches to date, Tinder® is the world's most popular dating app—the best way to meet new people.",
        icon: {
            url: "https://tinder.com/static/android-chrome-192x192-maskable.png",
            maskable: true,
        },
        url: "https://tinder.com",
        screenshots: [],
    },
    {
        id: 40,
        name: "datememe",
        description: "",
        icon: {
            url: "https://www.datememe.com/static/img/logo-blue-32.png",
            maskable: false,
        },
        url: "https://www.datememe.com",
        screenshots: [],
    },
    {
        id: 41,
        name: "Squoosh",
        description: "Compress and compare images with different codecs, right in your browser.",
        icon: {
            url: "https://squoosh.app/c/icon-large-maskable-c2078ced.png",
            maskable: true,
        },
        url: "https://squoosh.app",
        screenshots: [],
    },
    {
        id: 42,
        name: "Flipboard",
        description: "Discover top news & lifestyle",
        icon: {
            url: "https://s.flipboard.com/assets/webu/images/meta/flipboard-192.png",
            maskable: true
        },
        url: "https://flipboard.com/",
        screenshots: [],
    },
    {
        id: 43,
        name: "Flipkart Lite",
        description: "India's most popular shopping destination. Trusted by over 7 Crore Indians. Shop the Online Megastore with the Flipkart web app. Choose from the massive selection of original products in Fashion, Electronics, Books, Mobiles and other categories.",
        icon: {
            url: "https://rukminim1.flixcart.com/www/192/192/promos/11/07/2024/cf1a3e0a-224b-4dd1-bb96-84abf3d298e2.png?q=100",
            maskable: true,
        },
        url: "https://www.flipkart.com",
        screenshots: [],
    },
    {
        id: 44,
        name: "Guitar Tuner",
        description: "",
        icon: {
            url: "https://guitar-tuner.appspot.com/images/chrome-touch-icon-192x192.png",
            maskable: false,
        },
        url: "https://guitar-tuner.appspot.com",
        screenshots: [],
    },
    {
        id: 45,
        name: "Housing Go",
        description: "",
        icon: {
            url: "https://c.housingcdn.com/s/assets/logo-144.467ca177.png",
            maskable: false,
        },
        url: "https://housing.com",
        screenshots: [],
    },
    {
        id: 46,
        name: "Inbox Attack",
        description: "",
        icon: {
            url: "https://andreasbovens.github.io/inbox-attack/icon.png",
            maskable: false,
        },
        url: "https://andreasbovens.github.io/inbox-attack",
        screenshots: [],
    },
    {
        id: 47,
        name: "Konga",
        description: "Konga.com; Nigeria's Largest Online Mall | the shopping site for electronics, phones, computers, fashion, groceries, sport fitness, books & more at the best price in Nigeria | Shop Online",
        icon: {
            url: "https://www.konga.com/static/konga-192x192.png",
            maskable: false,
        },
        url: "https://www.konga.com",
        screenshots: [],
    },
    {
        id: 48,
        name: "Paper Planes",
        description: "",
        icon: {
            url: "https://paperplanes.world/assets/meta/icon-32.png",
            maskable: false,
        },
        url: "https://paperplanes.world/",
        screenshots: [],
    },
    {
        id: 49,
        name: "Pokedex.org",
        description: "",
        icon: {
            url: "https://pokedex.org/img/icon-48.png",
            maskable: false,
        },
        url: "https://pokedex.org",
        screenshots: [],
    },
    {
        id: 50,
        name: "2048",
        description: "",
        icon: {
            url: "https://2048-opera-pwa.surge.sh/meta/2048-rounded-96.png",
            maskable: false,
        },
        url: "https://2048-opera-pwa.surge.sh/",
        screenshots: [],
    },
    {
        id: 51,
        name: "RioRun",
        description: "",
        icon: {
            url: "https://riorun.theguardian.com/launcher-icons/1x.png",
            maskable: false,
        },
        url: "https://riorun.theguardian.com",
        screenshots: [],
    },
    {
        id: 52,
        name: "QR Scanner",
        description: "Easily scan a QR code. This is a simple, tiny, and super fast web application that works offline.",
        icon: {
            url: "https://qrcodescan.in/images/touch/android-chrome-192x192.png",
            maskable: false,
        },
        url: "https://qrcodescan.in",
        screenshots: [
            {
                url: "https://qrcodescan.in/images/screenshots/screenshot1.png",
                name: "",
            },
            {
                url: "https://qrcodescan.in/images/screenshots/screenshot2.png",
                name: ""
            },
            {
                url: "https://qrcodescan.in/images/screenshots/screenshot3.png",
                name: ""
            }
        ],
    },
    {
        id: 53,
        name: "Smaller Pics",
        description: "",
        icon: {
            url: "https://smaller-pictures.appspot.com/images/touch/splashscreen-144.png",
            maskable: false,
        },
        url: "https://smaller-pictures.appspot.com",
        screenshots: [],
    },
    {
        id: 54,
        name: "Snapdrop",
        description: "",
        icon: {
            url: "https://snapdrop.net/images/android-chrome-192x192-maskable.png",
            maskable: true,
        },
        url: "https://snapdrop.net/",
        screenshots: [],
    },
    {
        id: 55,
        name: "SVGOMG",
        description: "",
        icon: {
            url: "https://jakearchibald.github.io/svgomg/imgs/maskable.png",
            maskable: true
        },
        url: "https://jakearchibald.github.io/svgomg",
        screenshots: [],
    },
    {
        id: 56,
        name: "Selio",
        description: "",
        icon: {
            url: "https://static.selio.com/img/selioWebIconsRound/48x48.png",
            maskable: false,
        },
        url: "https://www.selio.com",
        screenshots: [],
    },
    {
        id: 57,
        name: "The Session",
        description: "Irish traditional music",
        icon: {
            url: "https://thesession.org/icon-192-maskable.png",
            maskable: true,
        },
        url: "https://thesession.org",
        screenshots: [
            {
                url: "https://thesession.org/img/screenshots/tune.webp",
                name: "A traditional Irish tune displayed as sheet music."
            },
            {
                url: "https://thesession.org/img/screenshots/session.webp",
                name: "The listing for a traditional Irish music session in Galway showing its location."
            },
            {
                url: "/img/screenshots/tune-wide.webp",
                name: "A traditional Irish tune displayed as sheet music."
            },
            {
                url: "/img/screenshots/session-wide.webp",
                name: "The listing for a traditional Irish music session in Galway showing its location."
            }
        ],
    },
    {
        id: 58,
        name: "Resilience",
        description: "A web book in seven chapters on the past, present, and future of web design. By Jeremy Keith.",
        icon: {
            url: "https://resilientwebdesign.com/images/icon48.png",
            maskable: false,
        },
        url: "https://resilientwebdesign.com",
        screenshots: [],
    },
    {
        id: 59,
        name: "Accents",
        description: "Watch videos of the English accents spoken around the world",
        icon: {
            url: "https://www.englishaccentsmap.com/android-chrome-36x36.png",
            maskable: false,
        },
        url: "https://www.englishaccentsmap.com",
        screenshots: [],
    },
    {
        id: 60,
        name: "notes",
        description: "An offline-capable notes app, using localStorage and ServiceWorker",
        icon: {
            url: "https://sii.im/playground/notes/img/icon-60.png",
            maskable: false,
        },
        url: "https://sii.im/playground/notes",
        screenshots: [],
    },
    {
        id: 61,
        name: "Pacman",
        description: "Play classic Pacman. No fuss. 100% free.",
        icon: {
            url: "https://freepacman.org/images/pacman-game-icon-192.png",
            maskable: false,
        },
        url: "https://freepacman.org",
        screenshots: [],
    },
    {
        id: 62,
        name: "Frogger",
        description: "Play the classic Frogger game. No fuss. 100% free.",
        icon: {
            url: "https://happyhopper.org/images/frogger-game-icon-192.png",
            maskable: false,
        },
        url: "https://happyhopper.org",
        screenshots: [],
    },
    {
        id: 63,
        name: "Flappy Bird",
        description: "Play the classic Flappy Bird game instantly. No fuss.",
        icon: {
            url: "https://freeflappybird.org/images/flappy-bird-game-icon-192.png",
            maskable: false,
        },
        url: "https://freeflappybird.org",
        screenshots: [],
    },
    {
        id: 64,
        name: "Wordle",
        description: "A daily word game",
        icon: {
            url: "https://freewordle.org/images/wordle-game-icon-512.png",
            maskable: true,
        },
        url: "https://freewordle.org",
        screenshots: [],
    },
    {
        id: 65,
        name: "Mahjong",
        description: "Play the #1 Mahjong game. Beautiful gameplay. 100% free.",
        icon: {
            url: "https://freemahjong.org/images/mahjong-game-icon-192.png",
            maskable: false,
        },
        url: "https://freemahjong.org",
        screenshots: [],
    },
    {
        id: 66,
        name: "Solitaire",
        description: "Play our popular Solitaire game online instantly. No fuss.",
        icon: {
            url: "https://freesolitaire.org/images/solitaire-game-icon-192.png",
            maskable: false,
        },
        url: "https://freesolitaire.org",
        screenshots: [],
    },
    {
        id: 67,
        name: "Simon",
        description: "Play the classic Simon memory game. No fuss. 100% free.",
        icon: {
            url: "https://freesimon.org/images/simon-game-icon-192.png",
            maskable: false,
        },
        url: "https://freesimon.org",
        screenshots: [],
    },
    {
        id: 68,
        name: "Poki",
        description: "",
        icon: {
            url: "https://a.poki-cdn.com/icons/android-chrome-192x192.png",
            maskable: false,
        },
        url: "https://poki.com",
        screenshots: [],
    },
    {
        id: 69,
        name: "Mahjong",
        description: "A minimal Mahjong Solitaire Web App.",
        icon: {
            url: "https://mahjong.jull.dev/img/icons/android-chrome-96x96.png",
            maskable: false,
        },
        url: "https://mahjong.jull.dev",
        screenshots: [],
    },
    {
        id: 70,
        name: "Geogee!",
        description: "",
        icon: {
            url: "https://geogee.me/images/icon.png",
            maskable: false,
        },
        url: "https://geogee.me",
        screenshots: [],
    },
];

export default apps;
