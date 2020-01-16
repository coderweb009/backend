const mongoose = require('mongoose');

const PaymentModeSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },

    description: {
        type: String,
        required: false
    },
});

const PaymentMode = module.exports = mongoose.model('PaymentMode', PaymentModeSchema);