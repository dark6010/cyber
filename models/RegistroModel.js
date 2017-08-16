var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var RegistroSchema = new Schema({
	'fechaInicio' : Date,
	'lista' : {},
	'usuario' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	},
	'cajaIni' : Number,
	'valIniProductos' : Number,
	'valAddProductos' : Number,
    'costoAddproductos': Number,
    'marcadores': [],
	'cajaFin' : Number,
	'cajaTeo' : Number,
	'fechaFin' : Date,
	'observaciones' : String
});

module.exports = mongoose.model('Registro', RegistroSchema);
