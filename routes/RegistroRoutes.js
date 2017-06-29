var express = require('express');
var router = express.Router();
var RegistroController = require('../controllers/RegistroController.js');

/*
 * GET
 */
router.get('/', RegistroController.list);

/*
 * GET
 */
router.get('/:id', RegistroController.show);

/*
 * POST
 */
router.post('/', RegistroController.create);

/*
 * PUT
 */
router.put('/:id', RegistroController.update);

/*
 * DELETE
 */
router.delete('/:id', RegistroController.remove);

module.exports = router;
