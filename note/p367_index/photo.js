const mongoose = require('mongoose')
const Schema = mongoose.Schema
const photoSchema = new Schema({
  albumId: Number,
  id: Number,
  title: String,
  url: String,
  thumbnailUrl: String
})
module.exports = mongoose.model('Photo', photoSchema)
