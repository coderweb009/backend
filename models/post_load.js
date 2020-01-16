const mongoose = require('mongoose');

let ToSchema = mongoose.Schema({
    to: {
        type: String,
        required: false
    },
    unloading_place: {
        type: String,
        required: false
    },
});

const PostLoadSchema = mongoose.Schema({

    srno: {
        type: Number,
        required: false
    },
    ticket_no: {
        type: Number,
        required: false
    },
    posting_date: {
        type: Date,
        required: false
    },
    agency_name: {
        type: String,
        required: false
    },
    company_name: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    despatch_date: {
        type: Date,
        required: false
    },
    delivery_date: {
        type: Date,
        required: false
    },
    from: {
        type: String,
        required: false
    },
    loading_place: {
        type: String,
        required: false
    },
    destinations: [ToSchema],
    // unloading_place: {
    //     type: String,
    //     required: false
    // },
    material: {
        type: String,
        required: false
    },
    ton: {
        type: String,
        required: false
    },
    truck_type: {
        type: String,
        required: false
    },
    capacity: {
        type: String,
        required: false
    },
    rate: {
        type: Number,
        required: false
    },
    payment_mode: {
        type: String,
        required: false
    },
    advance: {
        type: Number,
        required: false
    },
    late_delivery_amount: {
        type: Number,
        required: false
    },
    detention_amount: {
        type: Number,
        required: false
    },
    cancel_reasons: [],

    salesman: {
        type: String,
        required: false
    }

});

const PostLoad = module.exports = mongoose.model('PostLoad', PostLoadSchema);