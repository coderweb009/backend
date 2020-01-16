const mongoose = require('mongoose');

const RewardsLedgerSchema = mongoose.Schema({

    agency_name: {
        type: String,
        required: false
    },
    branch: {
        type: String,
        required: false
    }, 
    agency_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Agencies_Master',
        required: false
    },
    salesman: {
        type: String,
        required: false
    },
    truck_no: {
        type: String,
        required: false
    },
    srno: {
        type: Number,
        required: false
    },
    narration_ref_no: {
        type: String,
        required: false
    },
    document_type: {
        type: String,
        required: false
    }, 
    debit_amount: {
        type: Number,
        required: false
    },
    credit_amount: {
        type: Number,
        required: false
    },
    voucher_date: {
        type: Date,
        required: false
    },
    username: {
        type: String,
        required: false
    },
});

const Rewards_Ledger = module.exports = mongoose.model('Rewards_Ledger', RewardsLedgerSchema);