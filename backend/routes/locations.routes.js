const express = require('express');
const router = express.Router();
const locationsController = require('../controllers/locationsController');

router.get('/', locationsController.getLocations);
router.get('/:id', locationsController.getLocationById);
router.post('/', locationsController.createLocation);
router.put('/:id', locationsController.updateLocation);
router.delete('/:id', locationsController.deleteLocation);

module.exports = router;
