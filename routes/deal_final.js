var express = require('express');
var router = express.Router();
var DealFinal = require('../models/deal_final');


router.post('/add', function(req, res, next) {

    
    
    var max_no;
    DealFinal.find({}).sort({sr_no:-1}).limit(1).select('sr_no').then( function(result) {
        if(result[0]) {
            var obj = result[0].toJSON();
            console.log("obj  >>>", obj.sr_no);
            max_no = obj.sr_no + 1;
            console.log("Find  >>>", max_no);
        } else {
            max_no = 1;
            console.log("NOT Find  >>>", max_no);
        }
        

        req.body.sr_no = max_no;
        var d = new DealFinal(req.body);
    
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

	DealFinal.find({}).then(function (result) {
        res.send({"results": result});
    }).catch(function(err){
        res.send(err);
    });
  
});

router.put('/update', function(req, res, next) {
    DealFinal.updateMany({"_id": req.query.id}, { $set : req.body} , {multi:true} ).then(function(updateResult) {   
        res.send({ "message": "DealFinal updated..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.delete('/delete', function(req, res, next) {
    DealFinal.deleteOne({"_id": req.query.id}).then(function(deleteResult) {   
        res.send({ "message": "Deleted..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.get('/max_sr_no', function(req, res, next) {
    var max_no;
    DealFinal.find({}).sort({sr_no:-1}).limit(1).select('sr_no').then( function(result) {
        if(result[0]) {
            var obj = result[0].toJSON();
            console.log("obj  >>>", obj.sr_no);
            max_no = obj.sr_no + 1;
            console.log("Find  >>>", max_no);
        } else {
            max_no = 1;
            console.log("NOT Find  >>>", max_no);
        }
        
        res.send({"max_no": max_no}); 
    }).catch( function(err) {
        res.send(err);
    });


});




module.exports = router;
