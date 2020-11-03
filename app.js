const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')
const app = express();


// Import Routes
const todosRoute = require('./routes/todos')

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//ROUTES
app.use('/todos', todosRoute)

//Connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

//Listening to the server
app.listen(3000)