var express = require('express');
var router = express.Router();
var mongojs= require('mongojs');
var ObjectId = mongojs.ObjectId;
//var ObjectId = require("mongojs").ObjectId;
var db = mongojs('mongodb://admin:admin@ds117859.mlab.com:17859/heroku_d1f53dlz', ['categories','cart','wishlist','featured']);
var async = require('async');
var Cart=require('../models/cart');
var searchBar=require('../models/searchResult');
var Wishlist=require('../models/wishlist');
var deleteCart= require('../models/delete');

function refreshCart(cart, req){
    if(req.isAuthenticated()){
        if(cart.generateArray().length>0){
            db.cart.find({email:req.user.email}, function(err, cartdata){
                if(cartdata){
                    db.cart.update({email:req.user.email},{email:req.user.email, usercart:cart});
                }
            });
            db.cart.insert({email:req.user.email,usercart:cart}, function(err, data){
                if(err){
                    throw err;
                }
            });
        }
        else{
            db.cart.remove({email:req.user.email},function(err,docs){
               if(err){
                   throw err;
               } 
            });
        }
    }
}

router.get('/add-to-cart/:id', function(req,res,next){
    var productId=req.params.id;
    console.log("receiving product id on click:",productId);
    var cart= new Cart(req.session.cart ? req.session.cart: {});
    db.categories.find({_id:productId}, function(err,prod){
        if(err)
        {    
            return res.redirect(req.get('referer'));
        }
        //console.log(prod);
        cart.add(prod[0], prod[0]._id);
        if(req.user){
            console.log("logged in");
        }
        console.log("after if");
        req.session.cart=cart;
        refreshCart(cart, req);
        res.redirect(req.get('referer'));
    });
});

router.get('/reduce/:id', function(req,res,next){
    var productId=req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart: {});
    cart.reduce(productId);
    req.session.cart = cart;
    if(cart.generateArray().length == 0){
        req.session.cart = null;
    }
    refreshCart(cart, req);
    res.redirect(req.get('referer'));
    
});

router.get('/increase/:id',function(req, res, next){
    var productId=req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart: {});
    cart.increase(productId);
    req.session.cart = cart;
    refreshCart(cart, req);
    res.redirect(req.get('referer'));
});

router.get('/delete/:id', function(req, res, next){
    var productId=req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart: {});
    cart.deleteItem(productId);
    req.session.cart = cart;
    if(cart.generateArray().length == 0){
        req.session.cart = null;
    }
    refreshCart(cart, req);
    res.redirect(req.get('referer'));
});

router.post('/?',function(req,res,next){
    console.log('In search');
    var searchTxt=req.body.searchbar;
    /*console.log(searchTxt);
    var searchArray=[];
    var searchArray=searchTxt.split(" ");
    var mixArr=[];  
    var done=0;
    var calls = [];
    searchArray.forEach(function(name){
        calls.push(function(callback) {
        //console.log("input to search after split",name)
        db.categories.find({title: new RegExp(name,"i")}, function(err, docs) {
            if(err){
                return callback(err);
            }
            //console.log('receiving list of search elements',docs);
            for(var j=0;j<docs.length;j+=1){
                mixArr.push(docs[j]);
            }
            callback(null, mixArr);
            });
        })
    });
    async.parallel(calls, function(err, result) {
        if (err)
            return res.redirect('/');
        var new_arr=[];
        var lookup  = {};
        for (var i in mixArr) {
            lookup[mixArr[i]["title"]] = mixArr[i];
        }
        for (i in lookup) {
            new_arr.push(lookup[i]);
        }
        //console.log("new arr:",new_arr);  
        var searchProducts=[];
       
        var chunkSize=3;
        for(var i=0; i < new_arr.length; i+=chunkSize){
            searchProducts.push(new_arr.slice(i, i+chunkSize)) ;  
        }
        var output;
        if(searchProducts.length>0){
            output="Here are Your Search Results Enjoy Shopping..!";
        }
        else{
            output="We don't have any matching products.";
        }
        res.render('shop/search', { title: 'Search', content:output, layout: "other",products: searchProducts});
        
    });*/
    db.categories.find({$text:{$search:searchTxt}},{score:{$meta:"textScore"}}).sort({score:{$meta:"textScore"}},function(err, docs){
            if(err){
                console.log("search not working");
            }
            var searchProducts=[];
            console.log('data',docs);
            var chunkSize=3;
            for(var i=0; i < docs.length; i+=chunkSize){
                searchProducts.push(docs.slice(i, i+chunkSize)) ;  
            }
            var output;
                if(searchProducts.length>0){
                    output="Here are Your Search Results Enjoy Shopping..!";
                }
            else{
                output="We don't have any matching products.";
            }
        res.render('shop/search', { title: 'Shop Online', content:output, layout: "other",products: searchProducts});
            
        });
});


function refreshWishlist(wishlist, req){
    if(req.isAuthenticated()){
        if(wishlist.generateArray().length > 0){
            db.wishlist.find({email:req.user.email}, function(err, wishdata){
                if(wishdata){
                    db.wishlist.update({email:req.user.email},{email:req.user.email, userwishlist:wishlist});
                    console.log("In Wishlist Update")
                }
            });
            db.wishlist.insert({email:req.user.email,userwishlist:wishlist}, function(err, data){
                if(err){
                    throw err;
                }
                console.log("adding to list");
                console.log(data);
                console.log(req.session.wishlist);
            });
        }
        else{
            db.wishlist.remove({email:req.user.email}, function(err, data){
                if(err){
                    throw err;
                }
            });
        }
    }
}

router.get('/wish-list/:id', function(req,res,next){
    var productId=req.params.id;
    console.log("receiving product id on click:",productId);
    var wishlist= new Wishlist(req.session.wishlist ? req.session.wishlist: {});
    db.categories.find(, function(err,prod){
        if(err)
        {    
            return res.redirect('/');
        }
        if(prod){
            console.log("Wished",prod);
            //wishlist.add(prod[0], prod[0].title);
            //req.session.wishlist=wishlist;
            //refreshWishlist(wishlist, req);
            res.redirect(req.get('referer'));
        }  
    });
    
});

router.get('/deletewish/:id' , function(req, res, next){
    var product = req.params.id;
    var wishlist = new Wishlist(req.session.wishlist ? req.session.wishlist: {});
    wishlist.delete(product);
    req.session.wishlist = wishlist;
    if(wishlist.generateArray().length == 0){
        req.session.wishlist = null;
    }
    refreshWishlist(wishlist, req);
    res.redirect(req.get('referer'));
});

router.get('/:id',function(req,res,next){
    var deptName = req.params.id;
    var subdept=[];
    //console.log(req.originalUrl);
    console.log(deptName);
    db.categories.distinct("subdept",{category: deptName}, function(err,docs1){
        for(var i=0;i<docs1.length;i++){
            subdept[i] = {"dept":deptName, "sub":docs1[i]};
        }
        //console.log(subdept);
    });
    db.categories.find({category:deptName},function(err, docs){
        if(err){
           return res.redirect('/');
        }
        var productChunks=[];
        var chunkSize=3;
        for(var i=0; i < docs.length; i+=chunkSize){
            productChunks.push(docs.slice(i, i+chunkSize));
        }
        res.render('shop/shop',{title: deptName,layout:"other",category: deptName, dept:deptName,sub_category:subdept,products: productChunks});
    });
});

router.get('/', function(req, res, next) {
    var successMsg = req.flash('success')[0];
    db.categories.find({category:'featured'},function(err, docs){
        if(err){
           return res.redirect('/');
        }
        var productChunks=[];
        var chunkSize=3;
        for(var i=0; i < docs.length; i+=chunkSize){
            productChunks.push(docs.slice(i, i+chunkSize));
        }
        res.render('index', { title: 'Shop Online',products:productChunks, successMsg: successMsg, noMessages: !successMsg});   
    });
});



module.exports = router;
