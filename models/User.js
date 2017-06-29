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
    preflist:{
      type: Schema.Types.ObjectId,
      ref: 'Lista'
    }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
