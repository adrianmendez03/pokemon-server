require('dotenv').config()
const express = require('express')
const app = express()
const logger = require('morgan')

app.use(logger('dev'))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const pokemonController = require('./controllers/pokemon')
app.use('/pokemon', pokemonController)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`)
})