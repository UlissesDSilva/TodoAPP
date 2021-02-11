//Mapeamanto dos objetos em JS para os documentos que no mongo
//Abrir conexão com o Mongo
const mongoose = require('mongoose')
mongoose.Promise = global.Promise //apenas para retirar um mensagem de adivertência

module.exports = mongoose.connect('mongodb://localhost/todos')