// Importar dependencia
const express = require('express');
const path = require('path'); //adiciona a BARRA do diretorio conforme necessidade ou SO

//iniciando o express
const server = express()
server
//utilizando os arquivos estaticos
.use(express.static('public')) //mostra onde estão os arquivos estaticos e cria as rotas
//Criar uma rota
.get('/', (request, response) => {
    return response.sendFile(path.join(__dirname, 'views', 'index.html'))
})

//ligar o servidor
server.listen(5500)