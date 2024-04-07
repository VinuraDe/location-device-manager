const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    serial: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        enum: ['pos', 'kisok', 'signage'],
        required: true
    },
    Image: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        required: true
    }, 

    locationId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
        required: true
    }
});

const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;