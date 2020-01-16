var express = require('express');
var router = express.Router();
var TruckType = require('../models/trucktype');


router.post('/add', function(req, res, next) {

	var d = new TruckType(req.body);
    
    d.save(function (err, save) {
       console.log("err  >>>",err);
       console.log("save  >>>",save);
       res.send({"message": "Added..!"}); 
    });
  
});

router.get('/get_list', function(req, res, next) {

    TruckType.find({}).then(function (result) {
        res.send({"results": result});
    }).catch(function(err){
        res.send(err);
    });

});

module.exports = router;
