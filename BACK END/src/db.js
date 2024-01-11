const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/rick_and_morty', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const Schema = mongoose.Schema;
const newSchema = new Schema({
  name: String,
  status: String,
  species: String,
  gender: String,
  origin: Object,
  image: String
});


const characters = mongoose.model('characters', newSchema);

module.exports = { characters };

