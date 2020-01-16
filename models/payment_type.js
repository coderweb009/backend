const mongoose = require('mongoose');

const PaymentTypeSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },

    description: {
        type: String,
        required: false
    },
});

const PaymentType = module.exports = mongoose.model('PaymentType', PaymentTypeSchema);