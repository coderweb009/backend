const mongoose = require('mongoose');

const CancelMasterSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },

    cancel_reason: {
        type: String,
        required: false
    },
});

const CancelMaster = module.exports = mongoose.model('CancelMaster', CancelMasterSchema);