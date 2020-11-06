const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')
const app = express();
const cors = require('cors')


// Import Routes
const todosRoute = require('./routes/todos')

//Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//ROUTES
app.use('/todos', todosRoute)

//Connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

//Listening to the server
const PORT = 3001
app.listen(PORT)