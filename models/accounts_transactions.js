const mongoose = require('mongoose');

let AccountsDataSchema = mongoose.Schema({
    account_name: {
        type: String,
        required: false
    },
    account_debit: {
        type: Number,
        required: false
    },
    account_credit: {
        type: Number,
        required: false
    },
});

const AccountsTransactionsSchema = mongoose.Schema({

    agency_name: {
        type: String,
        required: false
    },
    voucher_type: {
        type: String,
        required: false
    },
    voucher_document_type: {
        type: String,
        required: false
    },
    voucher_no: {
        type: Number,
        required: false
    },
    date: {
        type: Date,
        required: false
    },
    truck_no: {
        type: String,
        required: false
    },
    account_head: {
        type: String,
        required: false
    },
    payment_type: {
        type: String,
        required: false
    },
    against: {
        type: String,
        required: false
    },
    // account_name: {
    //     type: String,
    //     required: false
    // },

    accounts_data: [AccountsDataSchema],
    naration: {
        type: String,
        required: false
    },
    debit: {
        type: Number,
        required: false
    },
    credit: {
        type: Number,
        required: false
    },

    user_name: {
        type: String,
        required: false
    },



});

const AccountsTransactions = module.exports = mongoose.model('AccountsTransactions', AccountsTransactionsSchema);