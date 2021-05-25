import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
    type: 'DESC_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({type: 'SEARCH', payload: resp.data}))
    }

    //'redux-promise' ao retornar uma promise na action, esse middleware espera a rpomise ser resolvida para poder disparar os reducers
}

export const addTODO = description => {
    //'redux-thunk' não retorna mais uma action, mas sim um médoto que recebe o dispatch como parâmentro
    return dispatch => {
        axios.post(URL, {description})
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const doneTODO = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => dispatch(search()))
    }
}

export const pendingTODO = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch(search()))
    }
}

export const deleteTODO = todo => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return[{ type: 'CLEAR' }, search()]
}