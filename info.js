var UserSchema = new Schema({
    username: String, password: String, name: String, role: String, etapa: String,
    registro: {
			type: Schema.Types.ObjectId,
			ref: 'Registro'
		},
    inireg: Boolean,
    preflist: {
			type: Schema.Types.ObjectId,
			ref: 'Lista'
		}
});
var RegistroSchema = new Schema({
	'fechaInicio' : Date,
	'listaProd' : [{
	 	type: Schema.Types.ObjectId,
	 	ref: 'Lista'
	}],
	'listCantIni' : Array,
	'usuario' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	},
	'cajaIni' : Number,  'totalValIni' : Number,  'addListaCantIni' : Array,  'addListaCost' : Array,
	'listaCantFin' : Array,  'server1' : Number,
	'server2' : Number,  'cajaFin' : Number,
	'cajaRel' : Number,  'fechaFin' : Date,
	'observaciones' : String
});
var ProductoSchema = new Schema({
	'nombre' : String,  'precio' : Number,
	'descripcion' : String
});
var ListaSchema = new Schema({
	'nombre' : String,
	'items' : [{
	 	type: Schema.Types.ObjectId,
	 	ref: 'Producto'
	}],
	'usedBy': [{
	 	type: Schema.Types.ObjectId,
	 	ref: 'Registro'
	}]
});