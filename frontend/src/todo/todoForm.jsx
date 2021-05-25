import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription, search, addTODO, clear } from './todoActions'

import Grid from '../template/grid'
import Button from '../template/iconButton'

class TodoForm extends Component{
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    //Método de ciclo de vida
    componentWillMount(){
        this.props.search()
    }

    keyHandler(evt){
        const { addTODO, search, description, clear } = this.props

        if(evt.key === 'Enter'){
            evt.shiftKey ? search() : addTODO(description)
        }else if(evt.key === 'Escape'){
            clear()
        }
    }

    render(){
        const { addTODO, search, description } = this.props
        return(
            <div role='form' className="todoForm">
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control' placeholder='Adiconar uma tarefa' 
                            value={this.props.description} onChange={this.props.changeDescription}
                            onKeyUp={this.keyHandler}/>
                </Grid>

                <Grid cols="12 3 2">
                    <Button style='primary' icon='plus' onClick={() => addTODO(description)}/>
                    <Button style='info' icon='search' onClick={search}/>
                    <Button style='default' icon='close' onClick={this.props.clear}/>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description})

//Faz a ligação do dispatch com a action criada, para ser enviadas para os reducers
const mapDispatchToProps = dispatch => bindActionCreators({changeDescription, clear, search, addTODO}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)