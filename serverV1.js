const http = require('http')

const server = http.createServer((req, res) => {
	if(req.url =='/'){
		res.end('<h1>Home</h1>')
	}
	else if(req.url =='/news'){
		res.end('<h1>News</h1>')
	}	
	else{
		res.end('<h1>Sem resposta para essa URL!</h1>')
	}
})

server.listen(3001, 'localhost', () => {
	console.log('Servidor funciona em: http://localhost:3001')
	console.log('Pra desligar o servidor: CTRL + C')
	console.log('')
})