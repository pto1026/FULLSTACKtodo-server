const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // author: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Author',
    //     required: true
    // },
    status: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Todo', TodoSchema)