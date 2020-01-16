const mongoose = require('mongoose');


var AdvanceAmountSchema = mongoose.Schema({

    advance_account_name: {
        type: String,
        required: false
    },	
    amount: {
        type: Number,
        required: false
    },
    remarks: {
        type: String,
        required: false
    },
    srno: {
        type: Number,
        required: false
    },

});

var TruckVerificationSchema = mongoose.Schema({
 
    document_type: {
        type: Boolean,
        default: false,
        required: true
    }

});

var ReceivableAdvanceSchema = mongoose.Schema({
    cheque_name: {
        type: String,
        required: false
    },
    payment_mode: {
        type: String,
        required: false
    },
    cheque_no: {
        type: String,
        required: false
    },
    cheque_date: {
        type: Date,
        required: false
    },
    bank_name: {
        type: String,
        required: false
    },
    cheque_amount: {
        type: Number,
        required: false
    },
    labour_charge: {
        type: Number,
        required: false
    },
    mamul: {
        type: Number,
        required: false
    },
    payment_charges: {
        type: Number,
        required: false
    },
    tds: {
        type: Number,
        required: false
    }
});

var ReceivableBalanceSchema = mongoose.Schema({
    cheque_name: {
        type: String,
        required: false
    },
    payment_mode: {
        type: String,
        required: false
    },
    cheque_no: {
        type: String,
        required: false
    },
    cheque_date: {
        type: Date,
        required: false
    },
    bank_name: {
        type: String,
        required: false
    },
    cheque_amount: {
        type: Number,
        required: false
    },
    labour_charge: {
        type: Number,
        required: false
    },
    mamul: {
        type: Number,
        required: false
    },
    payment_charges: {
        type: Number,
        required: false
    },
    tds: {
        type: Number,
        required: false
    }
});

const DealFinalNewSchema = mongoose.Schema({

    //--------------- Deal Final ---------------
    agency_name: {
        type: String,
        required: false
    },
    deal_no: {
        type: Number,
        required: false
    },
    deal_date: {
        type: Date,
        required: false
    },
    from: {
        type: String,
        required: false
    },
    to: {
        type: String,
        required: false
    },
    loading_place: {
        type: String,
        required: false
    },
    unloading_place: {
        type: String,
        required: false
    },
    weight_company: {
        type: Number,
        required: false
    },
    payment_mode: {
        type: String,
        required: false
    },
    dispatch_date: {
        type: Date,
        required: false
    },
    delivery_date: {
        type: Date,
        required: false
    },
    late_delivery_amount: {
        type: Number,
        required: false
    },
    detention_amount: {
        type: Number,
        required: false
    },
    company_salesman: {
        type: String,
        required: false
    },
    user_name: {
        type: String,
        required: false
    },
    
    //--------------- Transporter ---------------

    transporter_ticket_no: {
        type: Number,
        required: false
    },
    transporter_name: {
        type: String,
        required: false
    },
    transporter_rates: {
        type: Number,
        required: false
    },
    transporter_advance: {
        type: Number,
        required: false
    },
    truck_no: {
        type: String,
        required: false
    },
    truck_type: {
        type: String,
        required: false
    },
    truck_capacity: {
        type: Number,
        required: false
    }, 
    transporter_actual_weight: {
        type: Number,
        required: false
    },
    transporter_rates_calculation: {
        type: String,
        required: false
    },
    transporter_freight: {
        type: Number,
        required: false
    },
    transporter_commission: {
        type: Number,
        required: false
    },

    transporter_salesman: {
        type: String,
        required: false
    },


    //--------------- Company ---------------

    company_ticket_no: {
        type: Number,
        required: false
    },
    company_name: {
        type: String,
        required: false
    },
    company_rates: {
        type: Number,
        required: false
    },
    company_advance: {
        type: Number,
        required: false
    },
    company_commission: {
        type: Number,
        required: false
    },

    //--------------- New ---------------

    transporter_labour_charges: {
        type: Number,
        required: false
    },

    transporter_mamul: {
        type: Number,
        required: false
    },

    transporter_payment_charge: {
        type: Number,
        required: false
    },

    transporter_tds: {
        type: Number,
        required: false
    },


    company_labour_charges: {
        type: Number,
        required: false
    },

    company_mamul: {
        type: Number,
        required: false
    },

    company_payment_charge: {
        type: Number,
        required: false
    },

    company_tds: {
        type: Number,
        required: false
    },


    destination_1: {
        type: String,
        required: false
    },

    destination_2: {
        type: String,
        required: false
    },

    ackwnoldgement_due_date: {
        type: Date,
        required: false
    },

    //--------------- Advance Amount ---------------

    advance_date: {
        type: Date,
        required: false
    },
    party_category: {
        type: String,
        required: false
    },
    account_name: {
        type: String,
        required: false
    },
    payment_type: {
        type: String,
        required: false
    },
    advance_amount: [AdvanceAmountSchema],
    receivable_advance:[{
         cheque_name: {
        type: String,
        required: false,
        default:''
    },
    payment_mode: {
        type: String,
        required: false,
        default:''
    },
    cheque_no: {
        type: String,
        required: false,
        default:0
    },
    cheque_date: {
        type: Date,
        required: false,
        default:''
    },
    bank_name: {
        type: String,
        required: false,
        default:''
    },
    cheque_amount: {
        type: Number,
        default: 0,
        required: false,
        default:0
    },
    labour_charge: {
        type: Number,
        default: 0,
        required: false
    },
    mamul: {
        type: Number,
        default: 0,
        required: false
    },
    payment_charges: {
        type: Number,
        default: 0,
        required: false
    },
    tds: {
        type: Number,
        required: false
    },
    diesel:{
        provider:{
        type: String,
        required: false,
        default: "",
        },
        driver_name:{
        type: String,
        required: false,
        default: "",

        },
        mobile:{
        type: String,
        required: false,
        default: "",
        
        },
        amount:{
        type: String,
        required: false
        }
    }
    }],
    //--------------- Traffic Operations ---------------
    traffic_operations: {
        document_verification: {
            type: Boolean,
            default: false,
            required: true
        },
        truck_verification: { TruckVerificationSchema },
        bank_details: [],
        receivable_advance: { 
            cheque_name: {
                type: String,
                required: false
            },
            payment_mode: {
                type: String,
                required: false
            },
            cheque_no: {
                type: String,
                required: false
            },
            cheque_date: {
                type: Date,
                required: false
            },
            bank_name: {
                type: String,
                required: false
            },
            cheque_amount: {
                type: Number,
                required: false
            },
            labour_charge: {
                type: Number,
                required: false
            },
            mamul: {
                type: Number,
                required: false
            },
            payment_charges: {
                type: Number,
                required: false
            },
            tds: {
                type: Number,
                required: false
            }
         },
        pod_t_uploaded: {
            type: Boolean,
            default: false,
            required: true
        },
        pod_recived:{
            type:String,
            required:false
        },
        submitted_by:{
            type:String,
            required:false
        },
        pod_c_uploaded: {
            type: Boolean,
            default: false,
            required: true
        },
        receivable_balance: { 
            cheque_name: {
                type: String,
                required: false
            },
            payment_mode: {
                type: String,
                required: false
            },
            cheque_no: {
                type: String,
                required: false
            },
            cheque_date: {
                type: Date,
                required: false
            },
            bank_name: {
                type: String,
                required: false
            },
            cheque_amount: {
                type: Number,
                required: false
            },
            labour_charge: {
                type: Number,
                required: false
            },
            mamul: {
                type: Number,
                required: false
            },
            payment_charges: {
                type: Number,
                required: false
            },
            tds: {
                type: Number,
                required: false
            }
         },
    }
});

const DealFinalNew = module.exports = mongoose.model('DealFinalNew', DealFinalNewSchema);