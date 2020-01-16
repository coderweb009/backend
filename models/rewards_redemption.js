const mongoose = require('mongoose');

const RewardsRedemptionSchema = mongoose.Schema({
    
    trno: {
        type: Number,
        required: false
    },
    date: {
        type: Date,
        required: false
    },
    salesman: {
        type: String,
        required: false
    },
    points_generated: {
        type: Number,
        required: false
    },
    redemption: {
        type: Number,
        required: false
    },
    payment_type: {
        type: String,
        required: false
    },
    account_name: {
        type: String,
        required: false
    },
    remarks: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: false
    },
    srno: {
        type: Number,
        required: false
    }
});

const RewardsRedemption = module.exports = mongoose.model('RewardsRedemption', RewardsRedemptionSchema);