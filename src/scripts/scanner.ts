import { parse } from "node-html-parser";
import { format } from "date-fns";
import sleep from "sleep-promise";
import { writeFileSync } from "fs";

type WebsiteType =
    | "hacker_news"
    | "betalist";

interface Website {
    domain: string;
    type: WebsiteType;
}

interface Urls {
    app: string;
    manifest: string;
}

interface Source {
    id: number;
    urls: Urls
}

const blackListedDomains = [
    "github.com",
    "gist.github.com",
    "www.npmjs.com",
    "chromewebstore.google.com",
];

const MAX_LAST_PAGE = 10;

const log = (message: string): void => {
    const date = format(new Date(), "yyyy-MM-dd HH:mm:ss.SSS");

    console.log(`[${date}] ${message}`);
};

const throttledFetch = async (input: string | URL | Request, init: RequestInit | undefined = undefined): Promise<Response> => {
    await sleep(500);

    log(`Fetching ${input}...`);

    return fetch(input, {
        ...init,
        headers: {
            ...init?.headers ?? {},
            "User-Agent": "KorruBot/0.1.0 (+https://korru.app)",
        },
    });
};

const getLinks = async (website: Website, currentLevel: number | null = null): Promise<Array<string>> => {
    let response: Response | null = null;
    let content: string | null = null;
    let foundLinks: Array<string> = [];
    const currentWalkLevel = currentLevel ?? 1;

    if (currentWalkLevel > MAX_LAST_PAGE) {
        return [];
    }

    log(`Getting links for ${website.domain}...`);

    try {
        response = await throttledFetch(website.domain);
    } catch (error) {
        log(`Error when fetching ${website.domain}`);

        return [];
    }

    if (!response.ok) {
        log(`Got status ${response.status} when fetching ${website.domain}`);

        return [];
    }

    try {
        content = await response.text();
    } catch (error) {
        log(`Unable to parse JSON for ${website.domain}`);

        return [];
    }

    if (content === null) {
        log(`No JSON content found for ${website.domain}`);

        return [];
    }

    const document = parse(content);

    if (website.type === "hacker_news") {
        // Find all links in the current page
        const linkElements = document.querySelectorAll("tr.submission a[rel=nofollow]");

        for (const linkElement of linkElements) {
            const link = linkElement.getAttribute("href");

            if (link === undefined || link.trim().length === 0) {
                log(`Link href has no value for ${website.domain}`);

                continue;
            }

            const url = new URL(link);

            if (blackListedDomains.includes(url.hostname)) {
                continue;
            }

            foundLinks.push(link);
        }

        // Finds all links in the next page
        const nextPageLinkElement = document.querySelector('a.morelink');

        if (nextPageLinkElement !== null) {
            const nextPageLink = nextPageLinkElement.getAttribute("href");

            if (nextPageLink !== undefined) {
                const websiteUrl = new URL(website.domain);
                const slashedNextPageLink = nextPageLink.startsWith("/")
                    ? nextPageLink
                    : `/${nextPageLink}`;

                const nextPageLinks = await getLinks(
                    {
                        domain: `${websiteUrl.protocol}//${websiteUrl.hostname}${slashedNextPageLink}`,
                        type: website.type
                    },
                    currentWalkLevel + 1
                );

                foundLinks.push(...nextPageLinks);
            }
        }
    } else if (website.type === "betalist") {
        // Find all links in the current page
        const linkElements = document.querySelectorAll("div.startup-row a");

        for (const linkElement of linkElements) {
            const link = linkElement.getAttribute("href");

            if (link === undefined || link.trim().length === 0) {
                log(`Link href has no value for ${website.domain}`);

                continue;
            }

            const websiteUrl = new URL(website.domain);
            const appPage = `${websiteUrl.protocol}//${websiteUrl.hostname}${link}`;
            let appPageResponse: Response | null = null;

            try {
                appPageResponse = await throttledFetch(appPage);
            } catch (error) {
                log(`Error when fetching ${appPage}`);

                continue;
            }

            if (appPageResponse === null) {
                log(`No response when fetching ${appPage}`);

                continue;
            }

            if (!appPageResponse.ok) {
                log(`Got status ${appPageResponse.status} when fetching ${appPage}`);

                continue;
            }

            const appPageContent = await appPageResponse.text();
            const appPageDocument = parse(appPageContent);
            const appPageLinkElement = appPageDocument.querySelector("div.fixed.bottom-0.inset-x-0 a");

            if (appPageLinkElement === null) {
                continue;
            }

            const appPageLink = appPageLinkElement.getAttribute("href");

            if (appPageLink === undefined) {
                continue;
            }

            const appPageLinkUrl = `${websiteUrl.protocol}//${websiteUrl.hostname}${appPageLink}`;
            let websiteResponse: Response | null = null;

            try {
                websiteResponse = await throttledFetch(appPageLinkUrl);
            } catch (error) {
                log(`Error when fetching ${appPageLinkUrl} underlying URL`);

                continue;
            }

            if (websiteResponse === null) {
                log(`Error when fetching ${appPageLinkUrl} underlying URL`);

                continue;
            }

            if (!websiteResponse.ok) {
                log(`Got status ${websiteResponse.status} when fetch ${appPageLinkUrl} underlying URL`);

                continue;
            }

            foundLinks.push(websiteResponse.url);
        }

        const websiteUrl = new URL(website.domain);
        const nextPage = currentWalkLevel + 1;
        const nextPageLinks = await getLinks(
            {
                domain: `${websiteUrl.protocol}//${websiteUrl.hostname}?page=${nextPage}`,
                type: "betalist"
            },
            nextPage
        );

        foundLinks.push(...nextPageLinks);
    }

    return foundLinks;
};

const getManifestUrl = async (link: string): Promise<string | null> => {
    let response: Response | null = null;
    let content: string | null = null;

    try {
        response = await throttledFetch(link);
    } catch (error) {
        log(`Error when fetching ${link} content`);

        return null;
    }

    if (!response.ok) {
        log(`Got status ${response.status} when fetching ${link}`);

        return null;
    }

    try {
        content = await response.text();
    } catch (error) {
        log(`Unable to parse JSON for ${link}`);

        return null;
    }

    if (content === null) {
        log(`No JSON content found for ${link}`);

        return null;
    }

    const document = parse(content);
    const manifest = document.querySelector('link[rel=manifest]');

    if (manifest === null) {
        log(`No manifest link found for ${link}`);

        return null;
    }

    const manifestUrl = manifest.getAttribute("href");

    if (manifestUrl === undefined || manifestUrl.trim().length === 0) {
        log(`Manifest element href has no URL for ${link}`);

        return null;
    }

    return manifestUrl;
};

const websites: Array<Website> = [
    {
        domain: "https://news.ycombinator.com/shownew",
        type: "hacker_news",
    },
    {
        domain: "https://betalist.com",
        type: "betalist",
    },
];

// Have an empty list of sources
let sources: Array<Source> = [];
let sourceId = 1;

//   For each websites
for (const website of websites) {
    log(`1. Fetching links for ${website.domain}...`);

    const links = await getLinks(website);

    if (links.length === 0) {
        continue;
    }

    log(`2. Fetching manifest URLs for all links of ${website.domain}...`);

    for (const link of links) {
        const manifestUrl = await getManifestUrl(link);

        if (manifestUrl === null) {
            continue;
        }

        const linkUrl = new URL(link);

        sources.push({
            id: sourceId,
            urls: {
                app: link,
                manifest: `${linkUrl.protocol}//${linkUrl.hostname}${manifestUrl}`,
            }
        });

        sourceId++;
    }
}

writeFileSync("sources-found.json", JSON.stringify(sources, undefined, 4));

export { };
