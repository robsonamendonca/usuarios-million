// require('dotenv').config({
//     path: '.env'
// })
const mongoose = require('mongoose');

const uri = process.env.MONGO_URL ? process.env.MONGO_URL : 'mongodb://localhost:27017/millionUsuarios';

mongoose.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
mongoose.Promise = global.Promise;

module.exports = mongoose; 