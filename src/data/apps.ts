import App from "../interfaces/App";

/**
 * @todo Parse all website to fetch their data and auto-generate this array.
 * Keep data/complements.ts manual to provide hand-made adjustement,
 * before merging both arrays for the UI.
 */
const apps: Array<App> = [
    {
        id: 1,
        icon: {
            url: "https://open.spotifycdn.com/cdn/images/icons/Spotify_MWP_512.50dd387d.png",
            maskable: false,
        },
        name: "Spotify",
        description: "Spotify Web",
        url: "https://open.spotify.com",
        categories: [],
    },
    {
        id: 4,
        icon: {
            url: "https://play2048.co/favicon192.png",
            maskable: false,
        },
        url: "https://play2048.co",
        name: "2048",
        description: "Merge the tiles to get 2048!",
        categories: ["games"],
    },
    {
        id: 5,
        icon: {
            url: "https://www.gstatic.com/youtube/img/web/maskable/logo_192x192.png",
            maskable: true
        },
        url: "https://www.youtube.com/?feature\u003dytca",
        name: "Youtube",
        description: "",
        categories: [],
    },
    {
        id: 6,
        icon: {
            url: "https://abs.twimg.com/responsive-web/client-web/icon-default-maskable.bacea37a.png",
            maskable: true,
        },
        name: "X",
        description: "News, politics, trending music, international events, sports scores, and the latest global updates in real time—all using less data.",
        url: "https://x.com/?utm_source=homescreen&utm_medium=shortcut",
        categories: [
            "news",
            "magazines",
            "social",
        ],
    },
    {
        id: 7,
        icon: {
            url: "https://www.thefork.com/statics/icons/icon-72x72.png",
            maskable: false,
        },
        url: "https://www.thefork.com",
        name: "TheFork",
        description: "Discover and book the best restaurant",
        categories: [],
    },
    {
        id: 8,
        icon: {
            url: "https://www.gstatic.com/translate/favicon.ico",
            maskable: false,
        },
        url: "https://translate.google.com/?lfhs\u003d2",
        name: "Google Translate",
        description: "",
        categories: [],
    },
    {
        id: 9,
        name: "Pinterest",
        description: "",
        icon: {
            url: "https://s.pinimg.com/images/favicon_red_192.png",
            maskable: false,
        },
        url: "https://pinterest.com",
        categories: [],
    },
    {
        id: 10,
        name: "Starbucks",
        description: "",
        icon: {
            url: "https://www.starbucks.com/pwa-icon-192.png",
            maskable: false,
        },
        url: "https://www.starbucks.com",
        categories: [],
    },
    {
        id: 11,
        name: "Jumia",
        description: "",
        icon: {
            url: "https://www.jumia.ma/assets_he/manifest/jumia/maskable-icons/icon_512x512.17af53325585e3731db3076f383e6112.png",
            maskable: true,
        },
        url: "https://www.jumia.ma/",
        categories: [],
    },
    {
        id: 12,
        name: "OLX Lite",
        description: "",
        icon: {
            url: "https://www.olx.in/logo/olx-medium.png",
            maskable: false,
        },
        url: "https://www.olx.in",
        categories: [],
    },
    {
        id: 13,
        name: "FT",
        description: "",
        icon: {
            url: "https://www.ft.com/__assets/creatives/brand-ft/icons/v2/android-chrome-36x36.png",
            maskable: false,
        },
        url: "https://www.ft.com",
        categories: [],
    },
    {
        id: 14,
        name: "Infobae",
        description: "Noticias de Argentina y del mundo en tiempo real.",
        icon: {
            url: "https://www.infobae.com/assets/images/logos/icon-192x192.png",
            maskable: false,
        },
        url: "https://www.infobae.com",
        categories: [],
    },
    {
        id: 15,
        name: "nau.ch",
        description: "Nachrichten aus der Schweiz und der Welt",
        icon: {
            url: "https://www.nau.ch/static/frontpage/maskable_icon-787x787.png",
            maskable: true,
        },
        url: "https://www.nau.ch",
        categories: [],
    },
    {
        id: 16,
        name: "Medium",
        description: "",
        icon: {
            url: "https://miro.medium.com/v2/b94623fa508af2c67a148065448d857f2216e47452564ed07a253c920211811b",
            maskable: false,
        },
        url: "https://medium.com",
        categories: [],
    },
    {
        id: 17,
        name: "Weather.com",
        description: "The Weather Channel and weather.com provide a national and local weather forecast for cities, as well as weather radar, report and hurricane coverage.",
        icon: {
            url: "https://s.w-x.co/twc_36x36.png",
            maskable: false
        },
        url: "https://weather.com",
        categories: [],
    },
    {
        id: 18,
        name: "OpenRent",
        description: "",
        icon: {
            url: "https://staticcdn.openrent.co.uk/images/logos/meta/android-chrome-192x192.png",
            maskable: false
        },
        url: "https://www.openrent.co.uk",
        categories: [],
    },
    {
        id: 19,
        name: "Airbnb",
        description: "Vacation Rentals, Homes, Experiences & Places - Airbnb",
        icon: {
            url: "https://a0.muscache.com/airbnb/static/icons/apple-touch-icon-76x76-3b313d93b1b5823293524b9764352ac9.png",
            maskable: true
        },
        url: "https://www.airbnb.fr",
        categories: []
    },
    {
        id: 20,
        name: "CARIGAMI",
        description: "",
        icon: {
            url: "https://www.carigami.fr/android-chrome-512x512-maskable.png",
            maskable: true,
        },
        url: "https://www.carigami.fr",
        categories: [],
    },
    {
        id: 22,
        name: "Instagram",
        description: "Instagram is a simple way to capture and share the world's moments.",
        icon: {
            url: "https:\/\/static.cdninstagram.com\/rsrc.php\/v4\/yM\/r\/7xwrlYffOBb.png",
            maskable: false
        },
        url: "https://www.instagram.com",
        categories: [],
    },
    {
        id: 23,
        name: "Treebo",
        description: "India's Top Rated Budget Hotel Chain",
        icon: {
            url: "https://images.treebohotels.com/images/Icons/pwa-icon.png?h=192&w=192",
            maskable: false
        },
        url: "https://www.treebo.com",
        categories: [],
    },
    {
        id: 25,
        name: "Soundslice",
        description: "Turn sheet music into an interactive learning environment. Perfect for practicing, teaching, sharing, transcribing and more.",
        icon: {
            url: "https://mediacdn.soundslice.com/images/pwa/logox192-5bbd413a74df3ea319f0742c3bcfdbe4.png",
            maskable: true
        },
        url: "https://www.soundslice.com",
        categories: []
    },
    {
        id: 26,
        name: "1Tuner",
        description: "1 web app to listen to online radio",
        icon: {
            url: "https://1tuner.com/icon-192x192-maskable.png",
            maskable: true
        },
        url: "https://1tuner.com",
        categories: [
            "entertainment",
            "music",
            "news",
        ],
    },
    {
        id: 27,
        name: "9GAG",
        description: "",
        icon: {
            url: "https://9gag.com/s/fab0aa49/7145df03fa8167d146c4ac609ac0cff0c3e8380c/static/dist/es8/mobile/img/launcher-icon-96.png",
            maskable: false
        },
        url: "https://9gag.com",
        categories: []
    },
    {
        id: 28,
        name: "LOTTO.de",
        description: "",
        icon: {
            url: "https://www.lotto.de/assets/favicon/android-chrome-192x192.png",
            maskable: false
        },
        url: "https://www.lotto.de",
        categories: []
    },
    {
        id: 29,
        name: "Tinder",
        description: "With 55 billion matches to date, Tinder® is the world's most popular dating app—the best way to meet new people.",
        icon: {
            url: "https://tinder.com/static/android-chrome-192x192-maskable.png",
            maskable: true,
        },
        url: "https://tinder.com",
        categories: []
    },
    {
        id: 30,
        name: "datememe",
        description: "",
        icon: {
            url: "https://www.datememe.com/static/img/logo-blue-32.png",
            maskable: false,
        },
        url: "https://www.datememe.com",
        categories: []
    },
    {
        id: 31,
        name: "Squoosh",
        description: "Compress and compare images with different codecs, right in your browser.",
        icon: {
            url: "https://squoosh.app/c/icon-large-maskable-c2078ced.png",
            maskable: true,
        },
        url: "https://squoosh.app",
        categories: [
            "photo",
            "productivity",
            "utilities",
        ],
    },
    {
        id: 32,
        name: "Flipboard",
        description: "Discover top news & lifestyle",
        icon: {
            url: "https://s.flipboard.com/assets/webu/images/meta/flipboard-192.png",
            maskable: true,
        },
        url: "https://flipboard.com",
        categories: [
            "news",
        ],
    },
    {
        id: 33,
        name: "Flipkart Lite",
        description: "India's most popular shopping destination. Trusted by over 7 Crore Indians. Shop the Online Megastore with the Flipkart web app. Choose from the massive selection of original products in Fashion, Electronics, Books, Mobiles and other categories.",
        icon: {
            url: "https://rukminim1.flixcart.com/www/192/192/promos/11/07/2024/cf1a3e0a-224b-4dd1-bb96-84abf3d298e2.png?q=100",
            maskable: true,
        },
        url: "https://www.flipkart.com",
        categories: []
    },
    {
        id: 34,
        name: "Guitar Tuner",
        description: "",
        icon: {
            url: "https://guitar-tuner.appspot.com/images/chrome-touch-icon-192x192.png",
            maskable: false,
        },
        url: "https://guitar-tuner.appspot.com",
        categories: []
    },
    {
        id: 35,
        name: "Housing Go",
        description: "",
        icon: {
            url: "https://c.housingcdn.com/s/assets/logo-144.467ca177.png",
            maskable: false,
        },
        url: "https://housing.com",
        categories: []
    },
    {
        id: 36,
        name: "Inbox Attack",
        description: "",
        icon: {
            url: "https://andreasbovens.github.io/inbox-attack/icon.png",
            maskable: false,
        },
        url: "https://andreasbovens.github.io/inbox-attack",
        categories: []
    },
    {
        id: 37,
        name: "Konga",
        description: "Konga.com; Nigeria's Largest Online Mall | the shopping site for electronics, phones, computers, fashion, groceries, sport fitness, books & more at the best price in Nigeria | Shop Online",
        icon: {
            url: "https://www.konga.com/static/konga-192x192.png",
            maskable: false,
        },
        url: "https://www.konga.com",
        categories: []
    },
    {
        id: 38,
        name: "Paper Planes",
        description: "",
        icon: {
            url: "https://paperplanes.world/assets/meta/icon-32.png",
            maskable: false,
        },
        url: "https://paperplanes.world",
        categories: []
    },
    {
        id: 39,
        name: "Pokedex.org",
        description: "",
        icon: {
            url: "https://pokedex.org/img/icon-48.png",
            maskable: false,
        },
        url: "https://pokedex.org",
        categories: []
    },
    {
        id: 40,
        name: "2048",
        description: "",
        icon: {
            url: "https://2048-opera-pwa.surge.sh/meta/2048-rounded-96.png",
            maskable: false,
        },
        url: "https://2048-opera-pwa.surge.sh",
        categories: []
    },
    {
        id: 41,
        name: "QR Scanner",
        description: "Easily scan a QR code. This is a simple, tiny, and super fast web application that works offline.",
        icon: {
            url: "https://qrcodescan.in/images/touch/android-chrome-192x192.png",
            maskable: false,
        },
        url: "https://qrcodescan.in",
        categories: []
    },
    {
        id: 42,
        name: "Smaller Pics",
        description: "",
        icon: {
            url: "https://smaller-pictures.appspot.com/images/touch/splashscreen-144.png",
            maskable: false,
        },
        url: "https://smaller-pictures.appspot.com",
        categories: []
    },
    {
        id: 43,
        name: "Snapdrop",
        description: "",
        icon: {
            url: "https://snapdrop.net/images/favicon-96x96.png",
            maskable: true,
        },
        url: "https://snapdrop.net",
        categories: []
    },
    {
        id: 44,
        name: "SVGOMG",
        description: "",
        icon: {
            url: "https://jakearchibald.github.io/svgomg/imgs/maskable.png",
            maskable: true
        },
        url: "https://jakearchibald.github.io/svgomg",
        categories: []
    },
    {
        id: 45,
        name: "Selio",
        description: "",
        icon: {
            url: "https://static.selio.com/img/selioWebIconsRound/48x48.png",
            maskable: false,
        },
        url: "https://www.selio.com",
        categories: []
    },
    {
        id: 46,
        name: "The Session",
        description: "Irish traditional music",
        icon: {
            url: "https://thesession.org/icon-192-maskable.png",
            maskable: true,
        },
        url: "https://thesession.org",
        categories: [
            "music",
            "social",
        ],
    },
    {
        id: 47,
        name: "Resilience",
        description: "A web book in seven chapters on the past, present, and future of web design. By Jeremy Keith.",
        icon: {
            url: "https://resilientwebdesign.com/images/icon48.png",
            maskable: false,
        },
        url: "https://resilientwebdesign.com",
        categories: []
    },
    {
        id: 48,
        name: "Accents",
        description: "Watch videos of the English accents spoken around the world",
        icon: {
            url: "https://www.englishaccentsmap.com/android-chrome-36x36.png",
            maskable: false,
        },
        url: "https://www.englishaccentsmap.com",
        categories: []
    },
    {
        id: 49,
        name: "notes",
        description: "An offline-capable notes app, using localStorage and ServiceWorker",
        icon: {
            url: "https://sii.im/playground/notes/img/icon-60.png",
            maskable: false,
        },
        url: "https://sii.im/playground/notes",
        categories: []
    },
    {
        id: 50,
        name: "Pacman",
        description: "Play classic Pacman. No fuss. 100% free.",
        icon: {
            url: "https://freepacman.org/images/pacman-game-icon-192.png",
            maskable: false,
        },
        url: "https://freepacman.org",
        categories: []
    },
    {
        id: 51,
        name: "Frogger",
        description: "Play the classic Frogger game. No fuss. 100% free.",
        icon: {
            url: "https://happyhopper.org/images/frogger-game-icon-192.png",
            maskable: false,
        },
        url: "https://happyhopper.org",
        categories: []
    },
    {
        id: 52,
        name: "Flappy Bird",
        description: "Play the classic Flappy Bird game instantly. No fuss.",
        icon: {
            url: "https://freeflappybird.org/images/flappy-bird-game-icon-192.png",
            maskable: false,
        },
        url: "https://freeflappybird.org",
        categories: []
    },
    {
        id: 53,
        name: "Wordle",
        description: "A daily word game",
        icon: {
            url: "https://freewordle.org/images/wordle-game-icon-512.png",
            maskable: true,
        },
        url: "https://freewordle.org",
        categories: []
    },
    {
        id: 54,
        name: "Mahjong",
        description: "Play the #1 Mahjong game. Beautiful gameplay. 100% free.",
        icon: {
            url: "https://freemahjong.org/images/mahjong-game-icon-192.png",
            maskable: false,
        },
        url: "https://freemahjong.org",
        categories: []
    },
    {
        id: 55,
        name: "Solitaire",
        description: "Play our popular Solitaire game online instantly. No fuss.",
        icon: {
            url: "https://freesolitaire.org/images/solitaire-game-icon-192.png",
            maskable: false,
        },
        url: "https://freesolitaire.org",
        categories: []
    },
    {
        id: 56,
        name: "Simon",
        description: "Play the classic Simon memory game. No fuss. 100% free.",
        icon: {
            url: "https://freesimon.org/images/simon-game-icon-192.png",
            maskable: false,
        },
        url: "https://freesimon.org",
        categories: []
    },
    {
        id: 57,
        name: "Poki",
        description: "",
        icon: {
            url: "https://a.poki-cdn.com/icons/android-chrome-192x192.png",
            maskable: false,
        },
        url: "https://poki.com",
        categories: []
    },
    {
        id: 58,
        name: "Mahjong",
        description: "A minimal Mahjong Solitaire Web App.",
        icon: {
            url: "https://mahjong.jull.dev/img/icons/android-chrome-96x96.png",
            maskable: false,
        },
        url: "https://mahjong.jull.dev",
        categories: [
            "games",
        ],
    },
    {
        id: 59,
        name: "Geogee!",
        description: "",
        icon: {
            url: "https://geogee.me/images/icon.png",
            maskable: false,
        },
        url: "https://geogee.me",
        categories: []
    },
    {
        id: 60,
        name: "Excalidraw",
        description: "Excalidraw is a whiteboard tool that lets you easily sketch diagrams that have a hand-drawn feel to them.",
        icon: {
            url: "https://excalidraw.com/favicon-32x32.png",
            maskable: false,
        },
        url: "https://excalidraw.com",
        categories: []
    },
    {
        id: 61,
        name: "JD Sports Indonesia",
        description: "JD Sports Indonesia.",
        icon: {
            url: "https://jdsports.id/static/icon/favicon-32px.png",
            maskable: true
        },
        url: "https://jdsports.id",
        categories: []
    },
    {
        id: 62,
        name: "Rakuten TV",
        description: "",
        icon: {
            url: "https://www.rakuten.tv/favicon.ico",
            maskable: false,
        },
        url: "https://www.rakuten.tv",
        categories: []
    },
    {
        id: 63,
        name: "ZDF",
        description: "Alle Videos und Live-Streams im ZDF anschauen – ständig verfügbar und interaktiv. Entdecken Sie Filme, Serien, Sportevents, Dokumentationen und vieles mehr.",
        icon: {
            url: "https://www.zdf.de/_next/static/media/square-192x192.f5513832.png",
            maskable: false,
        },
        url: "https://www.zdf.de",
        categories: []
    },
    {
        id: 64,
        name: "PWABuilder",
        description: "All the tools you need to build and deploy your Progressive Web Apps.",
        icon: {
            url: "https://www.pwabuilder.com/assets/icons/icon_57.png",
            maskable: false,
        },
        url: "https://www.pwabuilder.com",
        categories: [
            "utilities",
        ],
    },
    {
        id: 65,
        name: "KitchenAid",
        description: "",
        icon: {
            url: "https://www.kitchenaid.com/content/dam/business-unit/kitchenaid/global-assets/images/favicons/android-chrome-192x192.png",
            maskable: false,
        },
        url: "https://www.kitchenaid.com",
        categories: []
    },
    {
        id: 66,
        name: "BookMyShow Lite",
        description: "Movie Tickets Online Booking. Book & Buy Events, Plays, Music Concert, Cinema, Theater, Sports, T20 & World Cup Cricket Match, English, Tamil, Telugu & Hindi Movie Tickets, Trailers & Reviews.",
        icon: {
            url: "https://assets-in.bmscdn.com/m6/images/icons/bms-lite-36.png",
            maskable: false,
        },
        url: "https://in.bookmyshow.com",
        categories: []
    },
    {
        id: 67,
        name: "OnTheMarket",
        description: "The most uncluttered, user-friendly property portal. Find hundreds of 1000s of properties for sale & to rent from leading UK estate agents",
        icon: {
            url: "https://www.onthemarket.com/static/images/icons-otm2/manifest48.png",
            maskable: false,
        },
        url: "https://www.onthemarket.com",
        categories: [],
    },
    {
        id: 68,
        name: "Ride",
        description: "Multi City Bike App",
        icon: {
            url: "https://www.ride-app.com/assets/images/android-chrome-192x192-48bdd7d4985d9c9d78380c9aa6231001.png",
            maskable: false,
        },
        url: "https://www.ride-app.com",
        categories: []
    },
    {
        id: 69,
        name: "Alarm Clock",
        description: "Alarm DJ is an online alarm clock that plays your MP3 files and YouTube videos of your choice.Works offline, right from the browser - no installation needed.",
        icon: {
            url: "https://alarmdj.com/assets/images/favicons/android-chrome-36x36.png",
            maskable: false
        },
        url: "https://alarmdj.com",
        categories: []
    },
    {
        id: 70,
        name: "Anonynote",
        description: "",
        icon:
        {
            url: "https://anonynote.org/favicons/android-chrome-192x192.png",
            maskable: false
        },
        url: "https://anonynote.org",
        categories: []
    },
    {
        id: 71,
        name: "Avain",
        description: "",
        icon: {
            url: "https://avain.app/icon/128.png",
            maskable: false
        },
        url: "https://avain.app",
        categories: []
    },
    {
        id: 72,
        name: "Booksie",
        description: "An open catalog of free picture storybooks for children instantly available for reading.",
        icon: {
            url: "https://www.booksie.org/assets/windows/44.png",
            maskable: false,
        },
        url: "https://www.booksie.org",
        categories: [
            "books",
            "education",
            "kids",
        ],
    },
    {
        id: 73,
        name: "BRUTALIST HN",
        description: "",
        url: "https://brutalisthackernews.com",
        icon: {
            url: "https://brutalisthackernews.com/assets/imgs/logo.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 74,
        name: "calc",
        url: "https://calculator-app-tau.vercel.app",
        icon: {
            url: "https://calculator-app-tau.vercel.app/manifest-icon-512.png",
            maskable: true
        },
        description: "A smple calculator app for your daily use.",
        categories: []
    },
    {
        id: 75,
        name: "Care Cards",
        description: "",
        icon: {
            url: "https://carecards.io/favicon.ico",
            maskable: false
        },
        url: "https://carecards.io",
        categories: []
    },
    {
        id: 76,
        name: "Cat Safe Foods",
        description: "Sharing food with your cat? Make sure it's safe first",
        icon: {
            url: "https://catsafefoods.com/img/maskable_icon.png",
            maskable: true,
        },
        url: "https://catsafefoods.com",
        "categories": [
            "pets",
            "food",
        ],
    },
    {
        id: 77,
        name: "Chitchatter",
        description: "This is a communication tool that is free, open source, and designed for simplicity and security. All communication between you and your online peers is encrypted. There is no trace of your conversation once you leave.",
        icon: {
            url: "https://chitchatter.im/favicon.ico",
            maskable: false
        },
        url: "https://chitchatter.im",
        categories: [],
    },
    {
        id: 78,
        name: "regex101",
        url: "https://regex101.com",
        description: "regex101: build, test, and debug regex",
        icon: {
            url: "https://regex101.com/static/assets/icons/manifest-icon-192.maskable.png",
            maskable: true
        },
        categories: [],
    },
    {
        id: 79,
        name: "ColorBeta",
        icon: {
            url: "https://colorbeta.com/static/img/icons/512-maskable.png",
            maskable: true,
        },
        url: "https://colorbeta.com",
        description: "Free online tool for creating and editing CSS gradients.",
        categories: [],
    },
    {
        id: 80,
        name: "#closerintime",
        description: "Visualize the time between historical events.",
        url: "https://closerinti.me",
        icon: {
            url: "https://closerinti.me/icons/icon-maskable-512.png",
            maskable: true
        },
        categories: [],
    },
    {
        id: 81,
        name: "Colosseum",
        description: "Displays Pokemons in a beautiful way",
        icon:
        {
            url: "https://naramsim.github.io/Colosseum/images/icons/maskable-48.png",
            maskable: true,
        },
        url: "https://naramsim.github.io/Colosseum",
        categories: []
    },
    {
        id: 82,
        name: "ComputerBase",
        icon:
        {
            url: "https://www.computerbase.de/img/icon-maskable.png",
            maskable: true,
        },
        url: "https://www.computerbase.de",
        description: "Unabhängiges Tech-Magazin. News und Tests zu Smartphones, Tablets, PC-Hardware, Software und IT. Große technikaffine Community hilft im Forum.",
        categories: []
    },
    {
        id: 83,
        name: "Crazy Dices",
        description: "Simple Dices to play simple games",
        icon: {
            url: "https://crazydice.netlify.app/images/logo128.png",
            maskable: false,
        },
        url: "https://crazydice.netlify.app",
        categories: [],
    },
    {
        id: 84,
        name: "Dog Safe Foods",
        description: "Sharing food with your dog? Make sure it's safe first",
        url: "https://dogsafefoods.com/",
        icon: {
            url: "https://dogsafefoods.com/img/maskable_icon.png",
            maskable: true,
        },
        categories: [
            "pets",
            "food",
        ],
    },
    {
        id: 85,
        name: "JSON Formatter",
        description: "Format, validate and beautify JSON online",
        icon: {
            url: "https://jsonformatter.com/pwa/images/icon-192.png",
            maskable: true,
        },
        url: "https://jsonformatter.com",
        categories: [],
    },
    {
        id: 86,
        description: "Life counter app for 2 - 4 players. Supports game profiles, count up/down.",
        url: "https://nenadalm.github.io/life-counter",
        name: "Life counter",
        icon: {
            url: "https://nenadalm.github.io/life-counter/img/icon_192.png?v=674cd2d1dc276ad519989ce15065a91a373dff99",
            maskable: true,
        },
        categories: [
            "utilities",
        ],
    },
    {
        id: 87,
        url: "https://claude.ai",
        name: "Claude",
        description: "",
        icon: {
            url: "https://claude.ai/images/icon-512x512.png",
            maskable: false,
        },
        categories: [],
    },
    {
        id: 88,
        name: "Grok",
        description: "Understand the Universe",
        url: "https://grok.com",
        icon: {
            url: "https://grok.com/images/android-chrome-192x192.png",
            maskable: true,
        },
        categories: [],
    },
    {
        id: 89,
        name: "LeChat",
        description: "Le Chat from Mistral AI",
        url: "https://chat.mistral.ai",
        icon: {
            url: "https://chat.mistral.ai/favicons/pwa-icon-192x192.png",
            maskable: false,
        },
        categories: [],
    },
    {
        id: 90,
        name: "Facebook",
        url: "https://m.facebook.com",
        icon: {
            url: "https:\/\/static.xx.fbcdn.net\/rsrc.php\/v4\/y0\/r\/eFZD1KABzRA.png",
            maskable: false,
        },
        description: "",
        categories: [],
    },
    {
        id: 91,
        name: "Wikipedia",
        description: "",
        url: "https://en.wikipedia.org",
        icon: {
            url: "https://en.wikipedia.org/static/apple-touch/wikipedia.png",
            maskable: false,
        },
        categories: [],
    },
    {
        id: 92,
        name: "Chess",
        description: "",
        url: "https://www.chess.com/",
        icon: {
            url: "https:\/\/www.chess.com\/bundles\/web\/favicons\/android-chrome-192x192.25da7247.png",
            maskable: false,
        },
        categories: [],
    },
    {
        id: 93,
        description: "DeviantArt is where art and community thrive. Explore over 350 million pieces of art while connecting to fellow artists and art enthusiasts.",
        icon: {
            url: "https://st.deviantart.net/eclipse/icons/pwa/launchericon-72-72.png?2",
            maskable: false,
        },
        name: "DeviantArt",
        url: "https://www.deviantart.com",
        categories: [],
    },
    {
        id: 94,
        name: "GitHub",
        description: "",
        url: "https://github.com",
        icon: {
            url: "https://github.githubassets.com/assets/apple-touch-icon-72x72-e090c8a282d0.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 95,
        name: "Mastodon",
        description: "",
        icon: {
            url: "https://mastodon.social/packs/assets/android-chrome-72x72-9LRpA3QN.png",
            maskable: true,
        },
        url: "https://mastodon.social",
        categories: []
    },
    {
        id: 98,
        name: "Threads",
        description: "Say more with Threads \u2014 Instagram\u2019s text-based conversation app.",
        url: "https://www.threads.com",
        icon: {
            url: "https:\/\/static.cdninstagram.com\/rsrc.php\/yM\/r\/h1DANLym4e8.webp",
            maskable: true,
        },
        categories: []
    },
    {
        id: 99,
        name: "TikTok",
        description: "TikTok PWA",
        url: "https://www.tiktok.com",
        icon: {
            url: "https://sf16-sg.tiktokcdn.com/obj/eden-sg/uvkuhyieh7lpqpbj/pwa/128x128-1.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 100,
        name: "Truth Social",
        description: "Truth Social is America's \"Big Tent\" social media platform that encourages an open, free, and honest global conversation without discriminating on the basis of political ideology.",
        icon: {
            url: "https://truthsocial.com/icons/icon-maskable-72x72.png",
            maskable: true,
        },
        url: "https://truthsocial.com",
        categories: []
    },
    {
        id: 101,
        name: "Tumblr",
        description: "Tumblr. Pure effervescent enrichment. Old internet energy. Home of the Reblogs. All the art you never knew you needed. All the fandoms you could wish for. Enough memes to knock out a moderately-sized mammal. Add to it or simply scroll through and soak it up.",
        url: "https://www.tumblr.com/",
        icon: {
            url: "https://assets.tumblr.com/pop/manifest/icon_72-5073ca87.png",
            maskable: true
        },
        categories: []
    },
    {
        id: 102,
        name: "Glassdoor",
        description: "",
        url: "https://www.glassdoor.com",
        icon: {
            url: "https://www.glassdoor.com/launcher-icon-2x.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 103,
        name: "Gmail",
        url: "https://mail.google.com",
        description: "",
        icon: {
            url: "https://ssl.gstatic.com/images/branding/product/1x/hh_gmail_96dp.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 104,
        name: "Google Maps",
        description: "Arrivez plus vite à destination",
        url: "https://maps.google.com",
        icon: {
            url: "https://maps.gstatic.com/mapfiles/maps_lite/pwa/icons/maps15_bnuw3a_round_192x192.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 105,
        name: "Docs",
        url: "https://docs.google.com",
        description: "",
        icon: {
            url: "https://fonts.gstatic.com/s/i/productlogos/docs_2020q4/v7/web-64dp/logo_docs_2020q4_color_1x_web_64dp.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 106,
        name: "Spreadshets",
        url: "https://sheets.google.com",
        description: "",
        icon: {
            url: "https://fonts.gstatic.com/s/i/productlogos/sheets_2020q4/v6/web-64dp/logo_sheets_2020q4_color_1x_web_64dp.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 107,
        url: "https://slides.google.com",
        name: "Slides",
        description: "",
        icon: {
            url: "https://fonts.gstatic.com/s/i/productlogos/slides_2020q4/v7/web-64dp/logo_slides_2020q4_color_1x_web_64dp.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 108,
        name: "Calendar",
        description: "",
        icon: {
            url: "https://www.gstatic.com/calendar/images/manifest/logo_2020q4_192.png",
            maskable: false,
        },
        url: "https://calendar.google.com",
        categories: []
    },
    {
        id: 111,
        name: "Duolingo",
        description: "",
        icon: {
            url: "https://d35aaqx5ub95lt.cloudfront.net/images/pwa-icon-circle-192.png",
            maskable: true,
        },
        url: "https://www.duolingo.com",
        categories: []
    },
    {
        id: 112,
        name: "Laracasts",
        description: "",
        url: "https://laracasts.com",
        icon: {
            url: "https://laracasts.com/favicons/web-app-manifest-192x192.png",
            maskable: true,
        },
        categories: []
    },
    {
        id: 114,
        name: "Todoist",
        description: "",
        url: "https://www.todoist.com",
        icon: {
            url: "https://www.todoist.com/static/android-chrome-192x192.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 115,
        name: "News",
        description: "",
        url: "https://news.google.com",
        icon: {
            url: "//www.gstatic.com/gnews/logo/google_news_60.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 118,
        name: "Substack",
        url: "https://substack.com/",
        description: "The best reader ever",
        icon: {
            url: "https://substack.com/img/manifest-icons/app-maskable-192.png",
            maskable: true
        },
        categories: []
    },
    {
        id: 119,
        name: "Vercel",
        description: "Build and deploy the best web experiences with the AI Cloud",
        url: "https://vercel.com",
        icon: {
            url: "https://assets.vercel.com/image/upload/v1573246280/front/favicon/vercel/android-chrome-192x192.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 121,
        name: "Proto.io",
        description: "",
        url: "https://proto.io",
        icon: {
            url: "https://proto.io/android-chrome-192x192.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 123,
        name: "Monzo",
        description: "",
        url: "https://monzo.com",
        icon: {
            url: "https://monzo.com/images/icons/maskable-icon-x72.png",
            maskable: true,
        },
        categories: []
    },
    {
        id: 124,
        name: "Ally",
        description: "",
        icon: {
            url: "https://www.ally.com/images/icons/web-app-manifest-192x192.png",
            maskable: false,
        },
        url: "https://www.ally.com",
        categories: []
    },
    {
        id: 125,
        name: "Credit Karma",
        description: "",
        icon: {
            url: "https://ck-assets.imgix.net/assets/1.43.1/favicons/android-chrome.png?w=192&h=192",
            maskable: false,
        },
        url: "https://www.creditkarma.com/",
        categories: []
    },
    {
        id: 126,
        name: "Ramsey",
        description: "",
        url: "https://www.ramseysolutions.com/money/everydollar",
        icon: {
            url: "https://cdn.ramseysolutions.net/cms/sites/ramseysolutions-com/favicons/android-chrome-192x192.png",
            maskable: true,
        },
        categories: []
    },
    {
        id: 127,
        name: "MyFitnessPal",
        description: "",
        url: "https://www.myfitnesspal.com",
        icon: {
            url: "https://www.myfitnesspal.com/favicons/android-chrome-192x192.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 128,
        name: "BentoPDF",
        description: "Free online PDF tools - Privacy-first PDF toolkit that works 100% in your browser",
        url: "https://bentopdf.com",
        icon: {
            url: "https://bentopdf.com/images/favicon-192x192.png",
            maskable: true,
        },
        "categories": [
            "productivity",
            "utilities",
            "security",
        ],
    },
    {
        id: 129,
        name: "it-tools",
        url: "https://it-tools.tech",
        description: "Aggregated set of useful tools for developers.",
        icon: {
            url: "https://it-tools.tech/android-chrome-512x512.png",
            maskable: true,
        },
        categories: []
    },
    {
        id: 130,
        name: "MAZANOKE",
        description: "Privacy-respecting Image Optimizer",
        url: "https://mazanoke.com",
        icon: {
            url: "https://mazanoke.com//assets/images/android-chrome-192x192.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 131,
        name: "Google Photos",
        description: "",
        url: "https://photos.google.com",
        icon: {
            url: "https://www.gstatic.com/social/photosui/images/logo/2025/1x/photos_96dp.png",
            maskable: false
        },
        categories: []
    },
    {
        id: 132,
        name: "MDN",
        description: "",
        icon: {
            url: "https://developer.mozilla.org/favicon-192x192.png",
            maskable: false,
        },
        url: "https://developer.mozilla.org",
        categories: []
    },
    {
        id: 133,
        name: "reve.com",
        description: "",
        url: "https://app.reve.com",
        icon: {
            url: "https://app.reve.com/icon-mask.png",
            maskable: true
        },
        categories: []
    },
    {
        id: 134,
        name: "AI Studio",
        url: "https://aistudio.google.com",
        icon: {
            url: "https://www.gstatic.com/aistudio/ai_studio_favicon_2_96x96.png",
            maskable: true,
        },
        description: "",
        categories: []
    },
    {
        id: 135,
        name: "Sora",
        description: "",
        url: "https://sora.chatgpt.com",
        icon: {
            url: "https://sora.chatgpt.com/sora-icon.webp",
            maskable: false,
        },
        categories: []
    },
    {
        id: 136,
        name: "Ideogram",
        url: "https://ideogram.ai/",
        description: "",
        icon: {
            url: "https://ideogram.ai/favicon.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 137,
        name: "Suno",
        description: "",
        url: "https://suno.com",
        icon: {
            url: "https://cdn-o.suno.com/favicon-192x192.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 138,
        name: "Hume",
        description: "Building AI with emotional intelligence to create technology that truly understands humanity.",
        url: "https://www.hume.ai",
        icon: {
            url: "https://www.hume.ai/icons/icon-72x72.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 139,
        name: "Web Manifest",
        description: "Web application that helps you create Web App Manifests",
        url: "https://manifest.web.nairi.cloud",
        icon: {
            url: "https://manifest.web.nairi.cloud/icon.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 140,
        name: "CBS News",
        description: "CBS News - Breaking News, Live News stream 24x7",
        url: "https://www.cbsnews.com",
        icon: {
            url: "https://www.cbsnews.com/fly/bundles/cbsnewscore/icons/icon-240x240-maskable.png",
            maskable: true,
        },
        categories: [
            "news",
            "politics",
            "entertainment",
        ],
    },
    {
        id: 141,
        name: "Global News",
        description: "",
        url: "https://globalnews.ca",
        icon: {
            url: "https:\/\/globalnews.ca\/wp-content\/themes\/shaw-globalnews\/_img\/pwa\/news_square_maskable-512.png",
            maskable: true,
        },
        categories: [],
    },
    {
        id: 142,
        name: "CBC.ca",
        url: "https://www.cbc.ca",
        description: "Read CBC news, sports, and more!",
        icon: {
            url: "https://www.cbc.ca/a/assets/logo_gem.svg",
            maskable: false,
        },
        categories: []
    },
    {
        id: 143,
        name: "France 24",
        url: "https://www.france24.com",
        description: "France 24",
        icon: {
            url: "https://www.france24.com/maskable_icon.png",
            maskable: true,
        },
        categories: []
    },
    {
        id: 144,
        name: "DW (Deutsche Welle)",
        url: "https://www.dw.com",
        description: "",
        icon: {
            url: "https://www.dw.com/images/icons/favicon-72x72.png",
            maskable: true,
        },
        categories: []
    },
    {
        id: 145,
        name: "TIME",
        description: "",
        url: "https://time.com",
        icon: {
            url: "https://time.com/favicon/apple-touch-icon.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 147,
        name: "Twitch",
        description: "",
        url: "https://m.twitch.tv",
        icon: {
            url: "https://m.twitch.tv/maskable_icon_x192.png",
            maskable: true,
        },
        categories: []
    },
    {
        id: 148,
        name: "Seamless Web",
        description: "Online food ordering from your local favorites for takeout or delivery. Support your local restaurants with Seamless and find coupons, reviews, and more!",
        icon: {
            url: "https://assets.seamless.com/assets/img/brand/seamless/android/raster/smart_banner/android-chrome-72x72.png",
            maskable: false,
        },
        url: "https://www.seamless.com",
        categories: []
    },
    {
        id: 149,
        name: "Postmates",
        description: "",
        url: "https://postmates.com",
        icon: {
            url: "https://postmates.com/_static/0d9ecf4f16865976.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 150,
        name: "Uber EATS",
        description: "",
        url: "https://www.ubereats.com",
        icon: {
            url: "https://www.ubereats.com/_static/35b3b9a3182fec82.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 151,
        name: "SHEIN",
        description: "",
        icon: {
            url: "https://m.shein.com/fr/logo/72.png",
            maskable: false,
        },
        url: "https://m.shein.com",
        categories: []
    },
    {
        id: 152,
        name: "eBay",
        description: "",
        url: "https://www.ebay.com",
        icon: {
            url: "https://ir.ebaystatic.com/cr/v/c1/chauffeur/pwa-app-icons/v1/icon-192x192-maskable.png",
            maskable: true
        },
        categories: []
    },
    {
        id: 153,
        name: "Swiggy",
        url: "https://www.swiggy.com",
        icon: {
            url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/logo_192x192.png",
            maskable: true
        },
        description: "Here’s everything you can do and find on the Swiggy app:\n- Restaurant and Delivery Partners trained in hygiene protocols\n- Find top restaurants in your city\n- Late-night delivery\n-  30+ cuisines, Biryani, Pizza, Dosa, Burgers, Coffee, and more\n- Collections like Veg Only, Healthy Food, and more",
        categories: []
    },
    {
        id: 154,
        name: "Economist",
        description: "",
        url: "https://www.economist.com",
        icon: {
            url: "https://www.economist.com/engassets/ico/icon-mask.png",
            maskable: true
        },
        categories: []
    },
    {
        id: 155,
        name: "Progressier",
        description: "",
        url: "https://progressier.com",
        icon: {
            url: "https://pwa.xyz/eWYX0PrgnbmJTIRgmYiH%2FgsUEZlyEGHgGqUA.png?alt=media&token=09f76955-c91d-40c1-ad12-79c8f2aaeed1",
            maskable: true
        },
        categories: []
    },
    {
        id: 156,
        name: "PWA Today",
        description: "What PWA Can Do Today is a showcase of what is possible with Progressive Web Apps today.\n\nThe app is itself a Progressive Web App which means it can be installed to the home screen of your mobile device or to your desktop.",
        url: "https://whatpwacando.today",
        icon: {
            url: "https://whatpwacando.today/src/img/icons/manifest-icon-192.maskable.png",
            maskable: true
        },
        categories: [
            "education",
            "utilities",
        ],
    },
    {
        id: 157,
        name: "Store.app",
        description: "The Open Web App Store. Discover the best apps on the web, and enjoy fast, secure and universal software.",
        url: "https://store.app",
        icon: {
            url: "https://static.store.app/manifest/maskable192.png",
            maskable: true
        },
        categories: []
    },
    {
        id: 158,
        name: "WorkLedger",
        description: "Local-first engineering notebook",
        url: "https://workledger.org",
        icon: {
            url: "https://workledger.org/icon-512.svg",
            maskable: true
        },
        categories: []
    },
    {
        id: 159,
        name: "Vehique",
        description: "Your AI operating system for car shopping and research",
        url: "https://www.vehique.ai",
        icon: {
            url: "https://www.vehique.ai/android-chrome-192x192.png",
            maskable: true
        },
        categories: [
            "shopping",
            "lifestyle",
        ],
    },
    {
        id: 160,
        name: "Fair Weather",
        description: "Find your perfect window for outdoor running and walking.",
        url: "https://fair-weather.query-farm.services",
        icon: {
            url: "https://fair-weather.query-farm.services/icon-192.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 161,
        name: "Fluxer",
        description: "Fluxer is an open-source, independent instant messaging and VoIP platform. Built for friends, groups, and communities.",
        url: "https://web.fluxer.app",
        icon: {
            url: "https://fluxerstatic.com/web/android-chrome-192x192.png",
            maskable: true
        },
        categories: [
            "social",
        ],
    },
    {
        id: 162,
        name: "RoqueOS",
        description: "Sistema operacional web inspirado no macOS, com janelas, dock, área de trabalho personalizável e aplicativos integrados.",
        url: "https://roqueos.com.br/app",
        icon: {
            url: "https://roqueos.com.br/icons/icon-128x128.png",
            maskable: true
        },
        categories: []
    },
    {
        id: 163,
        name: "MyMiniFactory",
        description: "MyMiniFactory is the curated 3D printing platform. Download and 3D print free - 100% tested - 3D objects created by a global community of talented designers.",
        url: "https://www.myminifactory.com",
        icon: {
            url: "https://www.myminifactory.com/images/launcher/launcher-icon-96x96.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 165,
        name: "Microsoft Bing Webmaster Tools",
        description: "",
        url: "https://www.bing.com/webmasters",
        icon: {
            url: "https://www.bing.com/webmasters/Content\\PWA\\logo\\bing-logo-192.png",
            maskable: true
        },
        categories: []
    },
    {
        id: 167,
        name: "黒塗り",
        description: "ブラウザ完結のAIプライバシー保護ツール",
        url: "https://kuro-nuri.com",
        icon: {
            url: "https://kuro-nuri.com/cat-agents.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 168,
        name: "m-session",
        description: "Guided meditation, breathwork, and journaling for intentional experiences",
        url: "https://www.m-session.com",
        icon: {
            url: "https://www.m-session.com/pwa-512x512.png",
            maskable: true
        },
        categories: []
    },
    {
        id: 169,
        name: "elebean",
        description: "elebean - your music companion",
        url: "https://elebean.com",
        icon: {
            url: "https://elebean.com/icons/icon-256.png",
            maskable: false,
        },
        categories: [
            "music",
            "utilities",
        ],
    },
    {
        id: 170,
        name: "Resumble",
        description: "Create professional, ATS-optimized resumes in minutes with Resumble.",
        url: "https://www.resumble.com",
        icon: {
            url: "https://www.resumble.com/android-chrome-192x192.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 171,
        name: "Chart Vacancy",
        description: "Check live railway reservation chart status online and view real-time seat availability.",
        url: "https://chartvacancy.website",
        icon: {
            url: "https://chartvacancy.website/android-chrome-192x192.png",
            maskable: true
        },
        categories: []
    },
    {
        id: 172,
        name: "Math",
        url: "https://mathriddles.netlify.app",
        description: "Simple Quiz App with Interesting Maths Riddles & Levels up your IQ with Math Oparations.",
        icon: {
            url: "https://mathriddles.netlify.app/images/logo128.png",
            maskable: true,
        },
        categories: []
    },
    {
        id: 173,
        name: "MConverter",
        description: "Quick, easy and simple online file converter. Convert large files in bulk. Lots of video, audio, image, e-book, office and archive formats are supported, including AVIF and JPEG XL.\n📁 Convert by right-clicking on files: Open with... > MConverter, or via the Share menu.",
        url: "https://mconverter.eu",
        icon: {
            url: "https://mconverter.eu/img/icon-pwa.png",
            maskable: true,
        },
        categories: [
            "utilities",
            "photo",
            "music",
            "books",
        ],
    },
    {
        id: 174,
        name: "Memory Game",
        description: "Play this game and strengthen your memory!",
        url: "https://pwa-memory-game.surge.sh",
        icon: {
            url: "https://pwa-memory-game.surge.sh/images/72.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 175,
        name: "Messages",
        description: "",
        url: "https://messages.google.com/web",
        icon: {
            url: "https://ssl.gstatic.com/android-messages-web/images/2022.3/2x/messages_2022_round_96dp.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 176,
        name: "MoneyTracker",
        description: "",
        icon: {
            url: "https://app.moneytracker.cc/favicon-192.png",
            maskable: false,
        },
        url: "https://app.moneytracker.cc",
        categories: []
    },
    {
        id: 177,
        name: "Morse Code Translator",
        url: "https://morsecodetranslator.com",
        description: "Translate text to Morse code and vice versa.",
        icon: {
            url: "https://morsecodetranslator.com/assets/icons/android-chrome-192x192.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 178,
        name: "Murlok",
        description: "Explore in-depth PvP and PvE character build guides for WoW The War Within 12.0, tailored for Solo Shuffle, 2v2, 3v3, RBG, and Mythic+. Gain insights from analyses of the top 50 players for each class and game mode. Continually updated every 8 hours to ensure you have the latest WoW meta strategies.",
        url: "https://murlok.io",
        icon: {
            url: "https://static.murlok.io/web/murlok-maskable-512.png",
            maskable: true
        },
        categories: []
    },
    {
        id: 179,
        name: "Nanocell-csv",
        url: "https://www.nanocell-csv.com/app/home.html",
        description: "Nanocell - CSV file viewer & editor : free, fast, simple, lightweight, offline, cross platform, data accurate, PWA (Progressive Web App)",
        icon: {
            url: "https://www.nanocell-csv.com/app/favicon-96x96.png",
            maskable: false,
        },
        categories: [
            "productivity",
            "utilities",
            "business",
        ],
    },
    {
        id: 180,
        name: "Othello",
        description: "Play Othello against an AI with this beautiful modern web app.",
        url: "https://othello-rust.web.app",
        icon: {
            url: "https://othello-rust.web.app/icons/maskable-192.png",
            maskable: true,
        },
        categories: [
            "games",
        ],
    },
    {
        id: 181,
        url: "https://pasteepad.com",
        name: "PasteePad",
        description: "Online Text Editor to paste and keep text, great for notes, todos and links.",
        icon: {
            url: "https://pasteepad.com/icon-192x192.png",
            maskable: true,
        },
        categories: []
    },
    {
        id: 182,
        name: "PixelCraft",
        description: "",
        icon: {
            url: "https://pixelcraft.web.app/icons/logo.png",
            maskable: false,
        },
        url: "https://pixelcraft.web.app",
        categories: []
    },
    {
        id: 183,
        url: "https://nenadalm.github.io/player-order-selector",
        name: "Player order selector",
        description: "Random player order selector.",
        icon: {
            url: "https://nenadalm.github.io/player-order-selector/img/icon_512.png?v=074eee41d756a3e583a039e8d349bb8048c28c48",
            maskable: true,
        },
        "categories": [
            "utilities",
        ],
    },
    {
        id: 184,
        name: "PWA NES",
        description: "8-bit NES Emulator",
        icon: {
            url: "https://pwa-nes.vercel.app/android-chrome-192x192.png",
            maskable: false,
        },
        url: "https://pwa-nes.vercel.app",
        categories: []
    },
    {
        id: 185,
        name: "Qi Reader",
        description: "A Modern Web RSS Reader",
        url: "https://www.qireader.com",
        icon: {
            url: "https://www.qireader.com/static/icon192.maskable.png",
            maskable: true,
        },
        categories: [
            "news",
            "magazines",
        ],
    },
    {
        id: 186,
        name: "QR Code Generator",
        description: "Create custom QR Codes. You can save them as PNG image. You can change the size of the image.",
        url: "https://qr-code-generator.vercel.app",
        icon: {
            url: "https://qr-code-generator.vercel.app/assets/icons/icon-72x72.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 187,
        name: "SimilarWorlds",
        url: "https://similarworlds.com",
        description: "Discuss Experiences, Share Stories, Ask Questions, Find Answers, Explore Interests, Make Friends, Express your true Self - The New Experience Project is Here!",
        icon: {
            url: "https://images.similarworlds.com/Similar-Worlds-Logo-Symbol-1024-Mask.png",
            maskable: true,
        },
        categories: [
            "social",
            "entertainment",
            "photo",
            "news",
        ],
    },
    {
        id: 188,
        name: "Converter",
        description: "",
        icon: {
            url: "https://currency-converter.vercel.app/favicon-small.png",
            maskable: false,
        },
        url: "https://currency-converter.vercel.app",
        categories: []
    },
    {
        id: 189,
        url: "https://soodoku.com",
        name: "Soodoku",
        description: "Free online & offline sudoku game with unlimited puzzles available 24/7 without ads or registration",
        icon: {
            url: "https://soodoku.com/android-chrome-512x512.png",
            maskable: true,
        },
        categories: []
    },
    {
        id: 190,
        name: "Splittypie",
        description: "",
        url: "https://splittypie.com",
        icon: {
            url: "https://splittypie.com/assets/icons/android/icon-72x72.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 191,
        name: "MobiTUKI",
        description: "The best available English-Swahili-English dictionary with 30000+ entries, including idioms, derivatives, etymology and examples.",
        url: "https://swahili-dictionary.com",
        icon: {
            url: "https://swahili-dictionary.com/static/img/favicon/apple-touch-icon.png",
            maskable: true,
        },
        categories: [
            "education",
            "utilities",
        ],
    },
    {
        id: 192,
        name: "Todoly",
        url: "https://t4p4n.github.io/todoly",
        description: "A Simple Todo List App!",
        icon: {
            url: "https://t4p4n.github.io/todoly/images/msteams-192-192.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 193,
        url: "https://m.uber.com",
        name: "Uber",
        description: "",
        icon:
        {
            url: "https://d3i4yxtzktqr9n.cloudfront.net/web-plan/b8c00410291161d0.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 194,
        name: "MTGStocks",
        description: "",
        icon: {
            url: "https://www.mtgstocks.com/assets/images/favicons/android-chrome-192x192.png",
            maskable: false,
        },
        url: "https://www.mtgstocks.com",
        categories: []
    },
    {
        id: 195,
        name: "Tower Game",
        description: "Stack blocks and build the tallest tower!",
        icon: {
            url: "https://towergame.app/assets/icon-192.png",
            maskable: false,
        },
        url: "https://towergame.app",
        categories: []
    },
    {
        id: 196,
        name: "Hextris",
        url: "https://hextris.io",
        description: "An addictive puzzle game inspired by Tetris.",
        icon: {
            url: "https://hextris.io/images/icons/maskable-192.png",
            maskable: true,
        },
        categories: []
    },
    {
        id: 197,
        name: "Alchemy 2",
        description: "Combine items and create the world from scratch! Fun as always, more exciting than ever! Little Alchemy returns in style!",
        icon: {
            url: "https://littlealchemy2.com/public/icons/icon-72x72.png",
            maskable: false,
        },
        url: "https://littlealchemy2.com",
        categories: []
    },
    {
        id: 198,
        name: "The Cube",
        description: "",
        icon: {
            url: "https://bsehovac.github.io/the-cube/android-chrome-192x192.png",
            maskable: false,
        },
        url: "https://bsehovac.github.io/the-cube",
        categories: []
    },
    {
        id: 199,
        name: "Bubble Pairs",
        description: "A good old memory game with new and unique elements that make play experience remarkable.",
        url: "https://bubblepairs.apps.in.rs",
        icon: {
            url: "https://bubblepairs.apps.in.rs/game-icon-big.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 200,
        name: "SNAKISMS",
        description: "Life is meaningless! Maybe you need some kind of ism to attempt to ward off the inevitable and unavoidable despair! Here, have some isms made of snakes! Life is still meaningless but now you have a bunch of snakes as well! Thank me later!",
        url: "https://pippinbarr.com/SNAKISMS",
        icon: {
            url: "https://pippinbarr.com/SNAKISMS/press/images/SNAKISMS.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 201,
        name: "Code Insiders",
        description: "",
        url: "https://insiders.vscode.dev",
        icon: {
            url: "https://insiders.vscode.dev/static/insider/code-192-maskable.png",
            maskable: true,
        },
        categories: []
    },
    {
        id: 202,
        name: "Nova",
        description: "Track your net worth across all assets with AI-powered insights. Secure, comprehensive, and affordable.",
        url: "https://www.novanetworth.com",
        icon: {
            url: "https://www.novanetworth.com/favicons/light/android-chrome-192x192.png",
            maskable: true,
        },
        categories: [
            "finance",
            "productivity",
            "business",
        ],
    },
    {
        id: 203,
        name: "Loxalize",
        description: "",
        icon: {
            url: "https://loxalize.ai/web-app-manifest-192x192.png",
            maskable: false,
        },
        url: "https://loxalize.ai",
        categories: []
    },
    {
        id: 204,
        name: "slingshot.money",
        description: "",
        url: "https://www.slingshot.money",
        icon: {
            url: "https://www.slingshot.money/logo-192.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 205,
        name: "Reddit",
        description: "",
        url: "https://www.reddit.com",
        icon: {
            url: "https://www.reddit.com/192x192.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 206,
        name: "StellarSpeak",
        description: "انطلق في رحلة كونية لتعلم الإنجليزية، من كوكب المبتدئين إلى سديم الحكمة.",
        url: "https://www.stellarspeak.online",
        icon: {
            url: "https://www.stellarspeak.online/app-icon-192.png",
            maskable: true,
        },
        categories: [
            "education",
            "productivity",
            "lifestyle",
        ],
    },
    {
        id: 207,
        name: "PWA Inbox",
        description: "PWA Inbox — a Progressive Web Application powered by MagicBell",
        url: "https://pwainbox.com",
        icon: {
            url: "https://pwainbox.com/icons/ios/72.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 208,
        name: "Lichess",
        url: "https://lichess.org",
        description: "The (really) free, no-ads, open source chess server.",
        icon: {
            url: "https://lichess1.org/assets/logo/lichess-favicon-128.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 209,
        name: "CardVault",
        description: "Secure loyalty card manager with barcode scanning",
        url: "https://maxgfr.github.io/loyalty-card-vault",
        icon: {
            url: "https://maxgfr.github.io/loyalty-card-vault/icons/manifest-icon-192.maskable.png",
            maskable: true,
        },
        categories: []
    },
    {
        id: 210,
        name: "BLOCK MATCH",
        description: "",
        url: "https://block-match-game.vercel.app",
        icon: {
            url: "https://block-match-game.vercel.app/favicon.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 211,
        name: "Tetrix",
        description: "A free, ad-free relaxing puzzle game. Drag and drop shapes, clear lines, and enjoy infinite gameplay with no interruptions. Perfect for casual gaming and brain training.",
        url: "https://tetrix.io",
        icon: {
            url: "https://tetrix.io/icons/icon-192x192.png",
            maskable: true,
        },
        categories: [
            "games",
            "entertainment",
        ]
    },
    {
        id: 212,
        name: "Web Store",
        description: "Откройте мир web-приложений",
        url: "https://wapps.store",
        icon: {
            url: "https://wapps.store/192x192_maskable.png",
            maskable: true
        },
        categories: []
    },
    {
        id: 213,
        name: "qr",
        description: "no nonsense QR code generator as a Progressive Web App",
        url: "https://hunterirving.github.io/qr",
        icon: {
            url: "https://hunterirving.github.io/qr/icon.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 214,
        name: "icemap",
        description: "Anonymous, real-time incident reporting on a map. No accounts. No tracking. Posts auto-delete after 7 days.",
        url: "https://icemap.app",
        icon: {
            url: "https://icemap.app/icons/icon-192x192.png",
            maskable: true,
        },
        categories: [
            "news",
            "social",
            "utilities",
        ]
    },
    {
        id: 215,
        name: "TaskDumpr",
        description: "",
        url: "https://taskdumpr.com",
        icon: {
            url: "https://taskdumpr.com/web-app-manifest-192x192.png",
            maskable: true,
        },
        categories: []
    },
    {
        id: 216,
        name: "LekeeLekee",
        description: "Connect, share, and discover content with a vibrant community.",
        url: "https://www.lekeelekee.com",
        icon: {
            url: "https://www.lekeelekee.com/android-chrome-192x192-maskable.png",
            maskable: true
        },
        "categories": [
            "social",
            "entertainment",
        ],
    },
    {
        id: 217,
        name: "The Conversation",
        description: "",
        url: "https://theconversation.com",
        icon: {
            url: "https://images.theconversation.com/files/581997/original/9275d5c0-7dd5-4ddf-b50b-98d537e016f4.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 218,
        name: "AP News",
        description: "",
        url: "https://apnews.com",
        icon: {
            url: "https://assets.apnews.com/77/8e/bddbc9f3405984501b8a10dfc921/android-app-icon-144.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 219,
        name: "Recap Flow",
        description: "AI Workspace for productivity, featuring AI Negotiator and Pro Calculators.",
        url: "https://recapflow.com",
        icon: {
            url: "https://recapflow.com/logo-maskable.png",
            maskable: true
        },
        categories: [
            "productivity",
            "utilities",
        ],
    },
    {
        id: 220,
        name: "GiveTwice",
        description: "Create and share wishlists. All affiliate revenue goes to charity.",
        url: "https://givetwice.app",
        icon: {
            url: "https://givetwice.app/android-chrome-maskable-192x192.png",
            maskable: true
        },
        categories: [
            "shopping",
            "lifestyle",
        ],
    },
    {
        id: 221,
        name: "FetchAsset",
        description: "AI-powered client asset onboarding portals",
        url: "https://www.fetchasset.com",
        icon: {
            url: "https://www.fetchasset.com/apple-touch-icon.png",
            maskable: true
        },
        categories: [
            "business",
            "productivity",
        ],
    },
    {
        id: 222,
        name: "Tailwatch",
        description: "Hierarchical event, task, and message dashboard with log and status views.",
        url: "https://tailwatch.dev",
        icon: {
            url: "https://tailwatch.dev/pwa-maskable-512x512.png",
            maskable: true
        },
        categories: []
    },
    {
        id: 223,
        url: "https://thelittlegamefactory.com",
        name: "The Little Game Factory",
        description: "High quality webGL games for desktop pc and mobile phones",
        icon: {
            url: "https://thelittlegamefactory.com/wp-content/themes/supergoodgames/images/icon-mask.svg",
            maskable: true
        },
        categories: []
    },
    {
        id: 224,
        name: "softbear.com",
        description: "A collection of high-quality, free-to-play, multiplayer, IO games for unblocked HTML5 web browsers. Join any time to play, team, and chat. No software download or installation required.",
        url: "https://softbear.com",
        icon: {
            url: "https://softbear.com/softbear_logo.png",
            maskable: false,
        },
        categories: [
            "games",
        ],
    },
    {
        id: 225,
        name: "Voxmaxa",
        description: "Voxmaxa is a free for all combat game in a block world. It is free to play online in a web browser with nothing to install.",
        url: "https://mazean.com",
        icon: {
            url: "https://mazean.com/data/512x512.png",
            maskable: false
        },
        categories: [
            "games",
        ],
    },
    {
        id: 226,
        name: "Kiomet",
        description: "Kiomet is a multiplayer real-time strategy game. It is free to play online in a web browser with no install required. Start with a small country and expand into unclaimed areas. Make strategic alliances and join forces to defeat rivals. Protect the king at all times.",
        url: "https://kiomet.com",
        icon: {
            url: "https://kiomet.com/data/512x512.png",
            maskable: true
        },
        categories: [
            "games",
        ],
    },
    {
        id: 227,
        name: "Krakax",
        description: "Krakax is a multiplayer archery game. It is free to play online in a web browser with no install required.",
        url: "https://krakax.com",
        icon: {
            url: "https://krakax.com/data/512x512.png",
            maskable: false,
        },
        categories: [
            "games",
        ],
    },
    {
        id: 228,
        name: "mk48.io",
        description: "Mk48.io is a multiplayer ship combat game. It is free to play online in a web browser with no install required. Start with a small warship and defeat rival players or collect floating barrels to earn upgrades to increasingly larger battleships, submarines, and aircraft carriers. Avoid torpedos and incoming shells. Team and chat with other players.",
        url: "https://mk48.io",
        icon: {
            url: "https://mk48.io/data/mask256x256.png",
            maskable: true
        },
        "categories": [
            "games",
        ],
    },
    {
        id: 229,
        name: "Netquel",
        description: "Netquel is a multiplayer space war game. It is free to play online in a web browser with nothing to install. Start with a small ship and defeat rival players or mine asteriods to earn upgrades. Team and chat with other players.",
        url: "https://netquel.com",
        icon: {
            url: "https://netquel.com/data/512x512.png",
            maskable: true
        },
        categories: [
            "games",
        ],
    },
    {
        id: 230,
        name: "Tankgank",
        description: "Tankgank is a multiplayer tank battle game. It is free to play online in a web browser with nothing to install. Earn points by conquering territory. Encircle or outgun rivals to defeat them. Team and chat with other players.",
        url: "https://tankgank.com",
        icon: {
            url: "https://tankgank.com/data/512x512.png",
            maskable: true,
        },
        categories: [
            "games",
        ],
    },
    {
        id: 231,
        name: "Turnfight",
        description: "Turnfight is a multiplayer air combat game. It is free to play online in a web browser with no installation required. Choose your favorite plane and defeat rivals to earn points.",
        url: "https://turnfight.com",
        icon: {
            url: "https://turnfight.com/data/512x512.png",
            maskable: false,
        },
        categories: [
            "games",
        ],
    },
    {
        id: 232,
        name: "PayFit",
        url: "https://payfit.com",
        description: "",
        icon: {
            url: "https://payfit.com/imgs/web-app-manifest-192x192.png",
            maskable: true
        },
        categories: [],
    },
    {
        id: 233,
        url: "https://aminnairi.github.io/chmod",
        description: "Calculate chmod permissions using a grahpical Web interface",
        name: "Chmod",
        icon: {
            url: "https://aminnairi.github.io/chmod/icon.png",
            maskable: true,
        },
        categories: []
    },
    {
        id: 234,
        name: "Channel Surfer",
        description: "",
        url: "https://channelsurfer.tv",
        icon: {
            url: "https://channelsurfer.tv/web-app-manifest-192x192.png",
            maskable: true
        },
        categories: []
    },
    {
        id: 235,
        name: "YouBrokeProd",
        description: "Master production incidents through realistic simulations",
        url: "https://www.youbrokeprod.com",
        icon: {
            url: "https://www.youbrokeprod.com/icon-192.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 236,
        name: "diVine",
        description: "Watch and share 6-second looping videos on the decentralized Nostr network.",
        url: "https://divine.video",
        categories: [
            "entertainment",
            "video",
            "social",
        ],
        icon: {
            url: "https://divine.video/app_icon.png",
            maskable: true
        },
    },
    {
        id: 237,
        name: "LifeDots",
        description: "Visualize your life timeline with interactive dots",
        url: "https://lifedots.app",
        icon: {
            url: "https://lifedots.app/assets/android-chrome-512x512.png",
            maskable: true
        },
        categories: []
    },
    {
        id: 238,
        name: "Tuner",
        url: "https://realtuner.online",
        description: "",
        icon: {
            url: "https://realtuner.online/favicon/web-app-manifest-192x192.png",
            maskable: true,
        },
        categories: []
    },
    {
        id: 239,
        name: "GitPulse",
        description: "Transform raw GitHub data into a clean, living developer profile. Showcase your shipping velocity, maintenance focus, and real engineering impact.",
        url: "https://www.gitpulse.dev",
        icon: {
            url: "https://www.gitpulse.dev/assets/gitpulse_icon_bg_black_round.png",
            maskable: true
        },
        categories: []
    },
    {
        id: 240,
        name: "DigiBouquet.net",
        url: "https://digibouquet.net",
        description: "",
        icon: {
            url: "https://digibouquet.net/images/android-chrome-192x192.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 241,
        name: "Ichinichi",
        description: "A minimalist daily note app. One note per day.",
        url: "https://ichinichi.app",
        icon: {
            url: "https://ichinichi.app/favicons/android-chrome-512x512.png",
            maskable: true,
        },
        categories: []
    },
    {
        id: 242,
        name: "Pixelate Image",
        description: "Free online image pixelator. Pixelate faces, license plates, or create retro 8-bit art instantly. Private, fast, and works entirely in your browser with no upload required.",
        url: "https://www.pixelateimage.co",
        icon: {
            url: "https://www.pixelateimage.co/logo.png",
            maskable: false,
        },
        categories: [
            "utilities",
            "photo"
        ]
    },
    {
        id: 243,
        url: "https://tvexplorer.live",
        description: "Stream 10,000+ free-to-air TV channels from 177 countries in your browser. HLS live streaming, M3U import, search, favorites, multiview, and more.",
        name: "IPTV Pro",
        icon: {
            url: "https://iptvpro.live/projects/iptv-pro/images/hero.jpg",
            maskable: false,
        },
        categories: ["entertainment", "video"]
    },
    {
        id: 244,
        name: "Nitter",
        description: "",
        url: "https://xcancel.com",
        icon: {
            url: "https://xcancel.com/android-chrome-192x192.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 245,
        name: "Porcfolio",
        url: "https://app.porcfolio.com",
        description: "Zero-cost personal finance tracker.",
        icon: {
            url: "https://app.porcfolio.com/icons/Icon-maskable-192.png",
            maskable: true
        },
        categories: []
    },
    {
        id: 247,
        name: "AbjadPro",
        description: "",
        url: "https://abjadpro.com",
        icon: {
            url: "https://abjadpro.com/android-chrome-192x192.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 248,
        name: "TheDayAfter",
        description: "Your addiction recovery companion",
        url: "https://thedayafter.app",
        icon: {
            url: "https://thedayafter.app/icon-192.png",
            maskable: true,
        },
        categories: []
    },
    {
        id: 249,
        name: "Polymarket",
        description: "",
        icon: {
            url: "https://polymarket.com/icons/android-chrome-192x192.png",
            maskable: true
        },
        categories: [],
        url: "https://polymarket.com",
    },
    {
        id: 250,
        name: "DiscoVox",
        url: "https://discovox.org",
        description: "Listen to audiobooks and read along to boost your language comprehension with DiscoVox!\nInstall this app to enjoy a seamless experience with offline access.",
        icon: {
            url: "https://discovox.org/static/icons/manifest-icon-192.maskable.png",
            maskable: true,
        },
        categories: []
    },
    {
        id: 251,
        name: "VidSnoop",
        description: "Video Analysis Tool",
        url: "https://www.vidsnoop.com",
        icon: {
            url: "https://www.vidsnoop.com/maskable-icon-512x512.png",
            maskable: true
        },
        categories: []
    },
    {
        id: 252,
        name: "Showcode",
        description: "Generate beautiful images of code.",
        icon: {
            url: "https://showcode.app/_nuxt/icons/icon_120x120.3d4a63.png",
            maskable: true
        },
        url: "https://showcode.app",
        categories: []
    },
    {
        id: 253,
        name: "Star Walk",
        description: "",
        url: "https://starwalk.space",
        icon: {
            url: "https://starwalk.space/icon-192.png",
            maskable: false,
        },
        categories: [],
    },
    {
        id: 254,
        name: "Padel Tactics",
        description: "",
        url: "https://www.padelchess.me",
        icon: {
            url: "https://www.padelchess.me/icons/192.png",
            maskable: false,
        },
        categories: [],
    },
    {
        id: 255,
        name: "Basalt",
        description: "",
        url: "https://basalt-docs.com",
        icon: {
            url: "https://basalt-docs.com/assets/web-app-manifest-192x192.png",
            maskable: true,
        },
        categories: [
            "developer tools",
        ],
    },
    {
        id: 256,
        name: "OPO",
        description: "",
        url: "https://opo.fausto.me",
        icon: {
            url: "https://opo.fausto.me/favicon.ico",
            maskable: false,
        },
        categories: [
            "social",
        ],
    },
    {
        id: 257,
        name: "deariary",
        description: "Fully automated diary generation from your connected services",
        url: "https://app.deariary.com",
        icon: {
            url: "https://app.deariary.com/icon-192.png",
            maskable: true
        },
        categories: [
            "lifestyle",
            "productivity",
            "utilities",
        ],
    },
    {
        id: 258,
        name: "ConvertUniverse",
        description: "Automate document processes with AI workflows and intelligent tools. 100% free, secure, and built for scale.",
        url: "https://www.convertuniverse.com",
        icon: {
            url: "https://www.convertuniverse.com/apple-icon.png",
            maskable: true
        },
        categories: [
            "productivity",
            "utilities",
            "business"
        ],
    },
    {
        id: 259,
        name: "Twill",
        description: "Automate bug fixes, features, and maintenance with coding agents. Twill ships PRs autonomously in sandboxed environments, and pings you when it needs your input.",
        url: "https://twill.ai",
        icon: {
            url: "https://twill.ai/favicon.svg",
            maskable: false,
        },
        categories: [
            "developer tools",
        ],
    },
    {
        id: 260,
        name: "Ensemble",
        description: "A free screenplay editor that automatically formats as you type.",
        url: "https://ensemblewriter.com",
        icon: {
            url: "https://ensemblewriter.com/android-chrome-192x192.png",
            maskable: false,
        },
        categories: [
            "productivity",
        ],
    },
    {
        id: 261,
        name: "Say That Sh",
        description: "The digital billboard where the only algorithm is capitalism. Post your message, or pay to replace the current one.",
        url: "https://saythat.sh",
        icon: {
            url: "https://saythat.sh/icon-192x192.png",
            maskable: true
        },
        categories: [
            "social",
        ],
    },
    {
        id: 262,
        name: "Suno",
        description: "",
        url: "https://suno.com",
        icon: {
            url: "https://cdn-o.suno.com/favicon-192x192.png",
            maskable: false,
        },
        categories: []
    },
    {
        id: 263,
        name: "Timerjoy",
        description: "Free online timers, countdowns, stopwatch, and date calculators. No downloads, no sign-up.",
        url: "https://timerjoy.com/",
        icon: {
            url: "https://timerjoy.com/icon.svg",
            maskable: false,
        },
        categories: [],
    },
    {
        id: 264,
        name: "Chartle",
        description: "AI-Powered Data Visualization",
        url: "https://www.chartle.app",
        icon: {
            url: "https://www.chartle.app/web-app-manifest-192x192.png",
            maskable: true
        },
        categories: [],
    },
    {
        id: 265,
        name: "SitRoom",
        description: "Bitcoin & Global Macro Intelligence Dashboard",
        url: "https://situationroom.space",
        icon: {
            url: "https://situationroom.space/icons/icon-192.png",
            maskable: true,
        },
        categories: [],
    },
    {
        id: 266,
        name: "MatchGuide",
        description: "The essential travel guide for fans attending the 2026 World Cup in Canada. Matches, restaurants, transit & local secrets for Vancouver & Toronto.",
        icon: {
            url: "https://matchguide.ca/icons/icon-192.png",
            maskable: true,
        },
        url: "https://matchguide.ca",
        categories: ["sports", "travel", "food"],
    },
    {
        id: 267,
        name: "Zura",
        description: "Domain portfolio management — DNS, SEO, security, and registrar ops.",
        icon: {
            url: "https://zura.chat/icon.svg",
            maskable: true,
        },
        url: "https://zura.chat/app",
        categories: [],
    },
    {
        id: 268,
        name: "UnWX",
        description: "This app alerts you when severe weather is expected. The alerts are a reliable and quick forecast based on official sources. Depending on the country, it warns of weather dangers like cyclones, tornadoes, thunderstorms, hail, heavy rain, snow, freeze, slipperiness, heat, heavy wind, fog, flood or marine warnings.",
        icon: {
            url: "https://www.unwx.app/pwa/launcher/launcher_192-maskable.png",
            maskable: true,
        },
        url: "https://www.unwx.app/pwa",
        categories: ["weather", "utilities"],
    },
    {
        id: 269,
        name: "Rain Alarm",
        description: "This weather app alerts you when rain is approaching. The alerts are a reliable short-term forecast based on near real-time data. This app is more precise and reliable than a traditional forecast. It is very useful for all outdoor activities – including cycling, motorcycling, hiking, gardening, BBQs, picnics, dog walking and DIY.",
        icon: {
            url: "https://www.rain-alarm.com/launcher/launcher_192-maskable.png",
            maskable: true,
        },
        url: "https://www.rain-alarm.com",
        categories: ["weather", "utilities"],
    },
    {
        id: 270,
        name: "Getly",
        description: "Buy and sell digital products: templates, fonts, code, graphics, and more.",
        icon: {
            url: "https://www.getly.store/icon-192.png",
            maskable: false,
        },
        url: "https://www.getly.store",
        categories: [],
    },
    {
        id: 271,
        name: "TradeMatrix",
        description: "Score every stock across 25 indicators, 5 factors, and 3 time horizons.",
        icon: {
            url: "https://trade-matrix.com/icons/brand/score-ring-512.png",
            maskable: true,
        },
        url: "https://trade-matrix.com/dashboard",
        categories: [],
    },
    {
        id: 272,
        name: "AttaQuiz",
        description: "Have Fun. Get Smarter. Learn any topic while having fun with quizzes.",
        icon: {
            url: "https://attaquiz.com/icons/icon-512.png",
            maskable: true,
        },
        url: "https://attaquiz.com",
        categories: ["education", "games"],
    },
    {
        id: 273,
        name: "Taskadactyl",
        description: "Gamified task manager for ADHD brains. Turn boring tasks into exciting adventures with your Taskadactyl companion.",
        icon: {
            url: "https://taskadactyl.com/icons/icon-512.png",
            maskable: true,
        },
        url: "https://taskadactyl.com/app",
        categories: ["productivity", "lifestyle", "utilities"],
    },
    {
        id: 274,
        name: "Mu",
        description: "Building blocks for apps",
        icon: {
            url: "https://mu.xyz/icon-512.png",
            maskable: true,
        },
        url: "https://mu.xyz",
        categories: [],
    },
    {
        id: 275,
        name: "neobotnet",
        description: "Web Reconnaissance. Delivered.",
        icon: {
            url: "https://www.neobotnet.com/favicons/favicon-512x512.png",
            maskable: true,
        },
        url: "https://www.neobotnet.com",
        categories: [],
    },
    {
        id: 276,
        name: "podhoc",
        description: "Learn in motion. Distill any content into pedagogical audio capsules.",
        icon: {
            url: "https://podhoc.com/images/apple-touch-icon.png",
            maskable: false,
        },
        url: "https://podhoc.com",
        categories: [],
    },
    {
        id: 277,
        name: "MangoWave",
        description: "Browser-based audio-reactive visualizer inspired by Winamp and MilkDrop",
        icon: {
            url: "https://play.mangowave.app/android-chrome-192x192.png",
            maskable: false,
        },
        url: "https://play.mangowave.app",
        categories: [],
    },
    {
        id: 278,
        name: "RailRaptor",
        description: "Offline-capable UK Train Route Planner",
        icon: {
            url: "https://railraptor.com/icon-192-maskable.png",
            maskable: true,
        },
        url: "https://railraptor.com",
        categories: [],
    },
    {
        id: 279,
        name: "Playra",
        description: "The next generation video platform. Watch, share, and subscribe to your favorite creators.",
        icon: {
            url: "https://playra-app.vercel.app/icon-maskable-512x512.png",
            maskable: true,
        },
        url: "https://playra-app.vercel.app",
        categories: ["entertainment", "social"],
    },
    {
        id: 280,
        name: "Keydar",
        description: "",
        icon: {
            url: "https://keydar.app/web-app-manifest-192x192.png",
            maskable: true,
        },
        url: "https://keydar.app",
        categories: [],
    },
    {
        id: 281,
        name: "MySite",
        description: "",
        icon: {
            url: "https://www.mediafa.st/web-app-manifest-192x192.png",
            maskable: true,
        },
        url: "https://www.mediafa.st",
        categories: [],
    },
    {
        id: 282,
        name: "VizTools",
        description: "",
        icon: {
            url: "https://viztools.app/android-chrome-192x192.png",
            maskable: false,
        },
        url: "https://viztools.app",
        categories: [],
    },
    {
        id: 283,
        name: "BetterPrompt",
        description: "Discover, build, and monetize ready-to-run AI prompts for ChatGPT, Gemini, Grok, and more.",
        icon: {
            url: "https://betterprompt.me/web-app-manifest-512x512.png",
            maskable: true,
        },
        url: "https://betterprompt.me",
        categories: [],
    },
    {
        id: 284,
        name: "OpenHour",
        description: "Turn natural language into your daily plan",
        icon: {
            url: "https://www.openhour.ai/icon-192.png",
            maskable: true,
        },
        url: "https://www.openhour.ai",
        categories: [],
    },
    {
        id: 285,
        name: "Mooduna",
        description: "Track your mood, practice mindfulness, and invest in your mental wellness.",
        icon: {
            url: "https://www.mooduna.app/logo192.png",
            maskable: true,
        },
        url: "https://www.mooduna.app",
        categories: [],
    },
    {
        id: 286,
        name: "isitdown",
        description: "Check if any website is down for everyone or just you.",
        icon: {
            url: "https://isitdown.page/favicon-192x192.png",
            maskable: false,
        },
        url: "https://isitdown.page",
        categories: [],
    },
    {
        id: 287,
        name: "Plany",
        description: "Simple, Calendar-First Trip Planning",
        icon: {
            url: "https://app.plany.ae/icons/icon-192.png",
            maskable: true,
        },
        url: "https://app.plany.ae",
        categories: [],
    },
    {
        id: 288,
        name: "MoatRadar",
        description: "",
        icon: {
            url: "https://www.moatradar.com/favicon.png",
            maskable: false,
        },
        url: "https://www.moatradar.com",
        categories: [],
    },
    {
        id: 289,
        name: "Frenzy",
        description: "Earn on second-by-second price moves across all markets. Where milliseconds make money.",
        icon: {
            url: "https://frenzy.finance/icons/app/icon-512-maskable.png",
            maskable: true,
        },
        url: "https://frenzy.finance",
        categories: [],
    },
    {
        id: 290,
        name: "Dusk AI",
        description: "The AI Companion That Never Forgets",
        icon: {
            url: "https://duskai.io/favicon-192.png",
            maskable: false,
        },
        url: "https://duskai.io",
        categories: [],
    },
    {
        id: 291,
        name: "Replika App",
        description: "",
        icon: {
            url: "https://my.replika.com/android-icon-72x72.png",
            maskable: false,
        },
        url: "https://my.replika.com",
        categories: [],
    },
    {
        id: 292,
        name: "Breo",
        description: "Your AI companion for restaurant and bar owners",
        icon: {
            url: "https://booteek.ai/android-chrome-192x192.png",
            maskable: true,
        },
        url: "https://booteek.ai",
        categories: ["business", "productivity", "food"],
    },
];

export default apps;
