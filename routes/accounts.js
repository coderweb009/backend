var express = require('express');
var router = express.Router();
var Accounts = require('../models/accounts');

router.post('/add', function(req, res, next) {
    
    var d = new Accounts(req.body);

    d.save(function(err, save) {
        console.log("err >>", err);
        console.log("save >>", save);
        res.send({"message": "Added..!"}); 
    });

});

router.get('/list', function(req, res, next) {
    
    Accounts.find({}).then( function(result) {
        res.send( {"results": result} );
    }).catch( function(err) {
        res.send(err);
    });
});

module.exports = router;