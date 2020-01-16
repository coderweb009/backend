var express = require('express');
var router = express.Router();
var TransportDetails = require('../../../models/transport_details');
var crypto = require('crypto');

router.post('/add', function(req, res, next) {

    var max_no;
    var userPassword = crypto.createHash('sha1').update(req.body.password).digest('hex');
    req.body.password = userPassword;
    
    TransportDetails.find({}).sort({sr_no:-1}).limit(1).then( function(result) {
        if(result[0]) {
            max_no = result[0].sr_no + 1;
            console.log("FInd  >>>", max_no);
        } else {
            max_no = 1001;
            console.log("NOT FInd  >>>", max_no);
        }
        req.body.sr_no = max_no;

        var d = new TransportDetails(req.body);

        d.save( function(err, save) {   
            console.log("err >>", err);
            console.log("save >>", save);
            res.send({"message": "Added...!"});
        });
    }).catch( function(err) {
        res.send(err);
    });
});

router.put('/login', function(req, res, next) {
    var userPassword = crypto.createHash('sha1').update(req.body.password).digest('hex');
    
    TransportDetails.find({"omobile_no_1": req.body.mobile_no, "password": userPassword}).then( function(result) {
        if (result[0]) {
            res.send( {"results": result[0]} );
        } else {
            res.send( {"message": "invalid username/password...!"} );
        }
        
    }).catch( function(err) {
        res.send(err);
    });
});

router.get('/list', function(req, res, next) {
    
    TransportDetails.find({}).then( function(result) {
        res.send( {"results": result} );
    }).catch( function(err) {
        res.send(err);
    });
}); 

router.put('/update', function(req, res, next) {
    TransportDetails.updateMany({"_id": req.query.id}, { $set : req.body} , {multi:true} ).then(function(updateResult) {   
        res.send({ "message": "Transport updated..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.delete('/delete', function(req, res, next) {
    TransportDetails.deleteOne({"_id": req.query.id}).then(function(deleteResult) {   
        res.send({ "message": "Transport deleteed..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

module.exports = router;