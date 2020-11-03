const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema({
    todo: {
        type: String,
        required: true
    },
    description: String,
    dueTo: Date,
    done: {
        type: Boolean,
        default: false
    },
    important: {
        type: Boolean,
        default: false
    }
})


TodoSchema.set('toJSON', {
    transform: (document, returnedObj) => {
      returnedObj.id = returnedObj._id.toString()
      delete returnedObj._id
      delete returnedObj.__v
    }
  
  })

module.exports = mongoose.model('Todo', TodoSchema)