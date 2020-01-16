var express = require('express');
var router = express.Router();
var DriverDetails = require('../models/driver_details');
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
var upload = multer({storage: storage});
// upload.fields([{ name: 'driver_photo', maxCount: 1 }, { name: 'licence_photo', maxCount: 1 }]);


router.post('/add', upload.any(), function(req, res, next) {

    console.log(req.files);

    req.files.forEach(r => {
        
        // var value = r.path;
        // value = value.replace(/public\\/g, '');
        // value = value.replace(/\\/g, "/");

        var fullUrl = req.protocol + '://' + req.get('host') + "/uploads/" + r.filename;
        var imageName = r.fieldname;
        req.body[imageName] = fullUrl;
        
        console.log("fullUrl  >>>>>", fullUrl);
    });

    console.log("before  >>>>>", req.body.permanent_address);

    var permanent_address = JSON.parse(req.body.permanent_address);
    var present_address = JSON.parse(req.body.present_address);

    var employers_history = JSON.parse(req.body.employers_history);
    var payment_history = JSON.parse(req.body.payment_history);

    var route_desired = JSON.parse(req.body.route_desired);

    

    req.body.permanent_address = permanent_address;
    req.body.present_address = present_address;

    req.body.employers_history = employers_history;
    req.body.payment_history = payment_history;

    req.body.route_desired = route_desired;

    // console.log("req.body  >>>>>", req.body);
    
    var d = new DriverDetails(req.body);

    d.save( function(err, save) {   
        console.log("err >>", err);
        console.log("save >>", save);
        res.send({"message": "Added...!"});
    });
    
});

router.get('/list', function(req, res, next) {
    
    DriverDetails.find({}).then( function(result) {
        res.send( {"result": result} );
    }).catch( function(err) {
        res.send(err);
    });
}); 

router.get('/get_by_id', function(req, res, next) {
    
    DriverDetails.find({"_id": req.query.id}).then( function(result) {
        res.send( {"result": result} );
    }).catch( function(err) {
        res.send(err);
    });
});

router.put('/update', upload.any(), function(req, res, next) {

    req.files.forEach(r => {
        var fullUrl = req.protocol + '://' + req.get('host') + "/uploads/" + r.filename;
        var imageName = r.fieldname;
        req.body[imageName] = fullUrl;

        console.log("fullUrl  >>>>>", fullUrl);
    });

    var permanent_address = JSON.parse(req.body.permanent_address);
    var present_address = JSON.parse(req.body.present_address);
    var route_desired = JSON.parse(req.body.route_desired);

    req.body.permanent_address = permanent_address;
    req.body.present_address = present_address;
    req.body.route_desired = route_desired;

    var employers_history = JSON.parse(req.body.employers_history);
    var payment_history = JSON.parse(req.body.payment_history);

    req.body.employers_history = employers_history;
    req.body.payment_history = payment_history;
    
    console.log("req.body  >>>>>", req.body);

    DriverDetails.updateMany({"_id": req.query.id}, { $set : req.body} , {multi:true} ).then(function(updateResult, err) {   
        console.log("err  >>>>>", err);
        res.send({ "message": "Driver updated..!"}); 
        
    }).catch(function(err) {
        res.send(err);
    });
});

router.delete('/delete', function(req, res, next) {
    DriverDetails.deleteOne({"_id": req.query.id}).then(function(deleteResult) {   
        res.send({ "message": "Driver deleted..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.get('/search_driver', (req, res) => {
    var regex = req.query.q;
    DriverDetails.find({"driver_name": new RegExp('' + regex, 'i')}).select('driver_name')
        .collation({ locale: "en" })
        .sort({driver_name: 'asc'})
        .limit(50)
        .then((fromResults) => {
            res.send(fromResults);
        }).catch(err => {
            console.log(err);
            res.status(500).send({error: JSON.stringify(err)});
    });
});

router.get('/get_by_driver', function(req, res, next) {
    
    DriverDetails.findOne({"driver_name": req.query.driver}).then( function(result) {
        res.send( result );
    }).catch( function(err) {
        res.send(err);
    });
});


module.exports = router;