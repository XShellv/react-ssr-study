import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import routes from '../Routes'
import getStore from '../store'

const App = () => {
    return (
        <Provider store={getStore()}>
            <Router>
                <div>
                    {routes.map((route) => (
                        <Route {...route} />
                    ))}
                </div>
            </Router>
        </Provider>
    )
}

ReactDom.hydrate(<App />, document.getElementById('root'))