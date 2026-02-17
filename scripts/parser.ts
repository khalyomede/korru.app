import { parse } from "node-html-parser";
import { object, string, array } from "zod";
import sources from "../sources.json" with { type: "json" };

const Manifest = object({
    name: string(),
    "short_name": string().optional(),
    description: string().optional(),
    icons: array(object({
        src: string(),
        sizes: string().optional(),
        type: string().optional(),
        purpose: string().optional(),
    }))
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

    try {
        response = await fetch(source.url);
    } catch (error) {
        console.error(`${logPrefix} could not fetch URL`);
        console.error(error);

        index++;

        continue;
    }

    if (!response.ok) {
        console.error(`${logPrefix} ${response.status} HTTP status received`);
        console.error(`${logPrefix} ${response.statusText}`);

        index++;

        continue;
    }

    try {
        body = await response.text();
    } catch (error) {
        console.error(`${logPrefix} could not parse body`);
        console.error(error);

        index++;

        continue;
    }

    const manifest = parse(body).querySelector('link[rel=manifest]');

    if (manifest === null) {
        console.error(`${logPrefix} no manifest file found`);

        index++;

        continue;
    }

    const href = manifest.getAttribute("href");

    if (href === undefined) {
        console.error(`${logPrefix} href not defined on meta manifest`);

        index++;

        continue;
    }

    const manifestUrl = new URL(href, source.url);
    let manifestResponse: Response | null = null;

    try {
        manifestResponse = await fetch(manifestUrl);
    } catch (error) {
        console.error(`${logPrefix} could not fetch manifest at ${manifestUrl}`);
        console.error(error);

        index++;

        continue;
    }

    let manifestData: Record<string, any> | null = null;

    try {
        manifestData = await manifestResponse.json();
    } catch (error) {
        console.error(`${logPrefix} error while parsing ${manifestUrl} JSON content`);
        console.error(error);

        index++;

        continue;
    }

    let parsedManifest = null;

    try {
        parsedManifest = Manifest.parse(manifestData);
    } catch (error) {
        console.error(`${logPrefix} error while validating ${manifestUrl} JSON content`);
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

    const maskableIcon = icon?.purpose?.split(" ").includes("maskable") ? "true" : "false";
    const name = (parsedManifest.short_name || parsedManifest.name).replace('"', '\\"');
    const description = (parsedManifest.description || "").replace('"', '\\"');
    const url = source.url.replace('"', '\\"');

    code.push(`
    {
        id: ${index},
        name: "${name}",
        description: "${description}",
        url: "${url}",
        icon: {
            url: "${source.url}",
            maskable: ${maskableIcon},
        },
        screenshots: []
    },
    `);
}

code.push(...[
    '];',
    '',
    'export default apps;',
    '',
]);

console.log(code.join("\n"));
