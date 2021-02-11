import React from 'react'
import Button from '../template/iconButton'
import todoForm from './todoForm'

export default (props) =>{
    
    const renderRows = () =>{
        const list = props.list || []
        return list.map((el) =>{
            return(
                <tr key={el._id}>
                    <td className={el.done ? "markedAsDone" : ''}>{el.description}</td>
                    <td>
                        <Button icon='check' style='success' onClick={() => props.handleMarkAsDone(el)} hide={el.done}/>
                        <Button icon='undo' style='warning' onClick={() => props.handleMarkAsPending(el)} hide={!el.done}/>
                        <Button icon='trash-o' style='danger' onClick={() => props.handleRemove(el)} hide={!el.done}/>
                    </td>
                </tr>
            )
        })
    }

    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}