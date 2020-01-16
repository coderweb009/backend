var express = require('express');
var router = express.Router();
var RewardsLedger = require('../models/rewards_ledger');
var DealFinal = require('../models/deal_final');
var moment = require('moment');

router.post('/add', function(req, res, next) {

    RewardsLedger.insertMany(req.body).then( function(result) {
        res.send({"message": "Added..!"}); 
    }).catch( function(err) {
        res.send(err);
    });
});

router.get('/deal_final_by_sr_no', function(req, res, next) {
    DealFinal.findOne({"sr_no": req.query.sr_no}).then(function(result) {   
        res.send({ "results": result}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.get('/points_generated', function(req, res, next) {
    RewardsLedger.find({"salesman": req.query.salesman}).then(function(result) {   

        var totalDebit = 0;
        var totalCredit = 0;
        result.forEach(r => {
            if(r.debit_amount) {
                totalDebit = totalDebit + r.debit_amount;
            }

            if(r.credit_amount) {
                totalCredit = totalCredit + r.credit_amount;
            }            
        });

        var pointsGenerated = totalDebit - totalCredit;
        res.send({ "points_generated": pointsGenerated}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.get('/display', function(req, res, next) {

    var matchCondition = {};
    var totalClosing = 0;


    if (req.query.agency_name) {
        matchCondition.agency_name = req.query.agency_name;
    }

    if (req.query.salesman) {
        matchCondition.salesman = req.query.salesman;
    }

    if(req.query.from_date && req.query.to_date ) {
        var startDate = moment(req.query.from_date, 'YYYY-MM-DD').format("YYYY-MM-DD");
        var endDate = moment(req.query.to_date, 'YYYY-MM-DD').add(1, 'days').format("YYYY-MM-DD");
        matchCondition.voucher_date = {
            $gte: startDate,
            $lte: endDate
        };
    }


    if (req.query.from_date) {
        if( req.query.from_date == req.query.to_date ){
            var startDate = moment(req.query.from_date, 'YYYY-MM-DD').format("YYYY-MM-DD");
            var endDate = moment(startDate, 'YYYY-MM-DD').add(1, 'days');
            matchCondition.voucher_date = {
                $gte: startDate,
                $lte: endDate
            };
        }
    }

    RewardsLedger.find(matchCondition).then( function(result) {

        result.forEach(element => {
            if(element.debit_amount){
                totalClosing = totalClosing + element.debit_amount;
            } else {
                totalClosing = totalClosing - element.credit_amount;
            }
        });
        res.send( {"results": result, "closing_balance": totalClosing } );
    }).catch( function(err) {
        res.send(err);
    });
});

router.delete('/delete', function(req, res, next) {

    RewardsLedger.deleteMany({srno: req.query.srno}).then( function(result) {
        res.send({"message": "Deleted..!"}); 
    }).catch( function(err) {
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

    RewardsLedger.find(matchCondition).then(function(result) {
        var resultsArray = [];

            salesmanNames = [];
            mainArray = [];
            result.forEach(r => {
                salesmanNames.push(r.salesman);
            });

            salesmanNames = salesmanNames.filter((v, i, a) => a.indexOf(v) === i);

            salesmanNames.forEach(sn => {

                totalDebit = 0;
                totalCredit = 0;

                result.forEach(ar => {

                    if(sn == ar.salesman) {
                        totalDebit = totalDebit + ar.debit_amount;
                        totalCredit = totalCredit + ar.credit_amount;
                    }
                    
                });
                
                var diff = totalDebit - totalCredit;

                if (diff < 0) {
                    obj = {
                        salesman: sn,
                        dr: 0,
                        cr: diff,
                    };
                } else {
                    obj = {
                        salesman: sn,
                        dr: diff,
                        cr: 0,
                    };
                }

                mainArray.push(obj);
            }); 
            res.send({ "results": mainArray });  


    }).catch(function(err) {
        console.log("ERROR >>> ", err);
        res.send(err);
    });
  
});

module.exports = router;