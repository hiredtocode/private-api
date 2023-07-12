const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

// cors for localhost testing
app.use(cors())

// Making a GET request to the URL with Headers including the private api key with env
app.get('/news', (req, res) => {
	const options = {
		method: 'GET',
		url: 'https://something.com',
		headers: {
			'api-host': 'something.something.com',
			'api-key': process.env.REACT_APP_API_KEY,
		},
	}

	// Making a request with all the options and receiving the data as a response
	axios
		.request(options)
		.then(response => {
			res.json(response.data)
		})
		.catch(error => {
			console.error(error)
		})
})

// Getting a confirmation that the backend is running
app.listen(8000, () => console.log(`Server is running on port ${PORT}`))
