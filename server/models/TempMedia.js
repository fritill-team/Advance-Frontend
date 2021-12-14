const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TempSchema = new Schema({
  id: Number,
  file_name: String,
  file_path: String
})

module.exports = mongoose.model('TempMedia', TempSchema)