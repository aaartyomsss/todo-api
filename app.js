const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')
const app = express();
const cors = require('cors')
const middleware = require('./utils/middleware')


// Import Routes
const todosRoute = require('./routes/todos');
const userRouter = require('./routes/users');
const loginRouter = require('./routes/login');

//Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(middleware.tokenExtractor)

//ROUTES
app.use('/todos', todosRoute)
app.use('/login', loginRouter)
app.use('/users', userRouter)

//Connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

//Listening to the server
const PORT = 3001
app.listen(PORT)