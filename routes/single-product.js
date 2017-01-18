var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://userQPV:I35yuPprSU5F3It0@mongodb/sampledb',['categories']);


router.get('/:id', function(req, res, next) {
    var productid = req.params.id;
    console.log(productid);
    db.categories.findOne({title:productid},function(err,docs){
        if(err){
            res.redirect('/');
        }
        else{
            console.log(docs);
            var des = [];
            des = docs.description;
            res.render('productview',{product:docs, layout:"other", description: des});
        }
    });
});

module.exports = router;