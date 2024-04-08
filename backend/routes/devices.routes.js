const express = require('express');
const router = express.Router();
const devicesController = require('../controllers/devicesController');

router.post('/:locationId/devices', devicesController.addDeviceToLocation);
router.delete('/:locationId/devices/:deviceId', devicesController.removeDeviceFromLocation);

module.exports = router;
