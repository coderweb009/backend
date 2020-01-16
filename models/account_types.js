const mongoose = require('mongoose');

const AccountTypesSchema = mongoose.Schema({

    name: {
        type: String,
        required: false
    },
    field: {
        type: String,
        required: false
    }
});

const AccountTypes = module.exports = mongoose.model('Account_Types', AccountTypesSchema);