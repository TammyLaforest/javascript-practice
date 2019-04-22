let http = require('http')

let port = 3000

let requestHandler = (request, response) => {
	console.log(`New request to ${request.url}`)
	response.end(`Hello World!`)
}

let server = http.createServer(requestHandler)

server.listen(port, () => {
	console.log(`Listening on port ${port}`)
})

app.use(express.statuc('public'))
