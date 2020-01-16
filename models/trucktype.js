const mongoose = require('mongoose');



let capacitySchema = mongoose.Schema({
    ton: {
        type: Number,
        required: false
    }
});

const TruckTypeSchema = mongoose.Schema({
    type: {
            type: String,
            required: false
        },
    capacity: [capacitySchema] 

});

const TruckType = module.exports = mongoose.model('Truck_Type', TruckTypeSchema);