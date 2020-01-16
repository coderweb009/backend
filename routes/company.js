var express = require('express');
var router = express.Router();
var Company = require('../models/company');


router.post('/add', function(req, res, next) {

	var d = new Company(req.body);
    
    d.save(function (err, save) {
       console.log("err  >>>",err);
       console.log("save  >>>",save);
       res.send({"message": "Added..!"}); 
    });
  
});

router.get('/list', function(req, res, next) {

	Company.find({}).then(function (result) {
        res.send({"results": result});
    }).catch(function(err){
        res.send(err);
    });
  
});

router.put('/update', function(req, res, next) {
    Company.updateMany({"_id": req.query.id}, { $set : req.body} , {multi:true} ).then(function(updateResult) {   
        res.send({ "message": "Company updated..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.get('/search_company', (req, res) => {
    var regex = req.query.q;
    Company.find({"company_name": new RegExp('' + regex, 'i')}).select('company_name')
        .collation({ locale: "en" })
        .sort({company_name: 'asc'})
        .limit(50)
        .then((fromResults) => {
            res.send(fromResults);
        }).catch(err => {
            console.log(err);
            res.status(500).send({error: JSON.stringify(err)});
    });
});

router.delete('/delete', function(req, res, next) {
    Company.deleteOne({"_id": req.query.id}).then(function(deleteResult) {   
        res.send({ "message": "Company deleted..!"}); 
    }).catch(function(err) {
        res.send(err);
    });
});

router.get('/list_cities', function(req, res, next) {

    Company.find({}).sort("address.city").then( function(result) {
        var citiesArray = [];
        var mainArray = [];

        result.forEach( r => {
            r.address.forEach( a => {
                citiesArray.push(a.city);
            });
        });

        console.log("citiesArray >>>", citiesArray);
        citiesArray = citiesArray.filter((v, i, a) => a.indexOf(v) === i);
        console.log("citiesArray >>>", citiesArray);

        citiesArray.forEach( a => {
            var obj = { "city": a};
            mainArray.push(obj);
        });

        res.send( {"results": mainArray} );
    }).catch( function(err) {
        res.send(err);
    });
  
});

router.get('/list_by_city', function(req, res, next) {

    Company.find({"address.city": req.query.city}).then(function (result) {
        res.send({"results": result});
    }).catch(function(err){
        res.send(err);
    });

});

router.get('/search_city', (req, res) => {
    var regex = req.query.q;

    // Search Company Name
    Company.find({"company_name": new RegExp('' + regex, 'i')}).select('company_name').collation({ locale: "en" }).sort({company_name: 'asc'}).limit(50).then((fromResults) => {

            var mainResults = [];
            fromResults.forEach(r => {
                obj = {
                    "name": "company_name",
                    "value": r.company_name
                };
                mainResults.push(obj);
            });

            // Search City Name
            Company.find({"address.city": new RegExp('' + regex, 'i')}).collation({ locale: "en" }).sort("address.city").limit(50).then((results) => {
                
                
                var citiesArray = [];
                var mainArray = [];
        
                results.forEach( r => {
                    r.address.forEach( a => {
                        citiesArray.push(a.city);
                    });
                });

                citiesArray = citiesArray.filter((v, i, a) => a.indexOf(v) === i);

                citiesArray.forEach(c => {
                    obj = {
                        "name": "city",
                        "value": c
                    };
                    console.log("obj  >>>>>", obj);
                    mainResults.push(obj);
                });

                res.send(mainResults);
            }).catch(err => {
                console.log(err);
                res.status(500).send({error: JSON.stringify(err)});
            });
    }).catch(err => {
        console.log(err);
        res.status(500).send({error: JSON.stringify(err)});
    });
});

router.get('/list_by_name', function(req, res, next) {

    Company.find({"company_name": req.query.company_name}).then(function (result) {
        res.send({"results": result});
    }).catch(function(err){
        res.send(err);
    });

});

router.get('/near_me', function(req, res, next) {

    Company.find(
        {
            "address.address_location":
            { $near:
               {
                 $geometry: { type: "Point",  coordinates: [ req.query.long, req.query.lat ] },
                 $minDistance: 0,
                 $maxDistance: 5000
               }
            }
        }
     ).limit(10).then(function (result) {
        res.send({"results": result});
    }).catch(function(err){
        res.send(err);
    });
});


module.exports = router;
