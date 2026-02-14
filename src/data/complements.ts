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
    }
];

export default complements;
