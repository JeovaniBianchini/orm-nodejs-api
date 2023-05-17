const express = require('express');                               //importando a biblioteca express, consiste em recursos para web, subir o servidor.
const bodyParser = require('body-parser');                        // importando a biblioteca body-parser, converte dados que vem no corpo de uma requisição para outros formatos, no caso, para o nosso uso 'Json'.

const app = express();                                            //armazenando na variavel 'app' a biblioteca do express.

app.use(bodyParser.json());                                       //método 'use()' do express para usar a biblioteca do body-parser com o método 'json()', assim convertendo para o formato json. 

const port = 3000;                                                //usando a portal '3000' para o servidor local.

/*Método get() para enviar uma requisição para o endereço /teste
recendo argumento req e res; a resposta vai status code 200 e uma mensagem */

app.get('/teste', (req, res) => res
    .status(200)
    .send({mensagem: 'boas-vindas à Api'
}))

/*metodo listen() é um escutador para monitorar o servido e assim podemos verificar se está ok com a porta definida */

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app