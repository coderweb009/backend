var express = require('express');
var router = express.Router();
var RequestLoad = require('../models/request_load');
var Company = require('../models/company');
var Trucks = require('../models/truck');
var async = require('async');

router.post('/add', function(req, res, next) {

    var max_no;
    RequestLoad.find({}).sort({ticket_no:-1}).limit(1).then( function(result) {
        if(result[0]) {
            max_no = result[0].ticket_no + 1;
            console.log("FInd  >>>", max_no);
        } else {
            max_no = 1;
            console.log("NOT FInd  >>>", max_no);
        }
        req.body.ticket_no = max_no;
        var d = new RequestLoad(req.body);
        
        d.save(function (err, save) {
        console.log("err  >>>",err);
        console.log("save  >>>",save);
        res.send({"message": "Added..!"}); 
        });
    }).catch( function(err) {
        res.send(err);
    });
  
});

router.get('/list', function(req, res, next) {

    RequestLoad.find({"status": { $nin: ["Cancel", "Deal Final"] }}).sort({ticket_no: -1}).then(function (result) {
        res.send({"results": result});
    }).catch(function(err){
        res.send(err);
    });

});

router.get('/list_company', function(req, res, next) {
    var rlFrom = "";
    var rlTo = [];
    var mainArray = [];

    var getCompany = function(from, to) {
        return function (callback) {
            Company.find({"location": from, "company_requirement.to_destination": to}).then(function (CompanyResult) {
                
                if(CompanyResult[0]) {
                    CompanyResult.forEach( a => {
                        var obj = {
                            "company_name": a.company_name,
                            "from": from,
                            "to": to
                        };
                        mainArray.push(obj);
            
                    });
                } 
                callback(false, CompanyResult);
            }).catch(function(err){
                callback(err, null);
            })
        };
    };

    RequestLoad.findOne({"_id": req.query.id}).then(function (result) {
        rlFrom = result.from;
        result.destinations.forEach(r => {
            rlTo.push(getCompany(rlFrom, r.to));
        });

        async.parallel(rlTo, function(err, asyncResults) {
            
            var uniqueResult = mainArray.reduce((unique, o) => {
                if(!unique.some(obj => obj.company_name === o.company_name)) {
                  unique.push(o);
                }
                return unique;
            },[]);

            res.send(uniqueResult)
        });

    }).catch(function(err){
        res.send(err);
    });

});

router.put('/update_negotiate', function(req, res, next) {
    RequestLoad.updateMany({"_id": req.query.id}, { $set:{ "negotiate": req.body.negotiate}} , {multi:true} ).then(function(updateResult) {   
        res.send({ "message": "Request Load Updated..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.get('/list_negotiate_details', function(req, res, next) {
    RequestLoad.find({"_id": req.query.id}).then(function (result) {

        var mainArray = [];

        result.forEach( r => {
            r.negotiate.forEach( n => {
                mainArray.push(n);
            });
        });
        res.send({"results": mainArray});
    }).catch(function(err){
        res.send(err);
    });

});

router.put('/update', function(req, res, next) {
    RequestLoad.updateMany({"_id": req.query.id}, { $set:{
        "date": req.body.date,
        "agency_name": req.body.agency_name,
        "transporter_name": req.body.transporter_name,
        "truck_no": req.body.truck_no,
        "from": req.body.from,
        "loading_place": req.body.loading_place,
        "status": req.body.status,
        "cancel_reasons": req.body.cancel_reasons,
        "destinations": [],
        "salesman": req.body.salesman
    }} , {multi:true} ).then(function(updateResult) { 
            
        RequestLoad.updateMany({"_id": req.query.id}, { $set:{ "destinations": req.body.destinations}} , {multi:true} ).then(function(updateResult) {   
            res.send({ "message": "Request Load Updated..!"}); 
        }).catch(function(err) {
            res.send(err);
        });        
    }).catch(function(err) {
        res.send(err);
    });
});

router.delete('/delete', function(req, res, next) {
    RequestLoad.deleteOne({"_id": req.query.id}).then(function(deleteResult) {   
        res.send({ "message": "RequestLoad deleted..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.get('/list_trucks_availability', function(req, res, next) {

    var mainArray = [];

    var getTrucks = function(truck_no, Data) {
        return function (callback) {
            console.log("truckNo >>>>", truck_no);
            Trucks.find({"truck_no": truck_no}).then(function (TruckResult) {
                // console.log("TruckResult >>>>", TruckResult);
                if(TruckResult[0]) {
                    TruckResult.forEach( a => {
                        var obj = {
                            "_id": Data._id,
                            "ticket_no": Data.ticket_no,
                            "date": Data.date,
                            "agency_name": Data.agency_name,
                            "transporter_name": Data.transporter_name,
                            "truck_no": Data.truck_no,
                            "from": Data.from,
                            "destinations": Data.destinations,
                            "negotiate":Data.negotiate,
                            "truck_no": a.truck_no,
                            "type": a.type,
                            "capacity": a.capacity
                        };
                        // console.log("DATA >>>>", obj);

                        mainArray.push(obj);
            
                    });
                } 
                callback(false, TruckResult);
            }).catch(function(err){
                callback(err, null);
            })
        };
    };

    RequestLoad.find({"status": { $nin: ["Cancel", "Deal Final"] }}).then(function (result) {
        
        var loadsArray = [];
        result.forEach(r => {
            loadsArray.push(getTrucks(r.truck_no, r));
        });

        async.parallel(loadsArray, function(err, asyncResults) {
            res.send({"results": mainArray});
        });
    }).catch(function(err){
        res.send(err);
    });

});

router.get('/get_by_id', function(req, res, next) {

	RequestLoad.find({"ticket_no": req.query.id, "status": { $nin: ["Cancel", "Deal Final"] }}).then(function (result) {
        res.send({"results": result});
    }).catch(function(err){
        res.send(err);
    });
  
});

router.get('/search_from', (req, res) => {
    var regex = req.query.q;
    RequestLoad.find({"from": new RegExp('' + regex, 'i')}).select('from')
        .collation({ locale: "en" })
        .sort({from: 'asc'})
        .limit(50)
        .then((fromResults) => {
            var citiesArray = [];
            var mainArray = [];

            fromResults.forEach( r => {
                citiesArray.push(r.from);
            });

            citiesArray = citiesArray.filter((v, i, a) => a.indexOf(v) === i);

            citiesArray.forEach(c => {
                obj = { "from": c };
                console.log("obj  >>>>>", obj);
                mainArray.push(obj);
            });

            res.send(mainArray);
            //res.send(fromResults);
        }).catch(err => {
            console.log(err);
            res.status(500).send({error: JSON.stringify(err)});
    });
});

router.get('/search_to', (req, res) => {
    var regex = req.query.q;
    RequestLoad.find({"destinations.to": new RegExp('' + regex, 'i')}).collation({ locale: "en" })
        .sort({"destinations.to": 'asc'})
        .limit(50)
        .then((fromResults) => {
            
            var citiesArray = [];
            var mainArray = [];
    
            fromResults.forEach( r => {
                r.destinations.forEach( a => {
                    citiesArray.push(a.to);
                });
            });

            citiesArray = citiesArray.filter((v, i, a) => a.indexOf(v) === i);

            citiesArray.forEach(c => {
                obj = { "value": c };
                console.log("obj  >>>>>", obj);
                mainArray.push(obj);
            });

            res.send(mainArray);
            // res.send(fromResults);

        }).catch(err => {
            console.log(err);
            res.status(500).send({error: JSON.stringify(err)});
    });
});

router.put('/update_status', function(req, res, next) {
    RequestLoad.updateMany({"_id": req.query.id}, { "status": req.body.status} , {multi:true} ).then(function(updateResult) {   
        res.send({ "message": "Post Load updated..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.get('/get_id_by_ticket_no', function(req, res, next) {

	RequestLoad.find({"ticket_no": req.query.id }).then(function (result) {
        res.send({"results": result});
    }).catch(function(err){
        res.send(err);
    });
  
});

module.exports = router;
