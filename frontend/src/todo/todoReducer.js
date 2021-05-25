const stateInit = {
    description: '',
    list: []
}

export default (state = stateInit, action) => {
    switch (action.type) {
        case 'DESC_CHANGED':
            return { ...state, description: action.payload }
        case 'SEARCH':
            return { ...state, list: action.payload }
        case 'CLEAR':
            return { ...state, description: '' }
        default:
            return state
    }
}