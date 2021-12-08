const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MediaSchema = new Schema({
  id: Number,
  collection_name: String,
  content_type: Number,
  object_id: Number,
  order: Number,
  name: String,
  file: String,
  file_name: String,
  mime_type: String,
  size: String,
  caption: String,
  uuid: String,
  size: Number,

})


module.exports = mongoose.model('Media', MediaSchema)




// const MediaSchema = new Schema({
//   media: [
//     {
//       id: Number,
//       collection_name: String,
//       type: String,
//       content_object: {},
//       name: String,
//       file: String,
//       file_name: String,
//       mime_type: String,
//       size: String,
//       caption: String,
//       actions:{
//         create_link: String,
//         edit_link: String,
//         delete_link: String
//       },

//     }
//   ],
// })

// const CourseSchema = new Schema({
  
//   rules: {
//     single_file: Boolean,
//     max_size: Number,
//     allowed_mime_type: [],
//     accept: [],
//     display_name: String,
//     description: String,
//     comment: String,
//     max_number: Number,
//     fallback: String
//   }
// })
