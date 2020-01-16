const mongoose = require('mongoose');

const AccountsSchema = mongoose.Schema({

    account_name: {
        type: String,
        required: false
    }
});

const Accounts = module.exports = mongoose.model('AccountsLedger', AccountsSchema);