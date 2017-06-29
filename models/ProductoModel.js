var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ProductoSchema = new Schema({	'nombre' : String,	'precio' : Number,	'descripcion' : String});

module.exports = mongoose.model('Producto', ProductoSchema);
