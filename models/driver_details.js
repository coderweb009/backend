const mongoose = require('mongoose');


var permanentLocationSchema = mongoose.Schema({

    type: {
        type: String,
        required: false
    },
    coordinates: [type = Number]
});


var presentLocationSchema = mongoose.Schema({

    type: {
        type: String,
        required: false
    },
    coordinates: [type = Number]
});


var permanentAddressSchema = mongoose.Schema({

    address_line_1: {
        type: String,
        required: false
    },
    address_line_2: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    pincode: {
        type: String,
        required: false
    },
    address_location: {permanentLocationSchema}
});

var presentAddressSchema = mongoose.Schema({

    address_line_1: {
        type: String,
        required: false
    },
    address_line_2: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    pincode: {
        type: String,
        required: false
    },
    address_location: {presentLocationSchema}
});

var routeDesiredSchema = mongoose.Schema({

    location: {
        type: String,
        required: false
    }
});

var employersHistorySchema = mongoose.Schema({

    from: {
        type: Date,
        required: false
    },
    to: {
        type: Date,
        required: false
    },
    transporter: {
        type: String,
        required: false
    },
    mobile: {
        type: String,
        required: false
    },
    salary: {
        type: Number,
        required: false
    },
});

var paymentHistorySchema = mongoose.Schema({

    payment_date: {
        type: Date,
        required: false
    },
    type: {
        type: String,
        required: false
    },
    amount: {
        type: Number,
        required: false
    }
});


//  ------ Main ------
const DriverDetailSchema = mongoose.Schema({
    driver_name: {
        type: String,
        required: false
    }, 

    permanent_address: [permanentAddressSchema],
    present_address: [presentAddressSchema],
    route_desired: [routeDesiredSchema],

    driver_photo: {
        type: String,
        required: false
    },
    mobile_no_1: {
        type: String,
        required: false
    },
    mobile_no_2: {
        type: String,
        required: false
    },
    adhar_card_no: {
        type: String,
        required: false
    },
    licence_no: {
        type: String,
        required: false
    },
    licence_photo: {
        type: String,
        required: false
    },
    expiry_date: {
        type: Date,
        required: false
    },
    account_holder_name: {
        type: String,
        required: false
    },
    account_number: {
        type: String,
        required: false
    },
    confirm_account_number: {
        type: String,
        required: false
    },
    ifsc: {
        type: String,
        required: false
    },

    employers_history: [employersHistorySchema],

    vehicle_preferred: {
        type: String,
        required: false
    },

    agency_name: {
        type: String,
        required: false
    },

    payment_history: [paymentHistorySchema],

    renewal_date: {
        type: Date,
        required: false
    }

});

const DriverDetail = module.exports = mongoose.model('Driver_Detail', DriverDetailSchema);