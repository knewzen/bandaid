const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: String,
  password: String,
  bandcampUsername: String,
  bandcampID: String,
  email: String,
  favoriteArtists: String,
  listenList: [String],
  musicBox: [String]
})

const User = mongoose.model('User', userSchema)

module.exports = User