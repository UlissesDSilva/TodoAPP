//Esse arquivo vai mapear as rotas dentro do servidor
const express = require('express')

//Recebendo um parametro no node
module.exports = function(server){

    //API Routes
    const router = express.Router()
    server.use('/api', router)//sempre que a rota começar com '/api/ esse router será chamado

    //Todo Routes
    const todoService = require('../api/todo/todoService')
    //'.register' vai usar todos os metodo passado no array em todoService 'Todo.methods(['get', 'post', 'put', 'delete'])'
    todoService.register(router, '/todos')
}