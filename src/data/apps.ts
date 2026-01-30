import App from "../interfaces/App";

/**
 * @todo Parse all website to fetch their data and auto-generate this array.
 * Keep data/complements.ts manual to provide hand-made adjustement,
 * before merging both arrays for the UI.
 */
const apps: Array<App> = [
    {
        id: 1,
        recommanded: false,
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
        recommanded: true,
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
        recommanded: false,
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
        recommanded: true,
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
        id: 5,
        recommanded: false,
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
        id: 6,
        recommanded: true,
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
        id: 7,
        recommanded: false,
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
        id: 8,
        recommanded: false,
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
        id: 9,
        recommanded: false,
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
        id: 10,
        recommanded: false,
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
        id: 11,
        recommanded: false,
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
        id: 12,
        recommanded: true,
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
        id: 13,
        recommanded: false,
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
        id: 14,
        recommanded: false,
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
        id: 15,
        recommanded: true,
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
        id: 16,
        recommanded: false,
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
        id: 17,
        recommanded: true,
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
        id: 18,
        recommanded: false,
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
        id: 19,
        recommanded: false,
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
        id: 20,
        recommanded: false,
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
        id: 21,
        recommanded: false,
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
        id: 22,
        recommanded: true,
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
        id: 23,
        recommanded: false,
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
        id: 24,
        recommanded: false,
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
        id: 25,
        recommanded: false,
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
        id: 26,
        recommanded: true,
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
        id: 27,
        recommanded: false,
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
        id: 28,
        recommanded: false,
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
        id: 29,
        recommanded: false,
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
        id: 30,
        recommanded: false,
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
        id: 31,
        recommanded: true,
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
        id: 32,
        recommanded: true,
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
        id: 33,
        recommanded: false,
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
        id: 34,
        recommanded: false,
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
        id: 35,
        recommanded: false,
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
        id: 36,
        recommanded: true,
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
        id: 37,
        recommanded: true,
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
        id: 38,
        recommanded: true,
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
        id: 39,
        recommanded: true,
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
        id: 40,
        recommanded: true,
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
        id: 41,
        recommanded: true,
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
        id: 42,
        recommanded: true,
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
        id: 43,
        recommanded: false,
        name: "Snapdrop",
        description: "",
        icon: {
            url: "https://snapdrop.net/images/favicon-96x96.png",
            maskable: true,
        },
        url: "https://snapdrop.net/",
        screenshots: [],
    },
    {
        id: 44,
        recommanded: true,
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
        id: 45,
        recommanded: false,
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
        id: 46,
        recommanded: false,
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
        id: 47,
        recommanded: false,
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
        id: 48,
        recommanded: false,
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
        id: 49,
        recommanded: false,
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
        id: 50,
        recommanded: true,
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
        id: 51,
        recommanded: false,
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
        id: 52,
        recommanded: true,
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
        id: 53,
        recommanded: true,
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
        id: 54,
        recommanded: true,
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
        id: 55,
        recommanded: true,
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
        id: 56,
        recommanded: true,
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
        id: 57,
        recommanded: true,
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
        id: 58,
        recommanded: true,
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
        id: 59,
        recommanded: true,
        name: "Geogee!",
        description: "",
        icon: {
            url: "https://geogee.me/images/icon.png",
            maskable: false,
        },
        url: "https://geogee.me",
        screenshots: [],
    },
    {
        id: 60,
        recommanded: false,
        name: "Excalidraw",
        description: "Excalidraw is a whiteboard tool that lets you easily sketch diagrams that have a hand-drawn feel to them.",
        icon: {
            url: "https://excalidraw.com/favicon-32x32.png",
            maskable: false,
        },
        url: "https://excalidraw.com",
        screenshots: [
            {
                url: "https://excalidraw.com/screenshots/virtual-whiteboard.png",
                name: ""
            },
            {
                url: "https://excalidraw.com/screenshots/wireframe.png",
                name: ""
            },
            {
                url: "https://excalidraw.com/screenshots/illustration.png",
                name: ""
            },
        ]
    },
    {
        id: 61,
        recommanded: false,
        name: "JD Sports Indonesia",
        description: "JD Sports Indonesia.",
        icon: {
            url: "https://jdsports.id/static/icon/favicon-32px.png",
            maskable: true
        },
        url: "https://jdsports.id",
        screenshots: []
    },
    {
        id: 62,
        recommanded: false,
        name: "Rakuten TV",
        description: "",
        icon: {
            url: "https://www.rakuten.tv/favicon.ico",
            maskable: false,
        },
        url: "https://www.rakuten.tv",
        screenshots: []
    },
    {
        id: 63,
        recommanded: false,
        name: "ZDF",
        description: "Alle Videos und Live-Streams im ZDF anschauen – ständig verfügbar und interaktiv. Entdecken Sie Filme, Serien, Sportevents, Dokumentationen und vieles mehr.",
        icon: {
            url: "https://www.zdf.de/_next/static/media/square-192x192.f5513832.png",
            maskable: false,
        },
        url: "https://www.zdf.de",
        screenshots: [
            {
                url: "https://www.zdf.de/_next/static/media/startpage-narrow.78d6735f.webp",
                name: "Startseite",
            },
            {
                url: "https://www.zdf.de/_next/static/media/search-wide.134633f9.webp",
                name: "Suche"
            },
            {
                url: "https://www.zdf.de/_next/static/media/smart-collection-wide.d7106c87.webp",
                name: "Smart Collection"
            }
        ]
    },
    {
        id: 64,
        recommanded: false,
        name: "PWABuilder",
        description: "All the tools you need to build and deploy your Progressive Web Apps.",
        icon: {
            url: "https://www.pwabuilder.com/assets/icons/icon_57.png",
            maskable: false,
        },
        url: "https://www.pwabuilder.com",
        screenshots: [
            {
                url: "https://www.pwabuilder.com/assets/screenshots/screen1.png",
                name: "PWABuilder Home Screen"
            },
            {
                url: "https://www.pwabuilder.com/assets/screenshots/screen2.png",
                name: "PWABuilder Report Card Page"
            },
            {
                url: "https://www.pwabuilder.com/assets/screenshots/screen3.png",
                name: "Manifest Editor in the Report Card Page"
            },
            {
                url: "https://www.pwabuilder.com/assets/screenshots/screen4.png",
                name: "Pick a pre-built Service Worker"
            },
            {
                url: "https://www.pwabuilder.com/assets/screenshots/screen5.png",
                name: "Publish your PWA to the App Stores!"
            },
            {
                url: "https://www.pwabuilder.com/assets/screenshots/mobile.png",
                name: "PWABuilder also works on your phone!"
            }
        ]
    },
    {
        id: 65,
        recommanded: false,
        name: "KitchenAid",
        description: "",
        icon: {
            url: "https://www.kitchenaid.com/content/dam/business-unit/kitchenaid/global-assets/images/favicons/android-chrome-192x192.png",
            maskable: false,
        },
        url: "https://www.kitchenaid.com",
        screenshots: []
    },
    {
        id: 66,
        recommanded: false,
        name: "BookMyShow Lite",
        description: "Movie Tickets Online Booking. Book & Buy Events, Plays, Music Concert, Cinema, Theater, Sports, T20 & World Cup Cricket Match, English, Tamil, Telugu & Hindi Movie Tickets, Trailers & Reviews.",
        icon: {
            url: "https://assets-in.bmscdn.com/m6/images/icons/bms-lite-36.png",
            maskable: false,
        },
        url: "https://in.bookmyshow.com",
        screenshots: [
            {
                url: "https://assets-in.bmscdn.com/m6/images/pwa/screenshots/mobile/1.png",
                name: ""
            },
            {
                url: "https://assets-in.bmscdn.com/m6/images/pwa/screenshots/mobile/2.png",
                name: ""
            },
            {
                url: "https://assets-in.bmscdn.com/m6/images/pwa/screenshots/mobile/3.png",
                name: ""
            }
        ]
    },
    {
        id: 67,
        recommanded: false,
        name: "OnTheMarket",
        description: "The most uncluttered, user-friendly property portal. Find hundreds of 1000s of properties for sale & to rent from leading UK estate agents",
        icon: {
            url: "https://www.onthemarket.com/static/images/icons-otm2/manifest48.png",
            maskable: false,
        },
        url: "https://www.onthemarket.com",
        screenshots: []
    },
    {
        id: 68,
        recommanded: false,
        name: "Ride",
        description: "Multi City Bike App",
        icon: {
            url: "https://www.ride-app.com/assets/images/android-chrome-192x192-48bdd7d4985d9c9d78380c9aa6231001.png",
            maskable: false,
        },
        url: "https://www.ride-app.com",
        screenshots: []
    },
    {
        id: 69,
        recommanded: false,
        name: "Alarm Clock",
        description: "Alarm DJ is an online alarm clock that plays your MP3 files and YouTube videos of your choice.Works offline, right from the browser - no installation needed.",
        icon: {
            url: "https://alarmdj.com/assets/images/favicons/android-chrome-36x36.png",
            maskable: false
        },
        url: "https://alarmdj.com",
        screenshots: []
    },
    {
        id: 70,
        recommanded: false,
        name: "Anonynote",
        description: "",
        icon:
        {
            url: "https://anonynote.org/favicons/android-chrome-192x192.png",
            maskable: false
        },
        url: "https://anonynote.org/",
        screenshots: []
    },
    {
        id: 71,
        recommanded: false,
        name: "Avain",
        description: "",
        icon: {
            url: "https://avain.app/icon/128.png",
            maskable: false
        },
        url: "https://avain.app",
        screenshots: []
    },
    {
        id: 72,
        recommanded: true,
        name: "Booksie",
        description: "An open catalog of free picture storybooks for children instantly available for reading.",
        icon: {
            url: "https://www.booksie.org/assets/windows/44.png",
            maskable: false,
        },
        url: "https://www.booksie.org/",
        screenshots: [
            {
                url: "https://www.booksie.org/assets/screenshots/1.webp",
                name: ""
            },
            {
                url: "https://www.booksie.org/assets/screenshots/2.webp",
                name: "",
            },
            {
                url: "https://www.booksie.org/assets/screenshots/3.webp",
                name: ""
            },
            {
                url: "https://www.booksie.org/assets/screenshots/4.webp",
                name: ""
            },
            {
                url: "https://www.booksie.org/assets/screenshots/5.webp",
                name: ""
            },
            {
                url: "https://www.booksie.org/assets/screenshots/6.webp",
                name: ""
            }
        ],
    },
    {
        id: 73,
        recommanded: false,
        name: "BRUTALIST HN",
        description: "",
        url: "https://brutalisthackernews.com/",
        icon: {
            url: "https://brutalisthackernews.com/assets/imgs/logo.png",
            maskable: false,
        },
        screenshots: []
    },
    {
        id: 74,
        recommanded: true,
        name: "calc",
        url: "https://calculator-app-tau.vercel.app",
        icon: {
            url: "https://calculator-app-tau.vercel.app/manifest-icon-512.png",
            maskable: true
        },
        description: "A smple calculator app for your daily use.",
        screenshots: [
            {
                url: "https://calculator-app-tau.vercel.app/screenshot/phone-ss-1.png",
                name: ""
            },
            {
                url: "https://calculator-app-tau.vercel.app/screenshot/phone-ss-2.png",
                name: ""
            },
            {
                url: "https://calculator-app-tau.vercel.app/screenshot/phone-ss-3.png",
                name: ""
            }
        ]
    },
    {
        id: 75,
        recommanded: true,
        name: "Care Cards",
        description: "",
        icon: {
            url: "https://carecards.io/favicon.ico",
            maskable: false
        },
        url: "https://carecards.io",
        screenshots: []
    },
    {
        id: 76,
        recommanded: false,
        name: "Cat Safe Foods",
        description: "Sharing food with your cat? Make sure it's safe first",
        icon: {
            url: "https://catsafefoods.com/img/maskable_icon.png",
            maskable: true,
        },
        url: "https://catsafefoods.com",
        screenshots: [
            {
                url: "https://catsafefoods.com/img/screenshot1.png",
                name: ""
            },
            {
                url: "https://catsafefoods.com/img/screenshot2.png",
                name: ""
            },
            {
                url: "https://catsafefoods.com/img/screenshot3.png",
                name: ""
            }
        ],
    },
    {
        id: 77,
        recommanded: false,
        name: "Chitchatter",
        description: "This is a communication tool that is free, open source, and designed for simplicity and security. All communication between you and your online peers is encrypted. There is no trace of your conversation once you leave.",
        icon: {
            url: "https://chitchatter.im/favicon.ico",
            maskable: false
        },
        url: "https://chitchatter.im/",
        screenshots: [
            {
                url: "screenshots/home-mobile-dark.png",
                name: ""
            },
            {
                url: "screenshots/home-mobile-light.png",
                name: ""
            },
            {
                url: "screenshots/public-room-mobile.png",
                name: ""
            }
        ],
    },
    {
        id: 78,
        recommanded: true,
        name: "regex101",
        url: "https://regex101.com/",
        description: "regex101: build, test, and debug regex",
        icon: {
            url: "https://regex101.com/static/assets/maskable-icon-512.png",
            maskable: true
        },
        screenshots: []
    }
];

export default apps;
