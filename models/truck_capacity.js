const mongoose = require('mongoose');

const TruckCapacitySchema = mongoose.Schema({
    truck_type_id: {
        type: Number,
        required: false
    }, 
    capacity: {
        type: Number,
        required: false
    }
});

const TruckCapacity = module.exports = mongoose.model('Truck_Capacity', TruckCapacitySchema);