import React from 'react'
import Grid from '../template/grid'
import Button from '../template/iconButton'

export default (props) =>{
    const keyHandler = (evt) =>{
        if(evt.key === 'Enter'){
            evt.shiftKey ? props.handleSearch() : props.handleAdd()
        }else if(evt.key === 'Escape'){
            props.handleClear()
        }
    }
    return(
        <div role='form' className="todoForm">
            <Grid cols='12 9 10'>
                <input id='description' className='form-control' placeholder='Adiconar uma tarefa' 
                        value={props.description} onChange={props.handleChange}
                        onKeyUp={keyHandler}/>
            </Grid>

            <Grid cols="12 3 2">
                <Button style='primary' icon='plus' onClick={props.handleAdd}/>
                <Button style='info' icon='search' onClick={props.handleSearch}/>
                <Button style='default' icon='close' onClick={props.handleClear}/>
            </Grid>
        </div>
    )
}