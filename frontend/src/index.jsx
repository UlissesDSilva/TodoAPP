import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

// Middleware
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import App from './main/app'
import reducers from './main/reducers'

//conexão com plugin Redux-DevTools
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// "applyMiddleware(promise)" retorna um método, que recebe o "createStore"
// "applyMiddleware(promise)(createStore)" retorna outro método que recebe "reducers, devTools"
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
)