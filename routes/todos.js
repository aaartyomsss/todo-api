const { json } = require('express')
const express = require('express')
const Todo = require('../models/Todo')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/User')
require('express-async-errors')

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
router.post('/', async (req, res) => {
    const decodedToken = jwt.verify(req.token, process.env.SECRET)
    
    if (!req.token || !decodedToken.id) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }

    const user = await User.findById(decodedToken.id)
    console.log(user)
    const body = req.body
    if (body.todo === undefined) {
        return res.status(400).json({
            error: 'Content missing'
        })
    }
    const newTodo = new Todo({
        todo: body.todo,
        user: user._id
    })

    const savedTodo = await newTodo.save()

    //Adding todo to user's scheme
    user.todos = user.todos.concat(savedTodo._id)
    await user.save()

    res.json(savedTodo)


})

// Deleting todo 
router.delete('/:id', async (req, res) => {
    const decodedToken = jwt.verify(req.token, process.env.SECRET)

    if (!req.token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }

    const user = await User.findById(decodedToken.id)
    const blogToDelete = await Todo.findById(req.params.id)

    if (blogToDelete.user.toString() === user.id.toString()) {
        const removed = await Todo.remove(blogToDelete)
        user.todos = user.todos.splice(-1)
    }


    res.status(204).end()
})

//Update todos status
router.patch('/:id', (req, res) => {
    Todo.updateOne({ _id: req.params.id }, { $set: { important: req.body.important } })
        .then(result => {
            console.log(result)
            res.json(result)
        })
        .catch(e => res.json({ message: e }))

})

//Getting a single post
router.get('/:id', (req, res) => {
    Todo.findById(req.params.id)
        .then(result => {
            res.json(result)
        })
        .catch(e => {
            res.json({ message: e })
        })
})

module.exports = router