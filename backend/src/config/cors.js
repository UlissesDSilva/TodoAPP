//Possibilitar requisições de origens diferentes
module.exports = function(req, res, next){
    //Adicionando cabeçalhos na que vai ser enviada pro browser, assim permitindo acessar o serviço solicitado
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()//para continuar o fluxo da aplicação
}