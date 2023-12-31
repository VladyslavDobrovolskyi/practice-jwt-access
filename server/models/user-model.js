const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    unique: true,
    required: true,
  },
})

module.exports = model('User', UserSchema)
