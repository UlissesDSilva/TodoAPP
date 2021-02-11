//Esse arquivo mapear os objetos para o documento do mongo
const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    description: {type: String, required: true},
    done: {type: Boolean, required: true, default: false},
    createdAT: {type: Date, default: Date.now}
})

//1º parametro é o nome do modelo
//Retorna o modelo do schema que está no banco
module.exports = restful.model('Todo', todoSchema)