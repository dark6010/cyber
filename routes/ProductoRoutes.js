var express = require('express');
var router = express.Router();
var ProductoController = require('../controllers/ProductoController.js');

/*
 * GET
 */
router.get('/', ProductoController.list);

/*
 * GET
 */
router.get('/:id', ProductoController.show);

/*
 * POST
 */
router.post('/', ProductoController.create);

/*
 * PUT
 */
router.put('/:id', ProductoController.update);

/*
 * DELETE
 */
router.delete('/:id', ProductoController.remove);

module.exports = router;
