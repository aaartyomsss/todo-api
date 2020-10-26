const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')
const app = express();

//Middleware
app.use(express.json())

//ROUTES
app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/todos', (req, res) => {

})

//Connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

//Listening to the server
app.listen(3000)