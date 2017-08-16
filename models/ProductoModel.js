var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ProductoSchema = new Schema({
	'nombre' : String,
	'precio' : Number,
	'descripcion' : String,
    'usedBy' : [{
	 	type: Schema.Types.ObjectId,
	 	ref: 'Lista'
	}]
});

module.exports = mongoose.model('Producto', ProductoSchema);
