var express = require('express');
var router = express.Router();
var Material = require('../../models/material');
var CancelMaster = require('../../models/cancel_master');
var PaymentMode = require('../../models/payment_mode');
var PaymentType = require('../../models/payment_type');
var AccountTypes = require('../../models/account_types');
var AccountsCategory = require('../../models/accounts_category');



router.get('/search_account_types', (req, res) => {
    var regex = req.query.q;
    AccountTypes.find({"name": new RegExp('' + regex, 'i')}).select('name')
        .collation({ locale: "en" })
        .sort({name: 'asc'})
        .limit(50)
        .then((fromResults) => {
            res.send(fromResults);
        }).catch(err => {
            console.log(err);
            res.status(500).send({error: JSON.stringify(err)});
    });
});

router.get('/list_account_types', function(req, res, next) {

	AccountTypes.find({}).then(function (result) {
        res.send({"results": result});
    }).catch(function(err){
        res.send(err);
    });
  
});

router.get('/search_accounts_category', (req, res) => {
    var regex = req.query.q;
    AccountsCategory.find({"name": new RegExp('' + regex, 'i')}).select('name')
        .collation({ locale: "en" })
        .sort({name: 'asc'})
        .limit(50)
        .then((fromResults) => {
            res.send(fromResults);
        }).catch(err => {
            console.log(err);
            res.status(500).send({error: JSON.stringify(err)});
    });
});

router.get('/list_accounts_category', function(req, res, next) {

	AccountsCategory.find({}).then(function (result) {
        res.send({"results": result});
    }).catch(function(err){
        res.send(err);
    });
  
});

router.post('/add_material', function(req, res, next) {

	var d = new Material(req.body);
    
    d.save(function (err, save) {
       console.log("err  >>>",err);
       console.log("save  >>>",save);
       res.send({"message": "Added..!"}); 
    });
  
});

router.get('/list_material', function(req, res, next) {

	Material.find({}).then(function (result) {
        res.send({"results": result});
    }).catch(function(err){
        res.send(err);
    });
  
});

// --------- cancellation -----------

router.post('/add_cancellation', function(req, res, next) {

	var d = new CancelMaster(req.body);
    
    d.save(function (err, save) {
       console.log("err  >>>",err);
       console.log("save  >>>",save);
       res.send({"message": "Added..!"}); 
    });
  
});

router.get('/get_cancellation', function(req, res, next) {

	CancelMaster.find({"name": req.query.name}).then(function (result) {
        res.send({"results": result});
    }).catch(function(err){
        res.send(err);
    });
  
});

router.put('/update_cancellation', function(req, res, next) {
    CancelMaster.updateMany({"_id": req.query.id}, { $set : req.body} , {multi:true} ).then(function(updateResult) {   
        res.send({ "message": "Updated..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.delete('/delete_cancellation', function(req, res, next) {
    CancelMaster.deleteOne({"_id": req.query.id}).then(function(deleteResult) {   
        res.send({ "message": "Deleted..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

// --------- payment_type -----------
router.post('/add_payment_type', function(req, res, next) {

	var d = new PaymentType(req.body);
    
    d.save(function (err, save) {
       console.log("err  >>>",err);
       console.log("save  >>>",save);
       res.send({"message": "Added..!"}); 
    });
  
});

router.get('/get_payment_type', function(req, res, next) {

	PaymentType.find({}).then(function (result) {
        res.send({"results": result});
    }).catch(function(err){
        res.send(err);
    });
  
});

router.put('/update_payment_type', function(req, res, next) {
    PaymentType.updateMany({"_id": req.query.id}, { $set : req.body} , {multi:true} ).then(function(updateResult) {   
        res.send({ "message": "Updated..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.delete('/delete_payment_type', function(req, res, next) {
    PaymentType.deleteOne({"_id": req.query.id}).then(function(deleteResult) {   
        res.send({ "message": "Deleted..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});


// --------- payment_mode -----------

router.post('/add_payment_mode', function(req, res, next) {

	var d = new PaymentMode(req.body);
    
    d.save(function (err, save) {
       console.log("err  >>>",err);
       console.log("save  >>>",save);
       res.send({"message": "Added..!"}); 
    });
  
});

router.get('/get_payment_mode', function(req, res, next) {

	PaymentMode.find({}).then(function (result) {
        res.send({"results": result});
    }).catch(function(err){
        res.send(err);
    });
});

router.put('/update_payment_mode', function(req, res, next) {
    PaymentMode.updateMany({"_id": req.query.id}, { $set : req.body} , {multi:true} ).then(function(updateResult) {   
        res.send({ "message": "Updated..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.delete('/delete_payment_mode', function(req, res, next) {
    PaymentMode.deleteOne({"_id": req.query.id}).then(function(deleteResult) {   
        res.send({ "message": "Deleted..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});


// --------- account_type -----------

router.post('/add_account_type', function(req, res, next) {

	var d = new AccountTypes(req.body);
    
    d.save(function (err, save) {
       console.log("err  >>>",err);
       console.log("save  >>>",save);
       res.send({"message": "Added..!"}); 
    });
  
});

router.get('/list_account_type', function(req, res, next) {

	AccountTypes.find({}).then(function (result) {
        res.send({"results": result});
    }).catch(function(err){
        res.send(err);
    });
});

router.put('/update_account_type', function(req, res, next) {
    AccountTypes.updateMany({"_id": req.query.id}, { $set : req.body} , {multi:true} ).then(function(updateResult) {   
        res.send({ "message": "Updated..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.delete('/delete_account_type', function(req, res, next) {
    AccountTypes.deleteOne({"_id": req.query.id}).then(function(deleteResult) {   
        res.send({ "message": "Deleted..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});


// --------- _accounts_category -----------

router.post('/add_account_category', function(req, res, next) {

	var d = new AccountsCategory(req.body);
    
    d.save(function (err, save) {
       console.log("err  >>>",err);
       console.log("save  >>>",save);
       res.send({"message": "Added..!"}); 
    });
  
});

router.get('/list_account_category', function(req, res, next) {

	AccountsCategory.find({}).then(function (result) {
        res.send({"results": result});
    }).catch(function(err){
        res.send(err);
    });
});

router.put('/update_account_category', function(req, res, next) {
    AccountsCategory.updateMany({"_id": req.query.id}, { $set : req.body} , {multi:true} ).then(function(updateResult) {   
        res.send({ "message": "Updated..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.delete('/delete_account_category', function(req, res, next) {
    AccountsCategory.deleteOne({"_id": req.query.id}).then(function(deleteResult) {   
        res.send({ "message": "Deleted..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});


module.exports = router;
