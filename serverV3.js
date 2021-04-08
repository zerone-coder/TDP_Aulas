const express = require('express')

const server = express()

server.get('/', (req, res) => {
	res.send( '<html> ' +
			  '<head><title> Links </title></head>' +
			  '<body>' +
			  '<h1>Vertical Menu</h1>' +
			  '<a href="https://www.cruzeirodosul.edu.br/"><h1>Link 1</h1></a><br>' +
			  '<a href="https://siaa.cruzeirodosul.edu.br/novo-siaa/login.jsf">' +
			  '<h1>Link 2</h1>' +
			  '</a><br>' +
			  '<a href="https://novoportal.cruzeirodosul.edu.br">Link 3</a><br>' +
			  '<a href="https://www.uol.com.br/">Link 4</a><br>' +
			  '</body>' +
			  '</html>');
})

server.listen(3001, 'localhost', () => {
	console.log('Servidor funciona em: http://localhost:3001')
	console.log('Pra desligar o servidor: CTRL + C')
	console.log('')
})