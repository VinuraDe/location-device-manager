const express = require('express');
const router = express.Router();
const devicesController = require('../controllers/devicesController');

router.post('/:locationId/devices', devicesController.addDeviceToLocation);
router.delete('/:locationId/devices/:deviceId', devicesController.removeDeviceFromLocation);
router.get('/:deviceId', devicesController.getDeviceById);
router.get('/location/:locationId', devicesController.getAllDevicesForLocation);
router.get('/devices', devicesController.getAllDevices);

module.exports = router;
