var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:admin@ds117859.mlab.com:17859/heroku_d1f53dlz',['categories']);


router.get('/:id', function(req, res, next) {
    var productid = parseInt(req.params.id);
    console.log(productid);
    db.categories.findOne({_id:productid},function(err,docs){
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