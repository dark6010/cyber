var ListaModel = require('../models/ListaModel.js');

/**
 * ListaController.js
 *
 * @description :: Server-side logic for managing Listas.
 */
module.exports = {

    /**
     * ListaController.list()
     */
    list: function (req, res) {
        ListaModel.find(function (err, Listas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Lista.',
                    error: err
                });
            }
            return res.json(Listas);
        });
    },

    /**
     * ListaController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        ListaModel.findOne({_id: id}, function (err, Lista) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Lista.',
                    error: err
                });
            }
            if (!Lista) {
                return res.status(404).json({
                    message: 'No such Lista'
                });
            }
            return res.json(Lista);
        });
    },

    /**
     * ListaController.create()
     */
    create: function (req, res) {
        var Lista = new ListaModel({			nombre : req.body.nombre,			items : req.body.items,			usedBy : req.body.usedBy
        });

        Lista.save(function (err, Lista) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Lista',
                    error: err
                });
            }
            return res.status(201).json(Lista);
        });
    },

    /**
     * ListaController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        ListaModel.findOne({_id: id}, function (err, Lista) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Lista',
                    error: err
                });
            }
            if (!Lista) {
                return res.status(404).json({
                    message: 'No such Lista'
                });
            }

            Lista.nombre = req.body.nombre ? req.body.nombre : Lista.nombre;			Lista.items = req.body.items ? req.body.items : Lista.items;			Lista.usedBy = req.body.usedBy ? req.body.usedBy : Lista.usedBy;			
            Lista.save(function (err, Lista) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Lista.',
                        error: err
                    });
                }

                return res.json(Lista);
            });
        });
    },

    /**
     * ListaController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        ListaModel.findByIdAndRemove(id, function (err, Lista) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Lista.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
