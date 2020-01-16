const mongoose = require('mongoose');

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

const UserPermissionSchema = mongoose.Schema({
    group_name: {
        type: String,
        required: false
    },
    permissions_group: [GroupPermissionsListSchema]
});

const UserPermission = module.exports = mongoose.model('UserPermission', UserPermissionSchema);