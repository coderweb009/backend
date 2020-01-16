const mongoose = require('mongoose');


var companyAdvanceSchema = mongoose.Schema({
    company_date: {
        type: Date,
        required: false
    },
    company_payment_type: {
        type: String,
        required: false
    },
    company_payment_mode: {
        type: String,
        required: false
    },
    company_account_name: {
        type: String,
        required: false
    },
    company_amount: {
        type: Number,
        required: false
    },
    company_remarks: {
        type: String,
        required: false
    },

});

var transporterAdvanceSchema = mongoose.Schema({

    transporter_date: {
        type: Date,
        required: false
    },
    transporter_payment_type: {
        type: String,
        required: false
    },
    transporter_payment_mode: {
        type: String,
        required: false
    },
    transporter_account_name: {
        type: String,
        required: false
    },
    transporter_amount: {
        type: Number,
        required: false
    },
    transporter_remarks: {
        type: String,
        required: false
    },

});

const DealFinalSchema = mongoose.Schema({

    //--------------- Deal Final ---------------
    deal_date: {
        type: Date,
        required: false
    },
    sr_no: {
        type: Number,
        required: false
    },
    agency_name: {
        type: String,
        required: false
    },
    load_type: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false
    },


    //--------------- Company ---------------


    company_ticket_no: {
        type: String,
        required: false
    },
    company_salesman: {
        type: String,
        required: false
    },
    company_name: {
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
    to: {
        type: String,
        required: false
    },
    unloading_place: {
        type: String,
        required: false
    },
    rates_company: {
        type: Number,
        required: false
    },
    advance_company: {
        type: Number,
        required: false
    },
    weight_company: {
        type: Number,
        required: false
    },

    company_advance_data: [companyAdvanceSchema],

    //--------------- Transporter ---------------

    transporter_ticket_no: {
        type: String,
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

    transporter_salesman: {
        type: String,
        required: false
    },

    transporter_advance_data: [transporterAdvanceSchema],


    //--------------- Truck ---------------

    puc: {
        type: String,
        required: false
    },
    insurance: {
        type: String,
        required: false
    },
    truck_rates: {
        type: Number,
        required: false
    },
    truck_weight: {
        type: Number,
        required: false
    },
    truck_advance: {
        type: Number,
        required: false
    },
    actual_weight: {
        type: Number,
        required: false
    },
    freight: {
        type: Number,
        required: false
    },

    //--------------- Driver ---------------

    driver_name: {
        type: String,
        required: false
    },
    licence_expiry: {
        type: Date,
        required: false
    },
    rate_calculation: {
        type: String,
        required: false
    },

    user_name: {
        type: String,
        required: false
    },

    cancel_reasons: [],

    deal_final_salesman: {
        type: String,
        required: false
    },


});

const DealFinal = module.exports = mongoose.model('DealFinal', DealFinalSchema);