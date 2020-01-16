var express = require('express');
var router = express.Router();
var PostLoad = require('../models/post_load');

router.post('/add', function(req, res, next) {
    var max_no;
    PostLoad.find({}).sort({ticket_no:-1}).limit(1).then( function(result) {
        if(result[0]) {
            max_no = result[0].ticket_no + 1;
            console.log("FInd  >>>", max_no);
        } else {
            max_no = 1;
            console.log("NOT FInd  >>>", max_no);
        }
        req.body.ticket_no = max_no;
        var d = new PostLoad(req.body);
        
        d.save(function (err, save) {
           console.log("err  >>>",err);
           console.log("save  >>>",save);
           res.send({"message": "Added..!"}); 
        });
    }).catch( function(err) {
        res.send(err);
    });


});

router.get('/list', function(req, res, next) {

    PostLoad.find({"status": { $nin: ["Cancel", "Deal Final"] }}).sort({ticket_no: -1}).then( function(result) {
        res.send({"results": result});
    }).catch( function(err) {
        res.send(err);
    });
});

router.put('/update', function(req, res, next) {
    PostLoad.updateMany({"_id": req.query.id}, { $set : req.body} , {multi:true} ).then(function(updateResult) {   
        res.send({ "message": "Post Load updated..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.delete('/delete', function(req, res, next) {
    PostLoad.deleteOne({"_id": req.query.id}).then(function(deleteResult) {   
        res.send({ "message": "Post Load deleted..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.get('/get_by_id', function(req, res, next) {

	PostLoad.find({"ticket_no": req.query.id, "status": { $nin: ["Cancel", "Deal Final"] }}).then(function (result) {
        res.send({"results": result});
    }).catch(function(err){
        res.send(err);
    });
  
});

router.get('/search_from', (req, res) => {
    var regex = req.query.q;
    PostLoad.find({"from": new RegExp('' + regex, 'i')}).select('from')
        .collation({ locale: "en" })
        .sort({from: 'asc'})
        .limit(50)
        .then((fromResults) => {

            var citiesArray = [];
            var mainArray = [];

            fromResults.forEach( r => {
                citiesArray.push(r.from);
            });

            citiesArray = citiesArray.filter((v, i, a) => a.indexOf(v) === i);

            citiesArray.forEach(c => {
                obj = { "from": c };
                console.log("obj  >>>>>", obj);
                mainArray.push(obj);
            });

            res.send(mainArray);

            // res.send(fromResults);
        }).catch(err => {
            console.log(err);
            res.status(500).send({error: JSON.stringify(err)});
    });
});

router.get('/search_to', (req, res) => {
    var regex = req.query.q;
    PostLoad.find({"destinations.to": new RegExp('' + regex, 'i')}).collation({ locale: "en" })
        .sort({"destinations.to": 'asc'})
        .limit(50)
        .then((fromResults) => {
            
            var citiesArray = [];
            var mainArray = [];
    
            fromResults.forEach( r => {
                r.destinations.forEach( a => {
                    citiesArray.push(a.to);
                });
            });

            citiesArray = citiesArray.filter((v, i, a) => a.indexOf(v) === i);

            citiesArray.forEach(c => {
                obj = { "value": c };
                console.log("obj  >>>>>", obj);
                mainArray.push(obj);
            });

            res.send(mainArray);
            // res.send(fromResults);

        }).catch(err => {
            console.log(err);
            res.status(500).send({error: JSON.stringify(err)});
    });
});

router.put('/update_status', function(req, res, next) {
    PostLoad.updateMany({"_id": req.query.id}, { "status": req.body.status} , {multi:true} ).then(function(updateResult) {   
        res.send({ "message": "Post Load updated..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.get('/get_id_by_ticket_no', function(req, res, next) {

	PostLoad.find({"ticket_no": req.query.id }).then(function (result) {
        res.send({"results": result});
    }).catch(function(err){
        res.send(err);
    });
  
});

module.exports = router;