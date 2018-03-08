var mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({
  //isbn: String,
  titulo: String,
  tema: String,
  descripcion: String,
  imagen: String,
  //published_year: String,
  //publisher: String,
  fecha: String,
});

module.exports = mongoose.model('Blog', BlogSchema);