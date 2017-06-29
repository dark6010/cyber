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
        var Registro = new RegistroModel({			fechaInicio : req.body.fechaInicio,			listaProd : req.body.listaProd,			listaCantIni : req.body.listaCantIni,			usuario : req.body.usuario,			cajaIni : req.body.cajaIni,			totalValini : req.body.totalValini,			addListaCantIni : req.body.addListaCantIni,			addListaCost : req.body.addListaCost,			listaCantFin : req.body.listaCantFin,			server1 : req.body.server1,			server2 : req.body.server2,			cajaFin : req.body.cajaFin,			cajaTeo : req.body.cajaTeo,			fechaFin : req.body.fechaFin,			observaciones : req.body.observaciones
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

            Registro.fechaInicio = req.body.fechaInicio ? req.body.fechaInicio : Registro.fechaInicio;			Registro.listaProd = req.body.listaProd ? req.body.listaProd : Registro.listaProd;			Registro.listaCantIni = req.body.listaCantIni ? req.body.listaCantIni : Registro.listaCantIni;			Registro.usuario = req.body.usuario ? req.body.usuario : Registro.usuario;			Registro.cajaIni = req.body.cajaIni ? req.body.cajaIni : Registro.cajaIni;			Registro.totalValini = req.body.totalValini ? req.body.totalValini : Registro.totalValini;			Registro.addListaCantIni = req.body.addListaCantIni ? req.body.addListaCantIni : Registro.addListaCantIni;			Registro.addListaCost = req.body.addListaCost ? req.body.addListaCost : Registro.addListaCost;			Registro.listaCantFin = req.body.listaCantFin ? req.body.listaCantFin : Registro.listaCantFin;			Registro.server1 = req.body.server1 ? req.body.server1 : Registro.server1;			Registro.server2 = req.body.server2 ? req.body.server2 : Registro.server2;			Registro.cajaFin = req.body.cajaFin ? req.body.cajaFin : Registro.cajaFin;			Registro.cajaTeo = req.body.cajaTeo ? req.body.cajaTeo : Registro.cajaTeo;			Registro.fechaFin = req.body.fechaFin ? req.body.fechaFin : Registro.fechaFin;			Registro.observaciones = req.body.observaciones ? req.body.observaciones : Registro.observaciones;			
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
