var ProductoModel = require('../models/ProductoModel.js');

/**
 * ProductoController.js
 *
 * @description :: Server-side logic for managing Productos.
 */
module.exports = {

    /**
     * ProductoController.list()
     */
    list: function (req, res) {
        ProductoModel.find(function (err, Productos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Producto.',
                    error: err
                });
            }
            return res.json(Productos);
        });
    },

    /**
     * ProductoController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        ProductoModel.findOne({_id: id}, function (err, Producto) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Producto.',
                    error: err
                });
            }
            if (!Producto) {
                return res.status(404).json({
                    message: 'No such Producto'
                });
            }
            return res.json(Producto);
        });
    },

    /**
     * ProductoController.create()
     */
    create: function (req, res) {
        var Producto = new ProductoModel({			nombre : req.body.nombre,			precio : req.body.precio,			descripcion : req.body.descripcion
        });

        Producto.save(function (err, Producto) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Producto',
                    error: err
                });
            }
            return res.status(201).json(Producto);
        });
    },

    /**
     * ProductoController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        ProductoModel.findOne({_id: id}, function (err, Producto) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Producto',
                    error: err
                });
            }
            if (!Producto) {
                return res.status(404).json({
                    message: 'No such Producto'
                });
            }

            Producto.nombre = req.body.nombre ? req.body.nombre : Producto.nombre;			Producto.precio = req.body.precio ? req.body.precio : Producto.precio;			Producto.descripcion = req.body.descripcion ? req.body.descripcion : Producto.descripcion;			
            Producto.save(function (err, Producto) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Producto.',
                        error: err
                    });
                }

                return res.json(Producto);
            });
        });
    },

    /**
     * ProductoController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        ProductoModel.findByIdAndRemove(id, function (err, Producto) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Producto.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
