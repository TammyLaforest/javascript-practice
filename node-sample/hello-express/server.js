let express = require('express')
let app = express()
let port = 3000

app.get('/', (request, response) => {
	response.send(`Hello, World!`)
})

app.get('/test', (request, response) => {
	response.send(`Hello there`)
})

app.listen(port, () => {
	console.log(`Express app listening on port ${port}`)
})
