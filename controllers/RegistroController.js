var RegistroModel = require('../models/RegistroModel.js');

/**
 * RegistroController.js
 *
 * @description :: Server-side logic for managing Registros.
 */
module.exports = {

    /**
     * RegistroController.list()
     */
    list: function (req, res) {
        RegistroModel.find(function (err, Registros) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Registro.',
                    error: err
                });
            }
            return res.json(Registros);
        });
    },

    /**
     * RegistroController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        RegistroModel.findOne({_id: id}, function (err, Registro) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Registro.',
                    error: err
                });
            }
            if (!Registro) {
                return res.status(404).json({
                    message: 'No such Registro'
                });
            }
            return res.json(Registro);
        });
    },

    /**
     * RegistroController.create()
     */
    create: function (req, res) {
        var Registro = new RegistroModel({
        });

        Registro.save(function (err, Registro) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Registro',
                    error: err
                });
            }
            return res.status(201).json(Registro);
        });
    },

    /**
     * RegistroController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        RegistroModel.findOne({_id: id}, function (err, Registro) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Registro',
                    error: err
                });
            }
            if (!Registro) {
                return res.status(404).json({
                    message: 'No such Registro'
                });
            }

            Registro.fechaInicio = req.body.fechaInicio ? req.body.fechaInicio : Registro.fechaInicio;
            Registro.save(function (err, Registro) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Registro.',
                        error: err
                    });
                }

                return res.json(Registro);
            });
        });
    },

    /**
     * RegistroController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        RegistroModel.findByIdAndRemove(id, function (err, Registro) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Registro.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};