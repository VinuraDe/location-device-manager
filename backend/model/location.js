const mongoose = require('mongoose');

// Define the schema for your location model
const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
    
});


const Location = mongoose.model('Location', locationSchema);

module.exports = Location;