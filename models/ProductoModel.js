var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ProductoSchema = new Schema({

module.exports = mongoose.model('Producto', ProductoSchema);