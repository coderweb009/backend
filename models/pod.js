const mongoose = require('mongoose');

const PODSchema = mongoose.Schema({

    pod_date: {
        type: Date,
        required: false
    },
    truck_no: {
        type: String,
        required: false
    },
    transporter_name: {
        type: String,
        required: false
    },

    //  Deal Data 
    deal_no: {
        type: Number,
        required: false
    },
    deal_date: {
        type: Date,
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
    consignor: {
        type: String,
        required: false
    },
    dispatch_date: {
        type: Date,
        required: false
    },
    delivery_date: {
        type: Date,
        required: false
    },

    // -------------------
    
    arrival_date: {
        type: Date,
        required: false
    },
    unloading_date: {
        type: Date,
        required: false
    },
    late_delivery: {
        type: Number,
        required: false
    },
    detention: {
        type: Number,
        required: false
    },


    // --------- Company ----------
    company_late_delivery_amount: {
        type: Number,
        required: false
    },
    company_detention_amount: {
        type: Number,
        required: false
    },
    company_claim_amount: {
        type: Number,
        required: false
    },

    // --------- transporter ----------
    transporter_late_delivery_amount: {
        type: Number,
        required: false
    },
    transporter_detention_amount: {
        type: Number,
        required: false
    },
    transporter_claim_amount: {
        type: Number,
        required: false
    },




    pod_status: {
        type: String,
        required: false
    },
    // pod_pending: {
    //     type: String,
    //     required: false
    // },
    upload_pod: {
        type: String,
        required: false
    },
});

const POD = module.exports = mongoose.model('POD_ACKWNOLDGEMENT', PODSchema);