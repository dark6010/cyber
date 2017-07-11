var express = require('express');
var router = express.Router();
var auth = require("../controllers/AuthController.js");
var proc= require("../controllers/proc.js")

// restrict index for logged in user only
router.get('/', auth.home);

// route to register page
router.get('/register', auth.register);

// route for register action
router.post('/register', auth.doRegister);

// route to login page
router.get('/login', auth.login);

// route for login action
router.post('/login', auth.doLogin);

// route for logout action
router.get('/logout', auth.logout);
router.get('/regProducto', proc.regProducto);
router.post('/regProducto', proc.postregProducto);
router.get('/regLista', proc.regLista);
router.post('/regLista', proc.postregLista);
router.get('/p1', proc.p1)


module.exports = router;
