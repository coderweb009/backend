const mongoose = require('mongoose');


var AdvanceAmountArraySchema = mongoose.Schema({

    account_name: {
        type: String,
        required: false
    },	
    amount: {
        type: Number,
        required: false
    },
    remarks: {
        type: String,
        required: false
    },
    srno: {
        type: Number,
        required: false
    },

});

const AdvanceAmountSchema = mongoose.Schema({

    tr_no: {
        type: Number,
        required: false
    },    
    date: {
        type: Date,
        required: false
    },
    party_category: {
        type: String,
        required: false
    },
    deal_no: {
        type: Number,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    payment_type: {
        type: String,
        required: false
    },
    advance_amount: [AdvanceAmountArraySchema]
    

});

const AdvanceAmount = module.exports = mongoose.model('AdvanceAmount', AdvanceAmountSchema);