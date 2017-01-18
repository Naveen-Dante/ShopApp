var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://userUDA:lf6kt6lX3aqTqy2q@mongodb/sampledb',['categories']);


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