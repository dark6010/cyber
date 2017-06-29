var express = require('express');
var router = express.Router();
var ListaController = require('../controllers/ListaController.js');

/*
 * GET
 */
router.get('/', ListaController.list);

/*
 * GET
 */
router.get('/:id', ListaController.show);

/*
 * POST
 */
router.post('/', ListaController.create);

/*
 * PUT
 */
router.put('/:id', ListaController.update);

/*
 * DELETE
 */
router.delete('/:id', ListaController.remove);

module.exports = router;
