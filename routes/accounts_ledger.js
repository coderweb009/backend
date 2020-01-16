var express = require('express');
var router = express.Router();
var AccountsLedger = require('../models/accounts_ledger');
var moment = require('moment');

router.post('/add', function(req, res, next) {

    AccountsLedger.insertMany(req.body).then( function(result) {
        res.send({"message": "Added..!"}); 
    }).catch( function(err) {
        res.send(err);
    });
});

router.get('/list', function(req, res, next) {

    AccountsLedger.find({}).then( function(result) {
        res.send( {"results": result} );
    }).catch( function(err) {
        res.send(err);
    });
});

router.delete('/delete', function(req, res, next) {

    AccountsLedger.deleteMany({sr_no: req.query.sr_no, document_type: req.query.document_type}).then( function(result) {
        res.send({"message": "Deleted..!"}); 
    }).catch( function(err) {
        res.send(err);
    });
});

router.get('/list_accounts_name', function(req, res, next) {
    
    var listRowArray = [];
    AccountsLedger.find({}).select('account_name').then( function(result) {

        result.forEach(element => {
            listRowArray.push(element.account_name);
        });
        
        listRowArray = listRowArray.filter((v, i, a) => a.indexOf(v) === i);

        res.send( {"results": listRowArray} );
    }).catch( function(err) {
        res.send(err);
    });
});

router.get('/list_branch_name', function(req, res, next) {
    
    var listRowArray = [];
    AccountsLedger.find({}).select('branch_name').then( function(result) {

        result.forEach(element => {
            listRowArray.push(element.branch_name);
        });
        
        listRowArray = listRowArray.filter((v, i, a) => a.indexOf(v) === i);

        res.send( {"results": listRowArray} );
    }).catch( function(err) {
        res.send(err);
    });
});

router.get('/fetch_accounts_ledger', function(req, res, next) {

    var matchCondition = {};
    var totalDebit = 0;
    var totalCredit = 0;

    if (req.query.account_name) {
        matchCondition.account_name = req.query.account_name;
    }

    if (req.query.branch_name) {
        matchCondition.branch_name = req.query.branch_name;
    }

    if (req.query.truck_no) {
        matchCondition.truck_no = req.query.truck_no;
    }

    if(req.query.from_date && req.query.to_date ) {
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
    
    AccountsLedger.find(matchCondition).then( function(result) {

        result.forEach(element => {

            if (element.debit_amount) {
                totalDebit = totalDebit + element.debit_amount;
                console.log("debit_amount >>>>>", element.debit_amount);
            }

            if (element.credit_amount) {
                totalCredit = totalCredit + element.credit_amount;
                console.log("credit_amount >>>>>", element.credit_amount);
            }
            
        });
        res.send( {"results": result, "total_debit": totalDebit, "total_credit": totalCredit} );
    }).catch( function(err) {
        res.send(err);
    });
});

router.get('/list_accounts_name_by_agency', function(req, res, next) {
    
    var listRowArray = [];
    AccountsLedger.find({"agency_name": req.query.agency_name}).select('account_name').then( function(result) {

        result.forEach(element => {
            listRowArray.push(element.account_name);
        });
        
        listRowArray = listRowArray.filter((v, i, a) => a.indexOf(v) === i);

        res.send( {"results": listRowArray} );
    }).catch( function(err) {
        res.send(err);
    });
});

router.get('/accounts_name_by_agency_truck', function(req, res, next) {
    
    var listRowArray = [];

    matchCondition = {};

    if(req.query.agency_name) {
        matchCondition.agency_name = req.query.agency_name;
    }

    if(req.query.truck_no) {
        matchCondition.truck_no = req.query.truck_no;
    }

    AccountsLedger.find(matchCondition).select('account_name').then( function(result) {

        result.forEach(element => {
            listRowArray.push(element.account_name);
        });
        
        listRowArray = listRowArray.filter((v, i, a) => a.indexOf(v) === i);

        res.send( {"results": listRowArray} );
    }).catch( function(err) {
        res.send(err);
    });
});

router.get('/truck_by_agency', function(req, res, next) {
    
    var listRowArray = [];

    matchCondition = {};

    if(req.query.agency_name) {
        matchCondition.agency_name = req.query.agency_name;
    }

    AccountsLedger.find({"agency_name": req.query.agency_name}).select('truck_no').then( function(result) {

        result.forEach(element => {
            listRowArray.push(element.truck_no);
        });
        
        listRowArray = listRowArray.filter((v, i, a) => a.indexOf(v) === i);

        res.send( {"results": listRowArray} );
    }).catch( function(err) {
        res.send(err);
    });
});

router.get('/search_accounts_name_by_agency', (req, res) => {
    var regex = req.query.q;

    AccountsLedger.find({"account_name": new RegExp('' + regex, 'i'), "agency_name": req.query.agency_name}).select('account_name')
        .collation({ locale: "en" })
        .sort({account_name: 'asc'})
        .limit(50)
        .then((fromResults) => {
            accountsNameArray = [];
            mainResults = [];
            

            fromResults.forEach( r => {
                accountsNameArray.push(r.account_name);
            });

            accountsNameArray = accountsNameArray.filter((v, i, a) => a.indexOf(v) === i);

            accountsNameArray.forEach(an => {
                obj = {
                    "account_name": an
                };
                console.log("obj  >>>>>", obj);
                mainResults.push(obj);
            });

            res.send(mainResults);

        }).catch(err => {
            console.log(err);
            res.status(500).send({error: JSON.stringify(err)});
    });
});

router.delete('/delete_accounts_transactions_ledger', function(req, res, next) {

    AccountsLedger.deleteMany({sr_no: req.query.sr_no, document_type: req.query.document_type, agency_name: req.query.agency_name}).then( function(result) {
        res.send({"message": "Deleted..!"}); 
    }).catch( function(err) {
        res.send(err);
    });
});

module.exports = router;