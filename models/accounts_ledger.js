const mongoose = require('mongoose');

const AccountsLedgerSchema = mongoose.Schema({

    agency_name: {
        type: String,
        required: false
    },
    branch_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Agencies_Master',
        required: false
    },
    branch_name: {
        type: String,
        required: false
    },
    account_name: {
        type: String,
        required: false
    },
    truck_no: {
        type: String,
        required: false
    },
    sr_no: {
        type: Number,
        required: false
    },
    deal_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DealFinal',
        required: false
    },
    narration: {
        type: String,
        required: false
    }, 
    narration_ref_no: {
        type: Number,
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
    party_name: {
        type: String,
        required: false
    },
    user_name: {
        type: String,
        required: false
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserCreation',
        required: false
    },
    account_category: {
        type: String,
        required: false
    },
    group_name: {
        type: String,
        required: false
    },
    flag: {
        type: String,
        required: false
    }
});

const AccountsLedger = module.exports = mongoose.model('AccountsLedgerMaster', AccountsLedgerSchema);