const defaultState = {
    name: 'world',
    newsList: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'change_home_list':
            return { ...state, newsList : action.list }

        default:
            return state
    }
}