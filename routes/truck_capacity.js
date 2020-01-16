var express = require('express');
var router = express.Router();
var TruckCapacity = require('../models/truck_capacity');

router.post('/add', function(req, res, next) {

    req.body.forEach(obj => {
        var d = new TruckCapacity(obj);

        d.save( function(err, save) {
            console.log("err  >>>",err);
            console.log("save  >>>",save);
        });        
    });
    
    res.send({"message": "Added..!"}); 
});

router.get('/list_capacity_of_truck', function(req, res, next){ 

    TruckCapacity.find({"truck_type_id": req.query.truck_type_id}).then( function(result) {
        var mainArray = [];
        result.forEach( r => {
            var obj = {
                "truck_type_id": r.truck_type_id,
                "capacity": r.capacity
            }
            mainArray.push(obj);
        });
        res.send({ "results": mainArray });
    }).catch( function(err){
        res.send(err);
    });

});

module.exports = router;