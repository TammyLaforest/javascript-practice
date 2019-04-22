// Set up a basic Node.js project that:

// imports Express
// listens on port 3000 and logs a message to the console upon starting
// accepts requests at the GET / endpoint, and responds with the message "Get request received at '/'"

let express = require('express')
let bodyParser = require('body-parser')
let app = express()

app.use(bodyParser.urlencoded({ extended: true }))
let quotes = [
	{
		id: 1,
		quote: 'The best is yet to come',
		author: 'Unknown',
		year: 2000
	},
	{
		id: 2,
		quote: 'This is a quote',
		author: 'First Last',
		year: 1930
	},
	{
		id: 3,
		quote: 'This is another quote',
		author: 'First2 Last2',
		year: 1910
	}
]

let port = 3000

app.get('/quotes', (req, res) => {
	console.log('Get a list of all quotes as JSON')
	if (req.query.year) {
		res.send(`Return a list of quotes from the year ${req.query.year}`)
	} else {
		res.json(quotes)
	}
})

app.get('/quotes/:id', function(req, res) {
	console.log(`Return quote with the ID: ${req.params.id}`)
	res.send(`Return quote with the ID: ${req.params.id}`)
})

app.post('/quotes', (req, res) => {
	console.log(`Insert a new quote: ${req.body.quote}`)
	res.json(req.body)
})

app.listen(port, () => {
	console.log(`Express app listening on port ${port}`)
})

app.get('/', (request, response) => {
	response.send(`Get requests received at "/"`)
})
