const mongoose = require('mongoose');

const AccountsCategorySchema = mongoose.Schema({

    name: {
        type: String,
        required: false
    },
    field: {
        type: String,
        required: false
    }
});

const AccountsCategory = module.exports = mongoose.model('Accounts_Category', AccountsCategorySchema);