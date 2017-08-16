var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
    username: String,
    password: String,
    name: String,
    role: String,
    etapa: String,
    registro: {
      type: Schema.Types.ObjectId,
      ref: 'Registro'
    },
    prefList:{
      type: Schema.Types.ObjectId,
      ref: 'Lista'
    },
    marcadores:[]
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
