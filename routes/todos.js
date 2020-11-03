const { json } = require('express')
const express = require('express')
const Todo = require('../models/Todo')
const router = express.Router()

// Getting data
router.get('/', (req, res) => {
    Todo.find({}).then(result => {
        res.json(result)
    })
        .catch(e => {
            res.json({ message: e })
        })

    console.log(req.body)

})

// Adding todo
router.post('/', (req, res) => {
    const body = req.body
    console.log(body)
    if (body.todo === undefined) {
        console.log('body is empty')
        return res.status(400).json({
            error: 'Content missing'
        })
    }
    const post = new Todo({
        todo: body.todo

    })

    post.save()
        .then(data => {
            res.json(data.toJSON())
        })
        .catch(e => {
            res.json({ message: e })
        })


})

// Deleting todo 
router.delete('/:id', (req, res) => {
    Todo.findByIdAndRemove(req.params.id)
        .then(result => {
            console.log(result)
            res.status(204).end()
        })
        .catch(e => res.json({ message: e }))
})

//Update todos status
router.patch('/:id', (req, res) => {
    Todo.updateOne({ _id: req.params.id }, { $set: { done: req.body.done } })
        .then(result => {
            console.log(result)
            res.json(result)
        })
        .catch(e => res.json({ message: e }))

})

module.exports = router