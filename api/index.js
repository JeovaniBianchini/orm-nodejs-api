const express = require('express');                               //importando a biblioteca express, consiste em recursos para web, subir o servidor.
const routes = require('./routes')

const app = express();                                            //armazenando na variavel 'app' a biblioteca do express.

const port = 3000;                                                //usando a portal '3000' para o servidor local.

routes(app)

/*metodo listen() é um escutador para monitorar o servido e assim podemos verificar se está ok com a porta definida */

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app