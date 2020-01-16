const mongoose = require('mongoose');

const EmployeesSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: false
    },
    last_name: {
        type: String,
        required: false
    },
    mobile_no: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: false
    },
    reports_to: {
        // type: String,
        // required: false
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employees',
        required: false
    },
    reward_points: {
        type: Number,
        required: false
    },
    from: {
        type: Date,
        required: false
    },
    to: {
        type: Date,
        required: false
    },
    agency_name: {
        type: String,
        required: false
    },
    work_location: {
        type: String,
        required: false
    },
    location_restriction: {
        type: String,
        required: false
    },
    latitude: {
        type: String,
        required: false
    },
    longitude: {
        type: String,
        required: false
    },

    check_in_out: {
        type: Boolean,
        required: false
    },
    auto_log_out: {
        type: Boolean,
        required: false
    },
    location_restriction_check: {
        type: Boolean,
        required: false
    },
    live_tractrking: {
        type: Boolean,
        required: false
    },
    check_out_reminders: {
        type: Boolean,
        required: false
    },
    distance: {
        type: Number,
        required: false
    },
    ideal_marker_time: {
        type: String,
        required: false
    },
});

const Employees = module.exports = mongoose.model('Employees', EmployeesSchema);