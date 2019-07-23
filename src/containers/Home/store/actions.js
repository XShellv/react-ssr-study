import axios from 'axios'

const changeList = (list) => (
    {
        type: 'change_home_list',
        list
    }
)

export const getHomeList = () => {
    return (dispatch) => {
        return axios.get('/api').then(res => {
            const list = res.data
            dispatch(changeList(list))
        })
    }
}