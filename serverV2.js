const express = require('express')

const server = express()

server.get('/', (req, res) => {
	res.send('<h1>Home <br> do Site</h1>');
})

server.listen(3001, 'localhost', () => {
	console.log('Servidor funciona em: http://localhost:3001')
	console.log('Pra desligar o servidor: CTRL + C')
	console.log('')
})