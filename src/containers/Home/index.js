import React from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div>hello {this.props.name} </div>
                {this.props.list.map((item) => {
                    return (
                        <div key={item.id}>{item.content}</div>
                    )
                })}
                <button onClick={() => { alert("alert") }}>点击</button>
            </div>
        )
    }
    componentDidMount() {
        this.props.getHomeList()
    }
}

Home.loadData = (store) => {
    // 这个函数负责在服务器端渲染之前把数据加载好
    return store.dispatch(getHomeList())
}


const mapStateToProps = (state) => {
    return {
        list: state.home.newsList,
        name: state.home.name
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getHomeList() {
            dispatch(getHomeList())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)