// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.farms.index);
router.get('/:id', ctrl.farms.show);
router.post('/', ctrl.farms.create);
router.put('/:id', ctrl.farms.update);
router.delete('/:id', ctrl.farms.destroy);

// exports
module.exports = router;
