var express = require('express');
var router = express.Router();
var AccountsMaster = require('../models/accounts_master');
var AccountsLedger = require('../models/accounts_ledger');
var async = require('async');
var moment = require('moment');

router.post('/add', function(req, res, next) {

	var d = new AccountsMaster(req.body);
    
    d.save(function (err, save) {
       console.log("err  >>>",err);
       console.log("save  >>>",save);
       res.send({"message": "Added..!"}); 
    });
  
});

router.get('/list', function(req, res, next) {

	AccountsMaster.find({}).then(function (result) {
        res.send({"results": result});
    }).catch(function(err){
        res.send(err);
    });
  
});

router.put('/update', function(req, res, next) {
    AccountsMaster.updateMany({"_id": req.query.id}, { $set : req.body} , {multi:true} ).then(function(updateResult) {   
        res.send({ "message": "Updated..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.delete('/delete', function(req, res, next) {
    AccountsMaster.deleteOne({"_id": req.query.id}).then(function(deleteResult) {   
        res.send({ "message": "Deleted..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.get('/accounts_by_agency', function(req, res, next) {

	AccountsMaster.find({"agency_name": req.query.agency_name}).select('account_name agency_name srno').then(function (result) {
        res.send({"results": result});
    }).catch(function(err){
        res.send(err);
    });
  
});

router.get('/trial_balance', function(req, res, next) {

    var mainArray = [];
   
    var rvopbal = 0;
    var matchCondition = {};
    
    if(req.query.to_date && req.query.from_date) {
        var startDate = moment(req.query.from_date, 'YYYY-MM-DD').format("YYYY-MM-DD");
        var endDate = moment(req.query.to_date, 'YYYY-MM-DD').add(1, 'days').format("YYYY-MM-DD");
        matchCondition.voucher_date = {
            $gte: startDate,
            $lte: endDate
        };
    }

    if( req.query.from_date) {
        if( req.query.from_date == req.query.to_date ){
            var startDate = moment(req.query.from_date, 'YYYY-MM-DD').format("YYYY-MM-DD");
            var endDate = moment(startDate, 'YYYY-MM-DD').add(1, 'days');
            matchCondition.voucher_date = {
                $gte: startDate,
                $lte: endDate
            };
        }
    }

    if(req.query.agency_name){
        matchCondition.agency_name = req.query.agency_name;
    } 

    if(req.query.branch_name){
        matchCondition.branch_name = req.query.branch_name;
    } 


    var calculateLedger = function(accountNameData) {
        return function (callback) {
            AccountsMaster.findOne({"account_name": accountNameData.account_name}).then(r => {
                var vopbal = 0;

                // console.log("AccountsMaster >>>", r);
                if(r) {
                    vopbal = 0;
                    if(r.c_drcr === "Debit"){
                        vopbal = vopbal + (r.opening_balance ? r.opening_balance : 0);
                        accountType = "Debit";
                        // console.log("Debit.....");
                    } else{
                        vopbal = vopbal - (r.opening_balance ? r.opening_balance : 0);
                        accountType = "Credit";
                        // console.log("Credit.....");
                    }
                    
                } else {
                    vopbal = 0;
                }

                var accountName = accountNameData.account_name;
                var debitAmount = accountNameData.debit_amount ? accountNameData.debit_amount: 0;
                var creditAmount = accountNameData.credit_amount ? accountNameData.credit_amount: 0;

                var obj = {
                    account_name: accountName,
                    dr: debitAmount,
                    cr: creditAmount,
                };
                callback(false, obj);
                
            }).catch(err => {
                console.log(err.stack);
                callback(err, null);
            });
        };
    };

    AccountsLedger.find(matchCondition).then(function(result) {
        var resultsArray = [];
        // console.log("result >>> ", result);
        result.forEach(a => {
            resultsArray.push(calculateLedger(a));
        });
        async.parallel(resultsArray, function(err, asyncResult) {
            console.log("ERROR >>> ", err);

            accountsName = [];
            mainArray = [];
            asyncResult.forEach(r => {
                accountsName.push(r.account_name);
            });

            accountsName = accountsName.filter((v, i, a) => a.indexOf(v) === i);

            accountsName.forEach(an => {

                totalDebit = 0;
                totalCredit = 0;

                asyncResult.forEach(ar => {

                    if(an == ar.account_name) {
                        totalDebit = totalDebit + ar.dr;
                        totalCredit = totalCredit + ar.cr;
                    }
                    
                });
                
                var diff = totalDebit - totalCredit;

                if (diff < 0) {
                    obj = {
                        account_name: an,
                        dr: 0,
                        cr: diff,
                    };
                } else {
                    obj = {
                        account_name: an,
                        dr: diff,
                        cr: 0,
                    };
                }

                mainArray.push(obj);
            }); 
            res.send({ "results": mainArray });  
        });

    }).catch(function(err) {
        console.log("ERROR >>> ", err);
        res.send(err);
    });
  
});


module.exports = router;
