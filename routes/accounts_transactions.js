var express = require('express');
var router = express.Router();
var AccountVoucherNo = require('../models/account_voucher_no');
var AccountsTransactions = require('../models/accounts_transactions');

router.post('/add', function(req, res, next) {

    var max_no;
    AccountsTransactions.find({"agency_name": req.body.agency_name, "voucher_type": req.body.voucher_type}).sort({voucher_no:-1}).limit(1).then( function(result) {
        if(result[0]) {
            max_no = result[0].voucher_no + 1;
            console.log("FInd  >>>", max_no);
        } else {
            max_no = 1;
            console.log("NOT FInd  >>>", max_no);
        }

        req.body.voucher_no = max_no;

        var d = new AccountsTransactions(req.body);
        d.save(function(err, save) {
            console.log("err >>", err);
            console.log("save >>", save);
            res.send({"message": "Added..!", "max_voucher_no": max_no}); 
        });

        // res.send({"max_voucher_no": max_no}); 
    }).catch( function(err) {
        res.send(err);
    });

});

router.get('/max_voucher_no', function(req, res, next) {

    var max_no;
    AccountsTransactions.find({"agency_name": req.query.agency_name, "voucher_type": req.query.voucher_type}).sort({voucher_no:-1}).limit(1).then( function(result) {
        if(result[0]) {
            max_no = result[0].voucher_no + 1;
            console.log("FInd  >>>", max_no);
        } else {
            max_no = 1;
            console.log("NOT FInd  >>>", max_no);
        }

        res.send({"max_voucher_no": max_no}); 
    }).catch( function(err) {
        res.send(err);
    });

});

router.post('/add_voucher_no', function(req, res, next) {

    var d = new AccountVoucherNo(req.body);
    d.save(function(err, save) {
        console.log("err >>", err);
        console.log("save >>", save);
        res.send({"message": "Added..!"}); 
    });

});

router.get('/list', function(req, res, next) {
    AccountsTransactions.find({}).then(function(result) {   
        res.send({ "results": result}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.put('/update', function(req, res, next) {
    AccountsTransactions.updateMany({"_id": req.query.id}, { $set : req.body} , {multi:true} ).then(function(updateResult) {   
        res.send({ "message": "Updated..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.delete('/delete', function(req, res, next) {
    AccountsTransactions.deleteOne({"_id": req.query.id}).then(function(deleteResult) {   
        res.send({ "message": "Deleted..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.get('/list_by_agency', function(req, res, next) {
    AccountsTransactions.find({"agency_name": req.query.agency_name}).then(function(result) {   
        res.send({ "results": result}); 
    }).catch(function(err) {
        res.send(err);
    });
});



module.exports = router;