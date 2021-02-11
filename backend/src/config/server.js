const express = require('express')
const bodyParser = require('body-parser')
const server = express()
const allowCors = require('./cors')

const port = 3003

//'{extended: true}' faz urlencoded suportar mais tipos de dados do que o padrão
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, () => console.log(`BACKEND is running on port ${port}.`))

module.exports = server