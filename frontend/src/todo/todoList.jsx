import React from 'react'
import { connect } from 'react-redux' //Função responsável por conectar componente react com os dados da store e com as actions
import { bindActionCreators } from 'redux'
import { doneTODO, pendingTODO, deleteTODO } from './todoActions'
import Button from '../template/iconButton'

const TodoList = (props) =>{
    
    const renderRows = () =>{
        const list = props.list || []
        return list.map((el) =>{
            return(
                <tr key={el._id}>
                    <td className={el.done ? "markedAsDone" : ''}>{el.description}</td>
                    <td>
                        <Button icon='check' style='success' onClick={() => props.doneTODO(el)} hide={el.done}/>
                        <Button icon='undo' style='warning' onClick={() => props.pendingTODO(el)} hide={!el.done}/>
                        <Button icon='trash-o' style='danger' onClick={() => props.deleteTODO(el)} hide={!el.done}/>
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

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({doneTODO, pendingTODO, deleteTODO}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)