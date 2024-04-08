const Device = require('../models/device');

exports.addDeviceToLocation = async (req, res) => {
  try {
    const locationId = req.params.locationId;
    const newDevice = new Device(req.body);
    await newDevice.save();
    
    // Update location with the new device
    await Location.findByIdAndUpdate(locationId, { $push: { devices: newDevice._id } });

    res.json(newDevice);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.removeDeviceFromLocation = async (req, res) => {
  try {
    const { locationId, deviceId } = req.params;

    // Remove device from location
    await Location.findByIdAndUpdate(locationId, { $pull: { devices: deviceId } });

    // Delete the device
    await Device.findByIdAndDelete(deviceId);

    res.json({ message: 'Device removed successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getDeviceById = async (req, res) => {
  try {
    const deviceId = req.params.deviceId;
    const device = await Device.findById(deviceId);
    
    if (!device) {
      return res.status(404).json({ message: 'Device not found' });
    }
    
    res.json(device);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getAllDevicesForLocation = async (req, res) => {
  try {
    const locationId = req.params.locationId;
    const devices = await Device.find({ location: locationId });
    
    res.json(devices);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updateDevice = async (req, res) => {
  try {
    const deviceId = req.params.deviceId;
    const updatedDevice = req.body;

    const device = await Device.findByIdAndUpdate(deviceId, updatedDevice, { new: true });

    if (!device) {
      return res.status(404).json({ message: 'Device not found' });
    }

    res.json(device);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.deleteDevice = async (req, res) => {
  try {
    const deviceId = req.params.deviceId;

    // Delete the device
    await Device.findByIdAndDelete(deviceId);

    res.json({ message: 'Device deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};