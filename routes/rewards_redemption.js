var express = require('express');
var router = express.Router();
var RewardsRedemption = require('../models/rewards_redemption.js');

router.post('/add', function(req, res, next) {

    var d = new RewardsRedemption(req.body);
    d.save(function(err, save) {
        console.log("err >>", err);
        console.log("save >>", save);
        res.send({"message": "Added..!"}); 
    });

});

router.get('/max_trno', function(req, res, next) {

    var max_no;
    RewardsRedemption.find({}).sort({trno:-1}).limit(1).then( function(result) {
        if(result[0]) {
            max_no = result[0].trno + 1;
            console.log("FInd  >>>", max_no);
        } else {
            max_no = 1;
            console.log("NOT FInd  >>>", max_no);
        }

        res.send({"max_trno": max_no}); 
    }).catch( function(err) {
        res.send(err);
    });

});

router.get('/list', function(req, res, next) {
    RewardsRedemption.find({}).then(function(result) {   
        res.send({ "results": result}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.put('/update', function(req, res, next) {
    RewardsRedemption.updateMany({"_id": req.query.id}, { $set : req.body} , {multi:true} ).then(function(updateResult) {   
        res.send({ "message": "Updated..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.delete('/delete', function(req, res, next) {
    RewardsRedemption.deleteOne({"_id": req.query.id}).then(function(deleteResult) {   
        res.send({ "message": "Deleted..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});



module.exports = router;