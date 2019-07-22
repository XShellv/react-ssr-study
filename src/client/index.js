import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '../Routes'

const App = () => {
    return (
        <Router>
            {Routes}
        </Router>
    )
}

ReactDom.hydrate(<App />, document.getElementById('root'))