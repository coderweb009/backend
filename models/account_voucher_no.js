const mongoose = require('mongoose');

const AccountsVoucherNoSchema = mongoose.Schema({

    agency_name: {
        type: String,
        required: false
    },

    voucher_type: {
        type: String,
        required: false
    },

    voucher_no: {
        type: Number,
        required: false
    }
});

const AccountsVoucherNo = module.exports = mongoose.model('AccountsVoucherNo', AccountsVoucherNoSchema);