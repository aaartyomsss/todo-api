const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        minlength: 3,
        required: true 
    },
    name: String,
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        minlength: 6,
        required: true
    },
    todos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Todo'
        }
    ]
})

userSchema.set('toJSON', {
    transform: (document, returnedObj) => {
        returnedObj.id = returnedObj._id.toString()
        delete returnedObj._id
        delete returnedObj.__v
        delete returnedObj.passwordHash
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User