const mongoose = require('mongoose');


var AssignsSchema = mongoose.Schema({
    assign: {
        type: String,
        required: false
    }
});

var AgenciesSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    value: {
        type: String,
        required: false
    }
});

var GroupPermissionsListSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    value: {
        type: String,
        required: false
    }
});

var priviligesSchema = mongoose.Schema({
    group_name: {
        type: String,
        required: false
    },
    permissions_group: [GroupPermissionsListSchema]
});

const UserCreationSchema = mongoose.Schema({
    user_name: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    user_role: {
        type: String,
        required: false
    },
    assigns: [AssignsSchema],
    agencies: [AgenciesSchema],
    priviliges: [priviligesSchema]
});

const UserCreation = module.exports = mongoose.model('UserCreation', UserCreationSchema);