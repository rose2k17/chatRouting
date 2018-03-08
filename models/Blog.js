var mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({
  //isbn: String,
  titulo: String,
  tema: String,
  descripcion: String,
  //published_year: String,
  //publisher: String,
  fecha: Date,
});

module.exports = mongoose.model('Blog', BlogSchema);