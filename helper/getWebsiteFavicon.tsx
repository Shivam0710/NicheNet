export function getFaviconFromLink(url: string) {
    let favicon = new URL(url).origin + "/favicon.ico"
    return favicon
}