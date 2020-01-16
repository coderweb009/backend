const mongoose = require('mongoose');


var addressLocationSchema = mongoose.Schema({

    type: {
        type: String,
        required: false
    },
    coordinates: [type = Number]
});

let companyRequirementSchema = mongoose.Schema({
    vehicle_type: {
        type: String,
        required: false
    },
    vehicle_capacity: {
        type: Number,
        required: false
    },
    to_destination: {
        type: String,
        required: false
    },
    material: {
        type: String,
        required: false
    }
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

const CompanySchema = mongoose.Schema({
    company_name: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: false
    }, 
    address: [addressSchema],
    gstin_no: {
        type: String,
        required: false
    },
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
    mobile_no_1: {
        type: String,
        required: false
    },
    mobile_no_2: {
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

    company_requirement: [companyRequirementSchema],
    
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
    },

    materials :{
        type: Array,
        required: false
    },
    destinations :{
        type: Array,
        required: false
    },
    truck_types :{
        type: Array,
        required: false
    },
    capacity :{
        type: Array,
        required: false
    }

});

const Company = module.exports = mongoose.model('Company', CompanySchema);