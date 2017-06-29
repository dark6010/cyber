var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var RegistroSchema = new Schema({
	'fechaInicio' : Date,
	'listaProd' : [{
	 	type: Schema.Types.ObjectId,
	 	ref: 'Lista'
	}],
	'listaCantIni' : Array,
	'usuario' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	},
	'cajaIni' : Number,
	'totalValini' : Number,
	'addListaCantIni' : Array,
	'addListaCost' : Array,
	'listaCantFin' : Array,
	'server1' : Number,
	'server2' : Number,
	'cajaFin' : Number,
	'cajaTeo' : Number,
	'fechaFin' : Date,
	'observaciones' : String
});

module.exports = mongoose.model('Registro', RegistroSchema);
