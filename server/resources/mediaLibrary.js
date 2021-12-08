const express = require('express')
const router = express.Router()
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
    allowed_mime_type: [],
    accept: [],
    display_name: "Cover",
    description: "lorem lorem",
    max_number: 1,
    fallback: "String"
  },
  images: {
    single_file: false,
    max_size: 100,
    allowed_mime_type: ['text.jpg'],
    display_name: "Images",
    max_number: 6,
    fallback: "dummy image source",
  },
  files: {
    single_file: false,
    max_size: 100,
    allowed_mime_type: ['text.pdf'],
    display_name: "Files",
    max_number: 6,
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
    console.log(response);
  } catch (error) {
    res.status(500).send(error);
  }
})

router.post('/:app_label/:model/:object_id/', function (req, res) {
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
      await Model.create({
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
