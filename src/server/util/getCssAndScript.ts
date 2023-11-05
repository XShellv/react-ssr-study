import fs from "fs";

export function getLinks() {
    const result = fs
        .readdirSync("./public/css")
        .filter(file => file.endsWith(".css"))
        .map(file => `<link rel="stylesheet" href="./css/${file}"/>`);
    return result.join("\n");
}

export function getScript() {
    const result = fs
        .readdirSync("./public/js")
        .filter(file => file.endsWith(".js"))
        .map(file => `<script src="/js/${file}"></script>`);
    return result.join("\n");
}
