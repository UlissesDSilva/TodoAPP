import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component{
    constructor(props){
        super(props)

        this.state = {
            description: '',
            list: []
        }    

        this.refresh()//iniciar a lista carregada

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        //Amarra o this para, independentimente de quem o chamá-lo, sempre aponte para o 'Todo', que é o componente atual
    }

    refresh(description = ''){
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({
                ...this.state,
                description,
                list: resp.data
            }))
    }

    handleAdd(){
       const description = this.state.description
       axios.post(URL, {description})
            .then(resp => this.refresh()) 
    }

    handleChange(evt){
        this.setState({
            ...this.state,
            description: evt.target.value
        })
    }

    handleRemove(el){
        axios.delete(`${URL}/${el._id}`)
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(el){
        axios.put(`${URL}/${el._id}`, {...el, done: true})
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(el){
        axios.put(`${URL}/${el._id}`, {...el, done: false})
            .then(resp => this.refresh(this.state.description))
    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    handleClear(){
        this.refresh()
    }


    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <TodoForm 
                    handleAdd={this.handleAdd} 
                    description={this.state.description} 
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                />
                <TodoList 
                    list={this.state.list} 
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                />
            </div>
        )
    }
}