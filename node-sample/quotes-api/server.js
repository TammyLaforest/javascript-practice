// Set up a basic Node.js project that:

// imports Express
// listens on port 3000 and logs a message to the console upon starting
// accepts requests at the GET / endpoint, and responds with the message "Get request received at '/'"

let express = require('express')
let bodyParser = require('body-parser')
let sqlite3 = require('sqlite3')
let app = express()
let db = new sqlite3.Database('quotes.db')

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
		console.log('checking year')
		db.all(
			`SELECT * from Quotes WHERE year =${req.query.year}`,
			(err, rows) => {
				if (err) {
					res.send(err.message)
				} else {
					console.log(
						`Return a list of quotes from the year: ${
							req.query.year
						}`
					)
					res.json(rows)
				}
			}
		)
	} else {
		console.log('not checking for year')
		db.all('SELECT * FROM Quotes', (err, rows) => {
			if (err) {
				console.log(err)
				res.send(err.message)
			} else {
				console.log('We reached else')
				res.json(rows)
			}
		})
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
