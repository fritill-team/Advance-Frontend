const express = require('express')
const path = require('path')
const router = express.Router()

const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// create express app
const app = express();

// upload file path
const FILE_PATH = 'uploads';

// configure multer
const upload = multer({
    dest: `src/assets/${FILE_PATH}/`
});

// enable CORS
app.use(cors());

// add other middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));


const {
  mapItems,
  validator,
  mapItem
} = require('../helpers')

const Model = require('../models/Media')

const validationRules = {
  "name": "required",
}

const collections = {
  cover: {
    single_file: true,
    max_size: 100,
    allowed_mime_type: ['.jpg'],
    accept: [],
    display_name: "Cover",
    description: "lorem lorem",
    max_number: 1,
    fallback: "String"
  },
  images: {
    single_file: false,
    max_size: 100,
    allowed_mime_type: ['.jpg'],
    display_name: "Images",
    description: "lorem lorem",
    max_number: 6,
    fallback: "dummy image source",
  },
  files: {
    single_file: false,
    max_size: 100,
    allowed_mime_type: ['.pdf'],
    display_name: "Files",
    description: "lorem lorem",
    max_number: 6,
    fallback: "dummy image source"
  }
}
// console.log(collections.cover);

router.get('/:app_label/:model/:object_id/', async function (req, res) {
  let response = [];

  for (collection in collections)
    if (collections.hasOwnProperty(collection))
      response.push({
        items: await Model.find({collection_name: collection}),
        rules: {...collections[collection], collection_name: collection}
      })


  // console.log(list);
  // let rule =  
  // console.log(rules); 
  // list = mapItems(list, 'mediaLibrary')
  try {
    res.send(response);
    // console.log(response);
  } catch (error) {
    res.status(500).send(error);
  }
})

router.post('/files', upload.array('photos', 8), async (req, res) => {
  try {
      const photos = req.files;

      // check if photos are available
      if (!photos) {
          res.status(400).send({
              status: false,
              data: 'No photo is selected.'
          });
      } else {
          let data = [];

          // iterate over all photos
          photos.map(p => data.push({
              name: p.originalname,
              mimetype: p.mimetype,
              size: p.size
          }));

          // send response
          res.send({
              status: true,
              message: 'Photos are uploaded.',
              data: data
          });
      }

  } catch (err) {
      res.status(500).send(err);
  }
});


// router.post('/:app_label/:model/:object_id/', async function (req, res) {
//   // console.log('this is body: '+req.body.name);
//   // try {
//   //   const file = req.files.mFile
//   //   console.log(file);
//   //   const savePath = path.join(__dirname, 'public', 'uploads', file.name)
//   // } catch (error) {
//   //   console.log(error);
//   //   res.send('error upload file')
//   // }

//   await Model.create(
//     req.body
//     // parent
//   , function (err, obj) {
//     console.log('this is body: '+obj);
//     if (err) {
//       res.status(400).send(err);
//     } else {
//       res.sendStatus(200);
//     }
//   })


//   // validator(req.body, validationRules, {}, async (err, status) => {
//   //   if (!status) {
//   //     res.status(422).send({
//   //       ...err.errors
//   //     });
//   //   } else {
//   //     const {
//   //       name,
//   //       parent
//   //     } = req.body
      
//   //   }
//   // })
// })

router.get('/:app_label/:model/:object_id/', async function (req, res) {
  let record = await Model.findOne({
    nick: 'noname'
  });
  record = mapItem(record, 'media')
  try {
    res.send(record);
  } catch (error) {
    res.status(500).send(error);
  }
})

router.post('/:app_label/:model/:object_id/', async function (req, res) {
  validator(req.body, validationRules, {}, async (err, status) => {
    if (!status) {
      res.status(422).send({
        ...err.errors
      });
    } else {
      const {
        name,
        parent
      } = req.body
      await Model.findByIdAndUpdate(req.params.id, {
        name,
        parent
      }, function (err, obj) {
        if (err) {
          res.status(400).send(err);
        } else {
          res.sendStatus(200);
        }
      })
    }
  })
})

router.delete('/:app_label/:model/:object_id/', async function (req, res) {
  await Model.findByIdAndDelete(req.params.id)
  try {
    res.sendStatus(204);
  } catch (e) {
    res.status(400).send(e);
  }
})


module.exports = router
