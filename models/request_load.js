const mongoose = require('mongoose');

let DestinationSchema = mongoose.Schema({
    to: {
        type: String,
        required: false
    }
});

let NegotiateSchema = mongoose.Schema({
    company_name: {
        type: String,
        required: false
    },
    from: {
        type: String,
        required: false
    },
    to: {
        type: String,
        required: false
    },
    unloading_place: {
        type: String,
        required: false
    },
    material: {
        type: String,
        required: false
    },
    ton: {
        type: Number,
        required: false
    },
    rates: {
        type: Number,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    advance: {
        type: String,
        required: false
    },
});


const RequestLoadSchema = mongoose.Schema({

    ticket_no: {
        type: Number,
        required: false
    }, 
    date: {
        type: Date,
        required: false
    }, 
    agency_name: {
        type: String,
        required: false
    },
    transporter_name: {
        type: String,
        required: false
    },
    truck_no: {
        type: String,
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
    status: {
        type: String,
        required: false
    },
    cancel_reasons: [],

    destinations: [DestinationSchema],
    negotiate: [NegotiateSchema],

    salesman: {
        type: String,
        required: false
    },

    posted_by_transporter: {
        type: String,
        required: false
    },
    transporter_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transport_Detail',
        required: false
    },


    


});

const RequestLoad = module.exports = mongoose.model('Request_Load', RequestLoadSchema);