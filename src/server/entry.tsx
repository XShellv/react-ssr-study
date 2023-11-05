import React from "react";
import Koa from 'koa'
import routes from '../App';
import ReactDOMServer from 'react-dom/server';
import { getScript, getLinks } from "./util/getCssAndScript";
import { StaticRouterProvider, createStaticHandler, createStaticRouter } from "react-router-dom/server";

export function createFetchRequest(ctx: Koa.Context): Request {
    let origin = `${ctx.protocol}://${ctx.get("host")}`;
    // Note: This had to take originalUrl into account for presumably vite's proxying
    let url = new URL(ctx.originalUrl || ctx.url, origin);

    let controller = new AbortController();
    ctx.req.on("close", () => controller.abort());

    let headers = new Headers();

    for (let [key, values] of Object.entries(ctx.headers)) {
        if (values) {
            if (Array.isArray(values)) {
                for (let value of values) {
                    headers.append(key, value);
                }
            } else {
                headers.set(key, values);
            }
        }
    }

    let init: RequestInit = {
        method: ctx.method,
        headers,
        signal: controller.signal,
    };

    if (ctx.method !== "GET" && ctx.method !== "HEAD") {
        init.body = ctx.request.body as BodyInit;
    }

    return new Request(url.href, init);
}


export default async (ctx: Koa.Context, next: Koa.Next) => {
    let { query, dataRoutes } = createStaticHandler(routes);
    let remixRequest = createFetchRequest(ctx);
    let context = await query(remixRequest);

    if (context instanceof Response) {
        throw context;
    }

    let router = createStaticRouter(dataRoutes, context);

    const appHtml = ReactDOMServer.renderToString(
        <React.StrictMode>
            <StaticRouterProvider
                router={router}
                context={context}
                nonce="the-nonce"
            />
        </React.StrictMode>
    );


    // if (context.url) {
    //     ctx.status = 301
    //     ctx.redirect(context.url);
    //     return;
    // }
    // if (context.statusCode) {
    //     ctx.status = context.statusCode;
    // }

    ctx.body = `
        <!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>ssr</title>
                ${getLinks()}
            </head>
            <body>
                <div id='root'>${appHtml}</div>
            </body>
            ${getScript()}
            </html>`
}
