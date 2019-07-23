import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router-dom'
import { matchRoutes } from "react-router-config";
import { Provider } from 'react-redux'
import routes from '../Routes'
import getStore from '../store'



export const render = (req, res) => {

    const store = getStore()
    // 如果在这里，我能够拿到数据并填充到store之中
    var matchedRoutes = matchRoutes(routes, req.path)
    const promises = [];
    matchedRoutes.forEach(item => {
        // loadData异步请求！！！！
        if (item.route.loadData) {
            promises.push(item.route.loadData(store))
        }
    })

    Promise.all(promises).then(() => {
        const content = renderToString((
            <Provider store={store}>
                <StaticRouter location={req.path} context={{}}>
                    <div>
                        {routes.map((route) => (
                            <Route  {...route} />
                        ))}
                    </div>
                </StaticRouter>
            </Provider>
        ))
        res.send(`
        <html>
            <head>
                <title>ssr</title>
            </head>
            <body>
                <div id="root">${content}</div>
            </body>
            <script src="/index.js"></script>
        </html>
        `)

    })




}