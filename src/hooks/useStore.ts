import { createStore, unwrap } from "solid-js/store";
import Store from "../interfaces/Store";

const localData = window.localStorage.getItem("store");
const jsonLocalData = localData === null ? { search: "" } : JSON.parse(localData);
const data: Store = {
    search: jsonLocalData.search ?? "",
    apps: [
        {
            id: 1,
            icon: {
                url: "https://open.spotifycdn.com/cdn/images/icons/Spotify_MWP_512.50dd387d.png",
                maskable: false,
            },
            name: "Spotify",
            description: "Spotify Web",
            url: "https://open.spotify.com/?utm_source=pwa_install",
            rating: 5,
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
            rating: 5,
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
            rating: 5,
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
            rating: 5
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
            rating: 5
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
            rating: 5
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
            rating: 5
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
            rating: 5
        }
    ],
};

const useStore = () => {
    const [store, setStore] = createStore<Store>(data);

    const setLocalStore = <K extends keyof Store>(key: K, value: Store[K]) => {
        setStore(key, value);
        window.localStorage.setItem("store", JSON.stringify(unwrap(store)));
    };

    return [store, setLocalStore] as const; // `as const` helps with tuple typing
};

export default useStore;
