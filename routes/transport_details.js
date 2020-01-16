var express = require('express');
var router = express.Router();
var TransportDetails = require('../models/transport_details');

router.post('/add', function(req, res, next) {

    var max_no;
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

router.get('/list', function(req, res, next) {
    
    TransportDetails.find({}).then( function(result) {
        res.send( {"result": result} );
    }).catch( function(err) {
        res.send(err);
    });
}); 

router.get('/get_by_id', function(req, res, next) {
    
    TransportDetails.find({"_id": req.query.transport_id}).then( function(result) {
        res.send( {"result": result} );
    }).catch( function(err) {
        res.send(err);
    });
});

router.get('/get_by_srno', function(req, res, next) {
    
    TransportDetails.findOne({"sr_no": req.query.srno}).then( function(result) {
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

router.get('/list_cities', function(req, res, next) {
    
    TransportDetails.find({}).sort("address.city").then( function(result) {
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

    TransportDetails.find({"address.city": req.query.city}).then(function (result) {
        res.send({"results": result});
    }).catch(function(err){
        res.send(err);
    });

});

router.get('/list_by_name', function(req, res, next) {

    TransportDetails.find({"transport_name": req.query.transport_name}).then(function (result) {
        res.send({"results": result});
    }).catch(function(err){
        res.send(err);
    });

});

router.get('/search_transporter', (req, res) => {
    var regex = req.query.q;
    TransportDetails.find({"transport_name": new RegExp('' + regex, 'i')}).select('transport_name')
        .collation({ locale: "en" })
        .sort({transport_name: 'asc'})
        .limit(50)
        .then((fromResults) => {
            res.send(fromResults);
        }).catch(err => {
            console.log(err);
            res.status(500).send({error: JSON.stringify(err)});
    });
});

router.get('/search_city', (req, res) => {
    var regex = req.query.q;

    //  Search Transport Name
    TransportDetails.find({"transport_name": new RegExp('' + regex, 'i')}).select('transport_name')
        .collation({ locale: "en" })
        .sort({transport_name: 'asc'})
        .limit(50)
        .then((fromResults) => {


            var mainResults = [];
            fromResults.forEach(r => {
                obj = {
                    "name": "transport_name",
                    "value": r.transport_name
                };
                mainResults.push(obj);
            });

            //  Search City Name 

            TransportDetails.find({"address.city": new RegExp('' + regex, 'i')}).collation({ locale: "en" }).sort("address.city").limit(50).then(function (result) {
                var citiesArray = [];
                var mainArray = [];
        
                result.forEach( r => {
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

            }).catch(function(err){
                res.send(err);
            });

            
        }).catch(err => {
            console.log(err);
            res.status(500).send({error: JSON.stringify(err)});
    });
});

router.get('/near_me', function(req, res, next) {

    TransportDetails.find(
        {
            "address.address_location":
            { $near:
               {
                 $geometry: { type: "Point",  coordinates: [ req.query.long, req.query.lat ] },
                 $minDistance: 0,
                 $maxDistance: 10/111.12
               }
            }
        }
     ).limit(10).then(function (result) {
        res.send({"results": result});
    }).catch(function(err){
        res.send(err);
    });
});

router.get('/get_by_transporter', function(req, res, next) {
    
    TransportDetails.findOne({"transport_name": req.query.transporter}).then( function(result) {
        res.send( result );
    }).catch( function(err) {
        res.send(err);
    });
});

module.exports = router;