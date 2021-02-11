const Todo = require('./todo')

//Abilita os metodos na api rest
Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({
    new: true, //retorna o registro atual após a atualização
    runValidators: true //Por padrão o node-rest-full não valida as atualizações  
})

module.exports = Todo