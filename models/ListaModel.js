var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ListaSchema = new Schema({
	'nombre' : String,
	'items' : [{
	 	type: Schema.Types.ObjectId,
	 	ref: 'Producto'
	}],
	
});

module.exports = mongoose.model('Lista', ListaSchema);
