var express = require('express');
var router = express.Router();
var DealFinalNew = require('../models/deal_final_new');
var PostLoad = require('../models/post_load');
var RequestLoad = require('../models/request_load');


router.post('/add', function(req, res, next) {

    var max_no;
    DealFinalNew.find({}).sort({deal_no:-1}).limit(1).select('deal_no').then( function(result) {
        if(result[0]) {
            var obj = result[0].toJSON();
            console.log("obj  >>>", obj.deal_no);
            max_no = obj.deal_no + 1;
            console.log("Find  >>>", max_no);
        } else {
            max_no = 1;
            console.log("NOT Find  >>>", max_no);
        }
        

        req.body.deal_no = max_no;
        var d = new DealFinalNew(req.body);
    
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

	DealFinalNew.find({}).then(function (result) {
        res.send({"results": result});
    }).catch(function(err){
        res.send(err);
    });
  
});

router.put('/update', function(req, res, next) {
    DealFinalNew.updateMany({"_id": req.query.id}, { $set : req.body} , {multi:true} ).then(function(updateResult) {   
        res.send({ "message": "DealFinalNew updated..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.delete('/delete', function(req, res, next) {
    DealFinalNew.deleteOne({"_id": req.query.id}).then(function(deleteResult) {   
        res.send({ "message": "Deleted..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.get('/max_deal_no', function(req, res, next) {
    var max_no;
    DealFinalNew.find({}).sort({deal_no:-1}).limit(1).select('deal_no').then( function(result) {
        if(result[0]) {
            var obj = result[0].toJSON();
            console.log("obj  >>>", obj.deal_no);
            max_no = obj.deal_no + 1;
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

router.put('/update_postload_status', function(req, res, next) {
    PostLoad.updateMany({"ticket_no": req.query.ticket_no}, { "status": req.body.status} , {multi:true} ).then(function(updateResult) {   
        res.send({ "message": "Post Load updated..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.put('/update_requestload_status', function(req, res, next) {
    RequestLoad.updateMany({"ticket_no": req.query.ticket_no}, { "status": req.body.status} , {multi:true} ).then(function(updateResult) {   
        res.send({ "message": "Request Load updated..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.get('/sorted_list', function(req, res, next) {

	DealFinalNew.find({}).sort({deal_no:-1}).then(function (result) {
        res.send({"results": result});
    }).catch(function(err){
        res.send(err);
    });
  
});

router.put('/update_document_verification', function (req, res, next) {
    DealFinalNew.updateMany({ "_id": req.query.id }, { "traffic_operations.document_verification": req.body.document_verification }, { multi: true }).then(function (updateResult) {
        res.send({ "message": "Document Verification updated..!" });
    }).catch(function (err) {
        res.send(err);
    });
});

router.put('/update_bank_details', function (req, res, next) {
    DealFinalNew.findOne({_id: req.query.id}).then(function (record) {
        if(!record.traffic_operations) {
            record.traffic_operations.bank_details=req.body;
           } else {
            record.traffic_operations.bank_details=req.body;
        }
        console.log(record.traffic_operations.bank_details);
        record.save(function (err, result) {
            console.log(err);
            res.send(result);
        });
    }).catch(function (err) {
        res.send(JSON.parse(JSON.stringify(err)));
    });
    
});

router.put('/update_pod', function (req, res, next) {
    DealFinalNew.findOne({_id: req.query.id}).then(function (record) {
        record.traffic_operations.pod_t_uploaded = req.body.traffic_operations.pod_t_uploaded;
        record.traffic_operations.pod_c_uploaded = req.body.traffic_operations.pod_c_uploaded;
        record.traffic_operations.pod_recived = req.body.traffic_operations.pod_recived;
        record.traffic_operations.submitted_by = req.body.traffic_operations.submitted_by;
        record.save(function (err, result) {
            console.log(err);
            res.send(result);
        });
    }).catch(function (err) {
        res.send(JSON.parse(JSON.stringify(err)));
    });
    
});


router.put('/update_receivable_cash', function (req, res, next) {
    DealFinalNew.findOne({_id: req.query.id}).then(function (record) {
 
        record.receivable_advance = req.body.receivable_advance;
     
       if(!record.receivable_advance) {
            record.receivable_advance.bank_details=req.body.receivable_advance;
           } else {
            record.receivable_advance=req.body.receivable_advance;
        }
 
        record.save(function (err, result) {
            console.log(err);
            res.send(result);
        });
    }).catch(function (err) {
        res.send(JSON.parse(JSON.stringify(err)));
    });
    
});


module.exports = router;
