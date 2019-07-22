import React from 'react'
import Header from '../../components/Header'

const Home = () => {
    return (
        <div>
            <Header />
            <div>hello world</div>
            <button onClick={() => { alert("alert") }}>点击</button>
        </div>
    )
}

export default Home