const mongoose = require('mongoose');

const AccountsMasterSchema = mongoose.Schema({

    account_name: {
        type: String,
        required: false
    },

    srno: {
        type: Number,
        required: false
    },

    agency_name: {
        type: String,
        required: false
    },
    
    truck_no: {
        type: String,
        required: false
    },

    category: {
        type: String,
        required: false
    },
    group: {
        type: String,
        required: false
    } ,
    accounts_type: {
        type: String,
        required: false
    },
    under_ledger: {
        type: String,
        required: false
    }, 
    gst_number: {
        type: String,
        required: false
    },
    pan_number: {
        type: String,
        required: false
    },
    vendor_code: {
        type: String,
        required: false
    },
    contact_person: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    mobile_1: {
        type: String,
        required: false
    },
    mobile_2: {
        type: String,
        required: false
    },
    opening_balance: {
        type: Number,
        required: false
    },
    o_drcr: {
        type: String,
        required: false
    },
    closing_balance: {
        type: Number,
        required: false
    },
    c_drcr: {
        type: String,
        required: false
    },

    //------- Billing Address -------

    billing_street_1: {
        type: String,
        required: false
    },
    billing_street_2: {
        type: String,
        required: false
    },
    billing_city: {
        type: String,
        required: false
    },
    billing_state: {
        type: String,
        required: false
    },
    billing_pin: {
        type: Number,
        required: false
    },
    billing_country: {
        type: String,
        required: false
    },
    billing_phone: {
        type: String,
        required: false
    },

    //-------- Shipping Address ------

    shipping_street_1: {
        type: String,
        required: false
    },
    shipping_street_2: {
        type: String,
        required: false
    },
    shipping_city: {
        type: String,
        required: false
    },
    shipping_state: {
        type: String,
        required: false
    },
    shipping_pin: {
        type: Number,
        required: false
    },
    shipping_country: {
        type: String,
        required: false
    },
    shipping_phone: {
        type: String,
        required: false
    },



});

const AccountsMaster = module.exports = mongoose.model('AccountsMaster', AccountsMasterSchema);