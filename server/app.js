const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose')
const multer = require('multer')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().array());
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));

mongoose.connect("mongodb+srv://itqademtestuser:CYIVvZGF7rbv8imk@cluster0.0qtig.mongodb.net/itqadem?retryWrites=true&w=majority")
var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

/*
* Routes
*/
const categoryRoutes = require('./resources/categories')
const tagRoutes = require('./resources/tags')
const mediaRoutes = require('./resources/media_files')
app.use('/categories', categoryRoutes);
app.use('/tags', tagRoutes);
app.use('/media_files', mediaRoutes);


app.listen(3000, cors(), () => {
  console.log('listening on port 3000');
});
