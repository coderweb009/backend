var express = require('express');
var router = express.Router();
var DocumentMaster = require('../models/documentmaster');
var Reminders = require('../models/reminders');
var async = require('async');
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


router.post('/add', upload.single('file'), function(req, res, next) {

    var createTruckReminderMainEntryIfNotExist = function () {
        return function (callback) {
            Reminders.findOne({"truck_no": req.body.truck_no}).then(function (result) {
                if (!result) {
                    var r = new Reminders({truck_no: req.body.truck_no, files: []});
                    r.save(function (err, result) {
                        callback(err, result);
                    });
                } else {
                    callback(null, true);
                }
            });
        };
    }; 

    var findFilePath = function() {
        return function (callback) {
            console.log("file   >>>>", req.file);

            var fileName = req.file.filename;
            var filePath = req.protocol + '://' + req.get('host') + "/uploads/"+fileName;
            req.body.attachdocument = filePath;

            // console.log("req.file.filename  >>>>>", fileName);
            // console.log("req.file.path  >>>>>",  req.file.path);
            // console.log("filePath >>>>>", filePath);

            console.log("body >>>>>", req.body);
    
            callback(false, null);
               
        };
    };
    
    
    var findDocumentMaster = function() {
        return function (callback) {
            DocumentMaster.find({"name" : req.body.documentname}).then(function(result) {
                var obj = {};
                if(!result[0]) {
                    console.log(" IF >>>>");
                    var bname = req.body.documentname;
                    obj = {name: bname};
                    console.log(" obj >>>>", obj);
        
        
                    var d = new DocumentMaster(obj);
                    d.save(function (err, save) {
                        console.log("err  >>>",err);
                        console.log("save  >>>",save);
                        res.send({"message": "Added..!"}); 
                    });
                }
                callback(false, null);
            }).catch(function(err) {
                callback(false, null);
            });
            
        };
    };
 
    async.series([createTruckReminderMainEntryIfNotExist(), findFilePath(), findDocumentMaster() ], function(err, asyncResult) {
        console.log("ERROR >>> ", err);
        
        Reminders.update({truck_no: req.body.truck_no}, {
            $push: {
                files: {
                    "documentname": req.body.documentname,
                    "attachdocument": req.body.attachdocument,
                    "startdate": req.body.startdate,
                    "enddate": req.body.enddate,
                }
            }
        }).then(function (results) {
            res.send({"message": "Uploaded.", "link": req.body.attachdocument});
        }).catch(function (err) {
            res.status(500).send(JSON.parse(JSON.stringify(err)));
        });

    });    
});

router.post('/add_document_master', function(req, res, next) {

    var d = new DocumentMaster(req.body);
    d.save(function (err, save) {
        console.log("err  >>>",err);
        console.log("save  >>>",save);
        res.send({"message": "Added..!"}); 
    });
});

router.get('/list_document_master', function(req, res, next) {

    DocumentMaster.find({}).then((results) => {
        res.send({"results": results});
    }).catch(err => {
        console.log(err);
        res.status(500).send({error: JSON.stringify(err)});
    });
});

router.delete('/delete_document_master', function(req, res, next) {
    DocumentMaster.deleteOne({ "_id": req.query.id }).then(function(deleteResult) {   
        res.send({"message": "Deleted..!"});
    }).catch(function(err) {
        res.send(err);
    });
});

router.put('/update_document_master', function(req, res, next) {
    
    DocumentMaster.updateOne({ "_id" : req.query.id}, {"name": req.body.name}).then(function (result) {
        res.send({"result": "Updated...!"});
    }).catch(function(err) {
        console.log("err >>>>>", err);
        res.send(err);
    });
});

router.get('/list_files', function(req, res, next) {
    var page, limit, offset;

    page = req.query.page ? req.query.page : 1;
    limit = req.query.limit ? req.query.limit : 50;
    offset = (page - 1) * limit;

    DocumentMaster.find({}).then(function(docMaster) {   
        var finalArray = [];

        Reminders.findOne({ "truck_no": req.query.truck_no }).then(function (trucksResult) {
            
            if(trucksResult) {
                docMaster.forEach((d, idx) => {
                    finalArray[idx] = {"documentname": d.name, files: []};
                    trucksResult.files.forEach(f => {
                        if(d.name === f.documentname) {
                            
                            var obj = {
                                "parent_id": trucksResult._id,
                                "status": f.status,
                                "remarks": f.remarks,
                                "fdate": f.fdate,
                                "_id": f._id,
                                "documentname": f.documentname,
                                "attachdocument": f.attachdocument,
                                "startdate": f.startdate,
                                "enddate": f.enddate,
                            };
                            
                            finalArray[idx].files.push(obj);
                        }
                    });
                    if(finalArray[idx].files.length > 0) {
                        finalArray[idx].fileFlag = true;
                    }
                });
            } else {
                docMaster.forEach((d, idx) => {
                    finalArray[idx] = {"documentname": d.name, files: [], fileFlag: false};
                });
            }

            res.send(finalArray);
        }).catch(function(err) {
            callback(err, null);
        });
    }).catch(function(err) {
        res.send(err);
    });
});

router.put('/delete_document', function(req, res, next) {
    Reminders.update( {"_id": req.body.id}, { $pull: {"files": {"_id": req.body.document_id} } }).then(function(deleteResult) {   
        res.send({"message": "deleted..!"});
    }).catch(function(err) {
        res.send(err);
    });
});

router.put('/update_file_date', function(req, res, next) {

    Reminders.findOneAndUpdate(
        { "files._id": req.body.id },
        { "$set": { "files.$.startdate" : req.body.start_date, "files.$.enddate" : req.body.end_date} }).then(function(result) {
        res.send({"message": "Updated..!"});
    }).catch (function(err) {
        res.send(err);
    });
});

module.exports = router;