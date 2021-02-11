import React from 'react'
//'hashHistory será usado para o historico das navegações
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

export default (props) => {

    return(
        <Router history={hashHistory}>
            <Route path='/todos' component={Todo}/>
            <Route path='/about' component={About}/>
            <Redirect from='*' to='/todos'/>
        </Router>
    )
}