var express = require('express');
var router = express.Router();
var AdvanceAmount = require('../models/advance_amount');
var AccountsLedger = require('../models/accounts_ledger');


router.post('/add', function(req, res, next) {

    var max_no;
    AdvanceAmount.find({}).sort({tr_no:-1}).limit(1).select('tr_no').then( function(result) {
        if(result[0]) {
            var obj = result[0].toJSON();
            console.log("obj  >>>", obj.tr_no);
            max_no = obj.tr_no + 1;
            console.log("Find  >>>", max_no);
        } else {
            max_no = 1;
            console.log("NOT Find  >>>", max_no);
        }
        

        req.body.tr_no = max_no;
        var d = new AdvanceAmount(req.body);
    
        d.save(function (err, save) {
        console.log("err  >>>",err);
        console.log("save  >>>",save);
        res.send({"message": "Added..!","data": save}); 
        });
    }).catch( function(err) {
        res.send(err);
    });
  
});

router.get('/list', function(req, res, next) {
    
    AdvanceAmount.find({}).then( function(result) {
        res.send( {"results": result} );
    }).catch( function(err) {
        res.send(err);
    });
});

router.put('/update', function(req, res, next) {
    AdvanceAmount.updateMany({"_id": req.query.id}, { $set : req.body} , {multi:true} ).then(function(updateResult) {   
        res.send({ "message": "Updated..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.delete('/delete', function(req, res, next) {
    AdvanceAmount.deleteOne({"_id": req.query.id}).then(function(deleteResult) {   
        res.send({ "message": "Deleted..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.delete('/delete_accounts_ledger', function(req, res, next) {

    AccountsLedger.deleteMany({sr_no: req.query.sr_no, document_type: req.query.document_type, party_name: req.query.party_name}).then( function(result) {
        res.send({"message": "Deleted..!"}); 
    }).catch( function(err) {
        res.send(err);
    });
});

router.get('/search_account_name', (req, res) => {
    var regex = req.query.account_name;
    AccountsLedger.find({"account_name": new RegExp('' + regex, 'i'), "sr_no": req.query.sr_no, "document_type" : "DF" }).select('account_name')
        .collation({ locale: "en" })
        .sort({account_name: 'asc'})
        .limit(50)
        .then((fromResults) => {
            res.send(fromResults);
        }).catch(err => {
            console.log(err);
            res.status(500).send({error: JSON.stringify(err)});
    });
});

router.get('/select_deal', function(req, res, next) {
    
    AdvanceAmount.find({"deal_no": req.query.deal_no}).then( function(result) {
        res.send( {"results": result} );
    }).catch( function(err) {
        res.send(err);
    });
});

module.exports = router;