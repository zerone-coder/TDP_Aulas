var http = require('http')
var fs = require('fs')

var contents = fs.readFileSync('exemplo1.html');

const server = http.createServer((req, res) => {

	res.end(contents)

})

server.listen(3001, 'localhost', () => {
	console.log('Servidor funciona em: http://localhost:3001')
	console.log('Pra desligar o servidor: CTRL + C')
	console.log('')
})