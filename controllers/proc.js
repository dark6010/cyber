var ListaModel = require('../models/ListaModel.js');
var ProductoModel = require('../models/ProductoModel.js');
var RegistroModel = require('../models/RegistroModel.js');
var mongoose = require('mongoose');
var manager= "596452d4d83f650e64d62f56"
module.exports = {
  regProducto: function(req, res){
    if(req.user && req.user._id==manager){
        res.render('regProducto')
    }else{
        res.redirect('/')
    }
  },
  postregProducto: function(req, res){
    if(req.user && req.user._id==manager){
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
            console.log(Producto)
            res.render('regProducto', {producto: Producto})
          });
    }else{
      res.redirect('/')
    }
  },
  regLista: function(req, res){
    if(req.user && req.user._id==manager){
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
    }else{
      res.redirect('/')
    }
  },
  postregLista: function(req, res){
      if(req.user && req.user._id==manager){
          if(req.body.p){
              var Lista = new ListaModel({
                  nombre : req.body.nombre,
                  items: []
              });
              for(var i=0; i<req.body.p.length; i++){
                  Lista.items.push(mongoose.Types.ObjectId(req.body.p[i]))
              }
              Lista.save(function (err, li) {
                  if (err) {
                      return res.status(500).json({
                          message: 'Error when creating Lista',
                          error: err
                      });
                  }
                  ListaModel.findOne({_id: li._id}).populate('items').exec(function(err, p){
                    if (err)
                      console.log(err)
                    var elementos=[]
                    var precios=[]
                    var descripciones=[]
                    p.items.forEach(function(producto, index){
                      producto.usedBy.push(mongoose.Types.ObjectId(li._id))
                      producto.save()
                      elementos.push(producto.nombre)
                      precios.push(producto.precio)
                      descripciones.push(producto.descripcion)
                    })
                    res.render('regListapost', {nombre: p.nombre, elementos: elementos, precios: precios, descripciones:descripciones})
                  })
              });
          }else{
            res.render(error, {message: "la lista esta vacia o hubo algun error"})
          }
      }else{
        res.redirect('/')
      }
  },
  productos: function(req, res){
    if(req.user && req.user._id==manager){
        res.render('productos')
      }else{
        res.redirect('/')
      }
  },
  p1: function(req, res){
    if(req.user){
        
    }else{
        res.redirect('/')
    }
  },
  manager: function(req,res){
      if(req.user && req.user._id==manager){
        res.render('manager')
      }else{
        res.redirect('/')
      }
  }
}