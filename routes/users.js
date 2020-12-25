const bcrypt = require('bcrypt')
const userRouter = require('express').Router()
const { response } = require('express')
const User = require('../models/User')

userRouter.get('/', async (request, response) => {
    const users = await User.find({}).populate('todos')
    response.json(users.map(user => user.toJSON()))
})

//Creating new user
userRouter.post('/', async (req, res) => {
    const body = req.body
    const user = await User.findOne({ username : body.username})
    const user2 = await User.findOne({ email: body.email })
    if (user) {
        return res.json(400).json({ message: 'User with following username exists'})
    } 
    if (user2) {
        return res.json(400).json({ message: 'User with following email exists'})
    }
    if (body.password.length < 6) {
        return res.json(400).json({ message: 'Password length is less that 6 symbols'})
    }

    const hashRounds = 10
    const passwordHash = await bcrypt.hash(body.password, hashRounds)

    const newUser = new User({
        username: body.username,
        email: body.email,
        name: body.name,
        passwordHash
    })

    const saved = await newUser.save()

    res.json(saved)
})

module.exports = userRouter