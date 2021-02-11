//loader carrega os principais arquivos de configuração
const server = require('./config/server')
require('./config/dataBase')
require('./config/routes')(server)//server esta sendo passado como parametro