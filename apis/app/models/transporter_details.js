const mongoose = require('mongoose');


var addressLocationSchema = mongoose.Schema({

    type: {
        type: String,
        required: false
    },
    coordinates: [type = Number]
});

var addressSchema = mongoose.Schema({

    address_line_1: {
        type: String,
        required: false
    },
    address_line_2: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    pincode: {
        type: String,
        required: false
    },
    address_location: {addressLocationSchema}
});

var routeDesiredSchema = mongoose.Schema({

    location: {
        type: String,
        required: false
    }
});

const TransportDetailAppSchema = mongoose.Schema({
    sr_no: {
        type: Number,
        required: false
    },
    agency_name: {
        type: String,
        required: false
    },
    transport_name: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    address: [addressSchema],

    owner_name: {
        type: String,
        required: false
    },
    omobile_no_1: {
        type: String,
        required: false
    },
    omobile_no_2: {
        type: String,
        required: false
    },
    contact_person: {
        type: String,
        required: false
    },
    cmobile_no_1: {
        type: String,
        required: false
    },
    cmobile_no_2: {
        type: String,
        required: false
    },
    website: {
        type: String,
        required: false
    },
    direction: {
        type: String,
        required: false
    },
    account_holder_name: {
        type: String,
        required: false
    },
    account_number: {
        type: String,
        required: false
    },
    confirm_account_number: {
        type: String,
        required: false
    },
    ifsc: {
        type: String,
        required: false
    },
    route_desired: [routeDesiredSchema],
    location_allotment: {
        type: String,
        required: false
    },
    location_restriction: {
        type: Number,
        required: false
    },
    latitude: {
        type: String,
        required: false
    },
    longitude: {
        type: String,
        required: false
    }
});

const TransportDetailApp = module.exports = mongoose.model('Transport_Detail_App', TransportDetailAppSchema);