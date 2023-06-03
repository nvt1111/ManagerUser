const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    }

}, {timestamps: true})

// biến nó thành model
const User = mongoose.model('User', userSchema)

module.exports = User