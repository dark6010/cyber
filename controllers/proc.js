var ListaModel = require('../models/ListaModel.js');
var ProductoModel = require('../models/ProductoModel.js');
var RegistroModel = require('../models/RegistroModel.js');
var mongoose = require('mongoose');
module.exports = {
  regProducto: function(req, res){
    res.render('regProducto')
  },
  postregProducto: function(req, res){
    var Producto = new ProductoModel({
			nombre : req.body.nombre,
			precio : req.body.precio,
			descripcion : req.body.descripcion
        });

        Producto.save(function (err, Producto) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Producto',
                    error: err
                });
            }
          res.redirect('/');
        });
  },
  regLista: function(req, res){
    ProductoModel.find(function (err, Productos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Producto.',
                    error: err
                });
            }
            var p={}
            p.productos=Productos
            res.render ('regLista', p);
        });
  },
  postregLista: function(req, res){
    if(req.body.p){
      for(var i=0; i<req.body.p.length; i++){
///        var id = mongoose.Types.ObjectId();
      }
    }else{
      res.render(error, {message: "la lsita esta vacia o hubo algun error"})
    }
    
  },
  p1: function(req, res){
    
  },
}