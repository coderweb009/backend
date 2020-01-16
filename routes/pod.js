var express = require('express');
var router = express.Router();
var POD = require('../models/pod');
var DealFinal = require('../models/deal_final');
var DealFinalNew = require('../models/deal_final_new');
var PostLoad = require('../models/post_load');
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

    console.log("Body Data  >>>>>", req.body);
    
    var d = new POD(req.body);

    d.save( function(err, save) {   
        console.log("err >>", err);
        console.log("save >>", save);
        res.send({"message": "Added...!"});
    });
    
});

router.get('/list', function(req, res, next) {
    
    POD.find({}).then( function(result) {
        res.send( {"result": result} );
    }).catch( function(err) {
        res.send(err);
    });

});

router.get('/list_deal_no', function(req, res, next) {
    
    DealFinal.find({"transporter_name": req.query.transporter_name, "truck_no": req.query.truck_no}).then( function(result) {
        res.send( {"results": result} );
    }).catch( function(err) {
        res.send(err);
    });
    
});

router.get('/list_new_deal_no', function(req, res, next) {
    // "transporter_name": req.query.transporter_name, 
    DealFinalNew.find({"truck_no": req.query.truck_no}).then( function(result) {
        res.send( {"results": result} );
    }).catch( function(err) {
        res.send(err);
    });
    
});

router.get('/post_load_by_ticket_no', function(req, res, next) {
    
    PostLoad.find({"ticket_no": req.query.ticket_no}).then( function(result) {
        res.send( {"results": result} );
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


    POD.updateMany({"_id": req.query.id}, { $set : req.body} , {multi:true} ).then(function(updateResult, err) {   
        console.log("err  >>>>>", err);
        res.send({ "message": "POD updated..!"}); 
        
    }).catch(function(err) {
        res.send(err);
    });

});

router.delete('/delete', function(req, res, next) {
    POD.deleteOne({"_id": req.query.id}).then(function(deleteResult) {   
        res.send({ "message": "POD deleted..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.get('/list_by_truck_no', function(req, res, next) {
    
    POD.find({truck_no: req.query.truck_no}).then( function(result) {
        res.send( {"result": result} );
    }).catch( function(err) {
        res.send(err);
    });

});

module.exports = router;