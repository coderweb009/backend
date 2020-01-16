var express = require('express');
var router = express.Router();
var Employee = require('../models/employees');

router.post('/add', function(req, res, next) {

    var d = new Employee(req.body);
    d.save(function(err, save) {
        console.log("err >>", err);
        console.log("save >>", save);
        res.send({"message": "Added..!"}); 
    });

});

router.get('/list', function(req, res, next) {
    Employee.find({}).then(function(result) {   
        res.send({ "results": result}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.put('/update', function(req, res, next) {
    Employee.updateMany({"_id": req.query.id}, { $set : req.body} , {multi:true} ).then(function(updateResult) {   
        res.send({ "message": "Employee updated..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.delete('/delete', function(req, res, next) {
    Employee.deleteOne({"_id": req.query.id}).then(function(deleteResult) {   
        res.send({ "message": "Employee deleted..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.get('/list_by_agency', function(req, res, next) {
    Employee.find({"agency_name": req.query.agency_name}).select('first_name agency_name').then(function(result) {   
        res.send({ "results": result}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.get('/rewards_by_first_name', function(req, res, next) {
    Employee.findOne({"first_name": req.query.first_name}).select('reward_points').then(function(result) {   
        res.send(result); 
    }).catch(function(err) {
        res.send(err);
    });
});

module.exports = router;