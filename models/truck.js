const mongoose = require('mongoose');

const TruckSchema = mongoose.Schema({
    truck_no: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: false
    },
    capacity: {
        type: Number,
        required: false
    },
    transport_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transport_Detail',
        required: false
    },
    driver_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver_Detail',
        required: false
    },
    guaranter_name: {
        type: String,
        required: false
    },
    guaranter_type: {
        type: String,
        required: false
    },
    authorised_by: {
        type: String,
        required: false
    },
    mobile_no: {
        type: String,
        required: false
    }
});

const Truck = module.exports = mongoose.model('Truck', TruckSchema);