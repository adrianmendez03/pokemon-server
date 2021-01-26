const express = require('express')
const router = express.Router()

const data = require('../model/pokemon')

router.get('/', (req, res) => {
    res.json({
        status: 200, 
        data
    })
})

router.get('/:id', (req, res) => {
    const pokemon = data.filter(poke => poke.id == req.params.id)
    res.json({
        status: 200,
        pokemon: pokemon[0]
    })
})

router.delete('/:id', (req, res) => {
    const pokemon = data.filter(poke => poke.id == req.params.id)
    const index = data.indexOf(pokemon[0])
    const removed = data.splice(index, 1)
    res.json({
        status: 200,
        removed
    })
})

router.post('/', (req, res) => {
    data.push(req.body)
    res.json({
        status: 200,
        pokemon: req.body
    })
})

router.put('/:id', (req, res) => {
    const pokemon = data.filter(poke => poke.id == req.params.id)
    const index = data.indexOf(pokemon[0])
    data[index] = req.body
    res.json({
        status: 200,
        pokemon: data[index]
    })
})

module.exports = router