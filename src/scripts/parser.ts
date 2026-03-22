import { object, string, array } from "zod";
import sources from "../sources.json" with { type: "json" };
import { writeFile } from "fs/promises";
import { join } from "path";
import type App from "../interfaces/App";
import type Category from "../types/Category";

const categories = [
    "beauty",
    "books",
    "books & reference",
    "business",
    "cars",
    "dating",
    "design",
    "developer",
    "developer tools",
    "development",
    "education",
    "entertainment",
    "events",
    "fashion",
    "finance",
    "fitness",
    "food",
    "fundraising",
    "games",
    "government",
    "graphics",
    "graphics & design",
    "health",
    "health & fitness",
    "kids",
    "lifestyle",
    "magazines",
    "medical",
    "multimedia",
    "multimedia design",
    "music",
    "navigation",
    "network",
    "networking",
    "news",
    "parenting",
    "personalization",
    "pets",
    "photo",
    "photo & video",
    "politics",
    "productivity",
    "reference",
    "security",
    "shopping",
    "social",
    "social networking",
    "sports",
    "transportation",
    "travel",
    "utilities",
    "video",
    "weather",
];

const fetchAsChrome = (url: string | URL): Promise<Response> =>
    fetch(url, {
        headers: {
            // 1. The most important header
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',

            // 2. Standard acceptance headers
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.9',
            'Accept-Encoding': 'gzip, deflate, br',

            // 3. Connection settings
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',

            // 4. Modern Chrome Client Hints (Sec-Ch-Ua)
            // These tell the server specifically which browser version is being used
            'Sec-Ch-Ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'Sec-Ch-Ua-Mobile': '?0',
            'Sec-Ch-Ua-Platform': '"Windows"',

            // 5. Security headers
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-User': '?1',
        },
        // Optional: Follow redirects automatically
        redirect: 'follow',
    });

const Manifest = object({
    name: string(),
    "short_name": string().optional(),
    description: string().optional(),
    icons: array(object({
        src: string(),
        sizes: string().optional(),
        type: string().optional(),
        purpose: string().optional(),
    })),
    categories: array(string())
        .optional()
        .transform((values) => values?.filter(value => categories.includes(value))),
});

let index = 1;
let code = [
    'import App from "../interfaces/App";',
    '',
    'const apps: Array<App> = [',
];

for (const source of sources) {
    const logPrefix = `[${index} / ${sources.length}][${source.url}]`;
    let response: Response | null = null;
    let body = "";

    // Checks if url is unique
    if (sources.filter(record => record.url === source.url).length !== 1) {
        console.error(`${logPrefix} duplicate URL`);

        index++;

        continue;
    }

    // Checks if id is unique
    if (sources.filter(record => record.id === source.id).length !== 1) {
        console.error(`${logPrefix} duplicate id ${source.id}`);

        index++;

        continue;
    }

    if (!source.manifestUrl) {
        console.error(`${logPrefix} No manifest URL specified`);

        index++;

        continue;
    }

    let manifestResponse: Response | null = null;

    try {
        manifestResponse = await fetchAsChrome(source.manifestUrl);
    } catch (error) {
        console.error(`${logPrefix} could not fetch manifest at ${source.manifestUrl}`);
        console.error(error);

        index++;

        continue;
    }

    let manifestData: Record<string, any> | null = null;

    try {
        manifestData = await manifestResponse.json();
    } catch (error) {
        console.error(`${logPrefix} error while parsing ${source.manifestUrl} JSON content`);
        console.error(error);

        index++;

        continue;
    }

    let parsedManifest = null;

    try {
        parsedManifest = Manifest.parse(manifestData);
    } catch (error) {
        console.error(`${logPrefix} error while validating ${source.manifestUrl} JSON content`);
        console.error(error);

        index++;

        continue;
    }

    // console.log(`name: ${parsedManifest.name}`);
    // console.log(`short_name: ${parsedManifest.short_name}`);
    // console.log(`description: ${parsedManifest.description}`);
    // console.log("icons");

    let icon = parsedManifest.icons
        .filter(icon =>
            !(icon.purpose || "").split(" ").includes("monochrome")
            && parseInt((icon.sizes || "1920x1920").split("x").at(0) || "1920") > 72
        )
        .sort((left, right) => {
            let leftRank = 0;
            let rightRank = 0;

            // PNG first, then JPG, then anything else
            if (left.type === "image/png") {
                leftRank += 2;
            }

            if (["image/jpg", "image/jpeg"].includes(left.type || "")) {
                leftRank += 1;
            }

            if (right.type === "image/jpeg") {
                rightRank += 2;
            }

            if (["image/jpg", "image/jpeg"].includes(right.type || "")) {
                rightRank += 1;
            }

            // Maskable in priority
            if (left.purpose?.split(" ").includes("maskable")) {
                leftRank += 1;
            }

            if (right.purpose?.split(" ").includes("maskable")) {
                rightRank += 1;
            }

            // Searching the smallest first (starting from 72x72 according to previous filter)
            leftRank += 1 / parseInt((left.sizes || "0x0").split("x").at(0) || "0");
            rightRank += 1 / parseInt((right.sizes || "0x0").split("x").at(0) || "0");

            if (leftRank > rightRank) {
                return -1;
            }

            if (leftRank < rightRank) {
                return 1;
            }

            return 0;
        })
        .at(0);

    const app: App = {
        id: source.id,
        name: parsedManifest.short_name || parsedManifest.name,
        description: parsedManifest.description || "",
        url: source.url,
        icon: {
            url: new URL(icon?.src || "", source.url).toString(),
            maskable: icon?.purpose?.split(" ").includes("maskable") || false,
        },
        categories: (parsedManifest.categories ?? []) as Array<Category>,
    };

    code.push(`${JSON.stringify(app, null, 4)},`);

    index++;
}

code.push(...[
    '];',
    '',
    'export default apps;',
    '',
]);

await writeFile(join(import.meta.dirname, "../data/apps.ts"), code.join("\n"));
