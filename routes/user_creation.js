var express = require('express');
var router = express.Router();
var UserPermission = require('../models/user_permission');
var UserCreation = require('../models/user_creation');
var crypto = require('crypto');

router.post('/add_permission', function(req, res, next) {
    
    var d = new UserPermission(req.body);
    d.save(function(err, save) {
        console.log("err >>", err);
        console.log("save >>", save);
        res.send({"message": "Added..!"}); 
    });

});

router.get('/list_permission', function(req, res, next) {
    
    UserPermission.find({}).then( function(result) {
        res.send( {"result": result} );
    }).catch( function(err) {
        res.send(err);
    });
});

router.post('/add_user', function(req, res, next) {

    var userPassword = crypto.createHash('sha1').update(req.body.password).digest('hex');
    req.body.password = userPassword;
    
    var d = new UserCreation(req.body);
    d.save(function(err, save) {
        console.log("err >>", err);
        console.log("save >>", save);
        res.send({"message": "Added..!"}); 
    });

});

router.put('/login', function(req, res, next) {
    var userPassword = crypto.createHash('sha1').update(req.body.password).digest('hex');
    
    // console.log("user_name >>>>", req.body.user_name);
    // console.log("userPassword >>>>", userPassword);
    UserCreation.find({"user_name": req.body.user_name, "password": userPassword}).then( function(result) {
        if (result[0]) {
            res.send( {"result": result[0]} );
        } else {
            res.send( {"message": "invalid username/password...!"} );
        }
        
    }).catch( function(err) {
        res.send(err);
    });
});

router.put('/update', function(req, res, next) {
    UserCreation.updateMany({"_id": req.query.id}, { $set : req.body} , {multi:true} ).then(function(updateResult) {   
        res.send({ "message": "User updated..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.delete('/delete', function(req, res, next) {
    UserCreation.deleteOne({"_id": req.query.id}).then(function(deleteResult) {   
        res.send({ "message": "User deleted..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.get('/users_list', function(req, res, next) {
    UserCreation.find({}).then(function(result) {   
        res.send({ "results": result}); 
    }).catch(function(err) {
        res.send(err);
    });
});


module.exports = router;