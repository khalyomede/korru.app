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
        url: "https://open.spotify.com/?utm_source=pwa_install",
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
    },
    {
        id: 7,
        icon: {
            url: "https://www.thefork.com/statics/icons/icon-72x72.png",
            maskable: false,
        },
        url: "https://www.thefork.com/",
        name: "TheFork",
        description: "Discover and book the best restaurant",
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
    },
    {
        id: 9,
        name: "Pinterest",
        description: "",
        icon: {
            url: "https://s.pinimg.com/images/favicon_red_192.png",
            maskable: false,
        },
        url: "https://pinterest.com/?utm_source=homescreen_icon",
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
    },
    {
        id: 12,
        name: "OLX Lite",
        description: "",
        icon: {
            url: "https://www.olx.in/logo/olx-medium.png",
            maskable: false,
        },
        url: "https://www.olx.in/?install=true",
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
    },
    {
        id: 14,
        name: "Infobae",
        description: "Noticias de Argentina y del mundo en tiempo real.",
        icon: {
            url: "https://www.infobae.com/assets/images/logos/icon-192x192.png",
            maskable: false,
        },
        url: "https://www.infobae.com/",
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
    },
    {
        id: 17,
        name: "Weather.com",
        description: "The Weather Channel and weather.com provide a national and local weather forecast for cities, as well as weather radar, report and hurricane coverage.",
        icon: {
            url: "https://s.w-x.co/twc_36x36.png",
            maskable: false
        },
        url: "https://weather.com/",
    },
    {
        id: 18,
        name: "OpenRent",
        description: "",
        icon: {
            url: "https://staticcdn.openrent.co.uk/images/logos/meta/android-chrome-192x192.png",
            maskable: false
        },
        url: "https://www.openrent.co.uk/?utm_source=web_app_manifest",
    },
    {
        id: 19,
        name: "Airbnb",
        description: "Vacation Rentals, Homes, Experiences & Places - Airbnb",
        icon: {
            url: "https://a0.muscache.com/airbnb/static/icons/apple-touch-icon-76x76-3b313d93b1b5823293524b9764352ac9.png",
            maskable: true
        },
        url: "https://www.airbnb.fr/?utm_source=homescreen",
    },
    {
        id: 20,
        name: "CARIGAMI",
        description: "",
        icon: {
            url: "https://www.carigami.fr/android-chrome-512x512-maskable.png",
            maskable: true,
        },
        url: "https://www.carigami.fr/?utm_source=homescreen",
    },
    {
        id: 21,
        name: "Shine",
        description: "",
        icon: {
            url: "https://staticcand.shine.com/c/s1/images/ic_launcher_144.png",
            maskable: false
        },
        url: "https://www.shine.com/?utm_source=m_web_app",
    },
    {
        id: 22,
        name: "Instagram",
        description: "Instagram is a simple way to capture and share the world's moments.",
        icon: {
            url: "https:\/\/static.cdninstagram.com\/rsrc.php\/v4\/yM\/r\/7xwrlYffOBb.png",
            maskable: false
        },
        url: "https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1",
    },
    {
        id: 23,
        name: "Treebo",
        description: "India's Top Rated Budget Hotel Chain",
        icon: {
            url: "https://images.treebohotels.com/images/Icons/pwa-icon.png?h=192&w=192",
            maskable: false
        },
        url: "https://www.treebo.com/",
    },
    {
        id: 24,
        name: "MakeMyTrip",
        description: "MakeMyTrip Commons PWA",
        icon: {
            url: "https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/mmt_launcher_512x512.png",
            maskable: true
        },
        url: "https://www.makemytrip.com/?homescreen=PWA_Bookmark",
    },
    {
        id: 25,
        name: "Soundslice",
        description: "Turn sheet music into an interactive learning environment. Perfect for practicing, teaching, sharing, transcribing and more.",
        icon: {
            url: "https://mediacdn.soundslice.com/images/pwa/logox192-5bbd413a74df3ea319f0742c3bcfdbe4.png",
            maskable: true
        },
        url: "https://www.soundslice.com/login/",
    },
    {
        id: 26,
        name: "1Tuner",
        description: "1 web app to listen to online radio",
        icon: {
            url: "https://1tuner.com/icon-192x192-maskable.png",
            maskable: true
        },
        url: "https://1tuner.com/",
    },
    {
        id: 27,
        name: "9GAG",
        description: "",
        icon: {
            url: "https://9gag.com/s/fab0aa49/7145df03fa8167d146c4ac609ac0cff0c3e8380c/static/dist/es8/mobile/img/launcher-icon-96.png",
            maskable: false
        },
        url: "https://9gag.com/",
    },
    {
        id: 28,
        name: "LOTTO.de",
        description: "",
        icon: {
            url: "https://www.lotto.de/assets/favicon/android-chrome-192x192.png",
            maskable: false
        },
        url: "https://www.lotto.de/",
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
    },
    {
        id: 32,
        name: "Flipboard",
        description: "Discover top news & lifestyle",
        icon: {
            url: "https://s.flipboard.com/assets/webu/images/meta/flipboard-192.png",
            maskable: true
        },
        url: "https://flipboard.com/",
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
    },
    {
        id: 38,
        name: "Paper Planes",
        description: "",
        icon: {
            url: "https://paperplanes.world/assets/meta/icon-32.png",
            maskable: false,
        },
        url: "https://paperplanes.world/",
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
    },
    {
        id: 40,
        name: "2048",
        description: "",
        icon: {
            url: "https://2048-opera-pwa.surge.sh/meta/2048-rounded-96.png",
            maskable: false,
        },
        url: "https://2048-opera-pwa.surge.sh/",
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
    },
    {
        id: 43,
        name: "Snapdrop",
        description: "",
        icon: {
            url: "https://snapdrop.net/images/favicon-96x96.png",
            maskable: true,
        },
        url: "https://snapdrop.net/",
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
        url: "https://anonynote.org/",
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
    },
    {
        id: 72,
        name: "Booksie",
        description: "An open catalog of free picture storybooks for children instantly available for reading.",
        icon: {
            url: "https://www.booksie.org/assets/windows/44.png",
            maskable: false,
        },
        url: "https://www.booksie.org/",
    },
    {
        id: 73,
        name: "BRUTALIST HN",
        description: "",
        url: "https://brutalisthackernews.com/",
        icon: {
            url: "https://brutalisthackernews.com/assets/imgs/logo.png",
            maskable: false,
        },
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
    },
    {
        id: 77,
        name: "Chitchatter",
        description: "This is a communication tool that is free, open source, and designed for simplicity and security. All communication between you and your online peers is encrypted. There is no trace of your conversation once you leave.",
        icon: {
            url: "https://chitchatter.im/favicon.ico",
            maskable: false
        },
        url: "https://chitchatter.im/",
    },
    {
        id: 78,
        name: "regex101",
        url: "https://regex101.com/",
        description: "regex101: build, test, and debug regex",
        icon: {
            url: "https://regex101.com/static/assets/maskable-icon-512.png",
            maskable: true
        },
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
    },
    {
        id: 80,
        name: "#closerintime",
        description: "",
        url: "https://closerinti.me",
        icon:
        {
            url: "https://closerinti.me/icons/icon-48x48.png?v=eb3fe0ea1340eea8645cd25e5616d3ff",
            maskable: false
        },
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
    },
    {
        id: 82,
        name: "ComputerBase",
        icon:
        {
            url: "https://www.computerbase.de/img/icon-maskable.png",
            maskable: true,
        },
        url: "https://www.computerbase.de/",
        description: "Unabhängiges Tech-Magazin. News und Tests zu Smartphones, Tablets, PC-Hardware, Software und IT. Große technikaffine Community hilft im Forum.",
    },
    {
        id: 83,
        name: "Crazy Dices",
        description: "Simple Dices to play simple games",
        icon: {
            url: "https://crazydice.netlify.app/images/logo128.png",
            maskable: false,
        },
        url: "https://crazydice.netlify.app/",
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
    },
    {
        id: 86,
        description: "Life counter app for 2 - 4 players. Supports game profiles, count up/down.",
        url: "https://nenadalm.github.io/life-counter/index.html",
        name: "Life counter",
        icon: {
            url: "https://nenadalm.github.io/life-counter/img/icon_192.png?v=674cd2d1dc276ad519989ce15065a91a373dff99",
            maskable: true,
        },
    },
    {
        id: 87,
        url: "https://claude.ai/",
        name: "Claude",
        description: "",
        icon: {
            url: "https://claude.ai/images/icon-512x512.png",
            maskable: false,
        },
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
    },
    {
        id: 89,
        name: "LeChat",
        description: "Le Chat from Mistral AI",
        url: "https://chat.mistral.ai",
        icon:
        {
            url: "https://chat.mistral.ai/favicons/pwa-icon-192x192.png",
            maskable: false,
        },
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
    },
    {
        id: 93,
        description: "DeviantArt is where art and community thrive. Explore over 350 million pieces of art while connecting to fellow artists and art enthusiasts.",

        icon:
        {
            url: "https://st.deviantart.net/eclipse/icons/pwa/launchericon-72-72.png?2",
            maskable: false,
        },
        name: "DeviantArt",
        url: "https://www.deviantart.com",
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
    },
    {
        id: 99,
        name: "TikTok",
        description: "TikTok PWA",
        url: "https://www.tiktok.com/",
        icon: {
            url: "https://sf16-sg.tiktokcdn.com/obj/eden-sg/uvkuhyieh7lpqpbj/pwa/128x128-1.png",
            maskable: false,
        },
    },
    {
        id: 100,
        name: "Truth Social",
        description: "Truth Social is America's \"Big Tent\" social media platform that encourages an open, free, and honest global conversation without discriminating on the basis of political ideology.",
        icon: {
            url: "https://truthsocial.com/icons/icon-maskable-72x72.png",
            maskable: true,
        },
        url: "https://truthsocial.com/",
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
    },
    {
        id: 111,
        name: "Duolingo",
        description: "",
        icon: {
            url: "https://d35aaqx5ub95lt.cloudfront.net/images/pwa-icon-circle-192.png",
            maskable: true,
        },
        url: "https://www.duolingo.com/",
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
    },
    {
        id: 123,
        name: "Monzo",
        description: "",
        url: "https://monzo.com/",
        icon: {
            url: "https://monzo.com/images/icons/maskable-icon-x72.png",
            maskable: true,
        },
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
    },
    {
        id: 127,
        name: "MyFitnessPal",
        description: "",
        url: "https://www.myfitnesspal.com",
        icon:
        {
            url: "https://www.myfitnesspal.com/favicons/android-chrome-192x192.png",
            maskable: false,
        },
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
    },
    {
        id: 131,
        name: "Google Photos",
        description: "",
        url: "https://photos.google.com/",
        icon: {
            url: "https://www.gstatic.com/social/photosui/images/logo/2025/1x/photos_96dp.png",
            maskable: false
        },
    },
    {
        id: 132,
        name: "MDN",
        description: "",
        icon: {
            url: "https://developer.mozilla.org/favicon-192x192.png",
            maskable: false,
        },
        "url": "https://developer.mozilla.org",
    },
    {
        id: 133,
        name: "reve.com",
        description: "",
        url: "https://app.reve.com/",
        icon: {
            url: "https://app.reve.com/icon-mask.png",
            maskable: true
        },
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
    },
    {
        id: 136,
        name: "Ideogram",
        url: "https://ideogram.a/",
        description: "",
        icon: {
            url: "https://ideogram.ai/favicon.png",
            maskable: false,
        },
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
    },
    {
        id: 139,
        name: "Web Manifest",
        description: "Web application that helps you create Web App Manifests",
        url: "https://manifest.web.nairi.cloud",
        icon: {
            url: "https://manifest.web.nairi.cloud/icon.png",
            maskable: false,
        }
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
    },
    {
        id: 146,
        name: "DeviantArt",
        description: "DeviantArt is where art and community thrive. Explore over 350 million pieces of art while connecting to fellow artists and art enthusiasts.",
        icon: {
            url: "https://st.deviantart.net/eclipse/icons/pwa/launchericon-72-72.png?2",
            maskable: false,
        },
        url: "https://www.deviantart.com",
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
    },
    {
        id: 148,
        name: "Seamless Web",
        description: "Online food ordering from your local favorites for takeout or delivery. Support your local restaurants with Seamless and find coupons, reviews, and more!",
        icon: {
            url: "https://assets.seamless.com/assets/img/brand/seamless/android/raster/smart_banner/android-chrome-72x72.png",
            maskable: false,
        },
        url: "https://www.seamless.com/",
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
    },
    {
        id: 166,
        name: "OpenClaw",
        description: "Your AI agent. Live in seconds.",
        url: "https://openclaw.rocks",
        icon: {
            url: "https://openclaw.rocks/icon-192.png",
            maskable: false,
        },
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
    },
    {
        id: 175,
        name: "Messages",
        description: "",
        url: "https://messages.google.com",
        icon: {
            url: "https://ssl.gstatic.com/android-messages-web/images/2022.3/2x/messages_2022_round_96dp.png",
            maskable: false,
        },
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
    },
    {
        id: 177,
        name: "MTGStocks",
        description: "",
        icon: {
            url: "https://www.mtgstocks.com/assets/images/favicons/android-chrome-192x192.png",
            maskable: false,
        },
        url: "https://www.mtgstocks.com",
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
    },
    {
        id: 181,
        url: "https://pasteepad.com/",
        name: "PasteePad",
        description: "Online Text Editor to paste and keep text, great for notes, todos and links.",
        icon: {
            url: "https://pasteepad.com/icon-192x192.png",
            maskable: true,
        },
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
    },
    {
        id: 187,
        name: "SimilarWorlds",
        url: "https://similarworlds.com/",
        description: "Discuss Experiences, Share Stories, Ask Questions, Find Answers, Explore Interests, Make Friends, Express your true Self - The New Experience Project is Here!",

        icon: {
            url: "https://images.similarworlds.com/Similar-Worlds-Logo-Symbol-1024-Mask.png",
            maskable: true,
        },
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
    },
    {
        id: 194,
        name: "Zadig&Voltaire",
        description: "",
        url: "https://zadig-et-voltaire.com",
        icon: {
            url: "https://zadig-et-voltaire.com/assets/android-icon-72x72.png",
            maskable: false,
        },
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
    },
    {
        id: 199,
        name: "Bubble Pairs",
        description: "A good old memory game with new and unique elements that make play experience remarkable.",
        url: "https://bubblepairs.apps.in.rs/",
        icon: {
            url: "https://bubblepairs.apps.in.rs/game-icon-big.png",
            maskable: false,
        },
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
    },
    {
        id: 201,
        name: "Code Insiders",
        description: "",
        url: "https://insiders.vscode.dev/",
        icon: {
            url: "https://insiders.vscode.dev/static/insider/code-192-maskable.png",
            maskable: true,
        },
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
    },
    {
        id: 216,
        name: "LekeeLekee",
        description: "Connect, share, and discover content with a vibrant community.",
        url: "https://www.lekeelekee.com/",
        icon:
        {
            url: "https://www.lekeelekee.com/android-chrome-192x192-maskable.png",
            maskable: true
        },
    },
    {
        id: 217,
        name: "The Conversation",
        description: "",
        url: "https://theconversation.com",
        icon:
        {
            url: "https://images.theconversation.com/files/581997/original/9275d5c0-7dd5-4ddf-b50b-98d537e016f4.png",
            maskable: false,
        }
    },
    {
        id: 218,
        name: "AP News",
        description: "",
        url: "https://apnews.com",
        icon: {
            url: "https://assets.apnews.com/77/8e/bddbc9f3405984501b8a10dfc921/android-app-icon-144.png",
            maskable: false,
        }
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
    },
    {
        id: 221,
        name: "FetchAsset",
        description: "AI-powered client asset onboarding portals",
        url: "https://www.fetchasset.com",
        icon: {
            url: "https://www.fetchasset.com/apple-touch-icon.png",
            maskable: true
        }
    }
];

export default apps;
