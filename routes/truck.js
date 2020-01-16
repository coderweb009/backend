var express = require('express');
var router = express.Router();
var Trucks = require('../models/truck');
var request = require('request');

router.post('/add', function(req, res, next) {
    
    var d = new Trucks(req.body);

    d.save(function(err, save) {
        console.log("err >>", err);
        console.log("save >>", save);
        res.send({"message": "Added..!"}); 
    });

});

router.get('/list', function(req, res, next) {
    
    Trucks.find({}).populate('transport_id driver_id').then( function(result) {
        res.send( {"result": result} );
    }).catch( function(err) {
        res.send(err);
    });
});

router.put('/update', function(req, res, next) {
    Trucks.updateMany({"_id": req.query.id}, { $set : req.body} , {multi:true} ).then(function(updateResult) {   
        res.send({ "message": "Truck updated..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.delete('/delete', function(req, res, next) {
    Trucks.deleteOne({"_id": req.query.id}).then(function(deleteResult) {   
        res.send({ "message": "Truck deleted..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.get('/search_truck', (req, res) => {
    var regex = req.query.q;
    Trucks.find({"truck_no": new RegExp('' + regex, 'i')}).select('truck_no')
        .collation({ locale: "en" })
        .sort({truck_no: 'asc'})
        .limit(50)
        .then((fromResults) => {
            res.send(fromResults);
        }).catch(err => {
            console.log(err);
            res.status(500).send({error: JSON.stringify(err)});
    });
});

router.get('/details', function(req, res, next) {
    
    Trucks.find({"truck_no": req.query.truck_no}).populate('transport_id driver_id').then( function(result) {
        res.send( {"result": result} );
    }).catch( function(err) {
        res.send(err);
    });
});

router.get('/send_otp', function (req, res, next) {

    var mobile_no = req.query.mobile_no ;
    var otp = req.query.otp;
    request('http://vas.mobilogi.com/api.php?username=IndTkg&password=pass123&route=1&sender=IndTkg&mobile[]=' + mobile_no + '&message[]=' + otp, function (error, response, body) {
        console.log('error: >>>', error); 
        console.log('statusCode: >>>', response.statusCode); 
        res.send({ 'response': response.body, 'statusCode': response.statusCode});
    });
});

module.exports = router;