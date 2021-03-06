var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:admin@ds117859.mlab.com:17859/heroku_d1f53dlz',['cart','wishlist','userorders','users']);
var csrf = require('csurf');
var Cart = require('../models/cart');
var passport = require('passport');
var csrfProtection = csrf();
router.use(csrfProtection);

router.get('/profile', isLoggedIn, function(req, res, next){
    db.wishlist.findOne({email:req.user.email}, function(err, wishlist){
        if(wishlist){ 
            req.session.wishlist = wishlist.userwishlist;
        }
        else{
            req.session.wishlist = null;
        }
    });
    db.cart.findOne({email:req.user.email}, function(err, cart){
        if(cart){
            req.session.cart = cart.usercart;
        }
        else{
            req.session.cart = null;
        }
    });
    db.users.find({email:req.user.email}, function(err, docs){
        if(docs){
            res.render('user/profile',{layout:'other',firstname:req.user.firstname, lastname:req.user.lastname, email:req.user.email, phonenumber:req.user.phonenumber});
        }
    });
});

router.get('/orders',isLoggedIn, function(req, res, next){
    var orders = [];
    db.userorders.find({email:req.user.email},function(err,docs){
        if(docs){
            console.log("Docs",docs);
            console.log("Docs order",docs[0].order);
            for(var i =0; i< docs.length;i++){
                var oname = "Order "+(i+1);
                var cart1 = new Cart(docs[i].order); 
                var cart = cart1.generateArray();
                console.log("Cart",cart);
                var totalPrice = cart1.totalPrice;
                orders.push({name: oname, cart:cart, totalPrice:cart1.totalPrice});
                console.log(i+" : "+docs.length);
                if(i==docs.length-1){
                    res.render('user/orders',{layout:'other',orders:orders, title:'History'});
                }
            }
            //var cart= new Cart(req.session.cart ? req.session.cart: {});

        }    
    });
    console.log("Orders after db",orders);
});

router.get('/logout', isLoggedIn, function(req, res, next){
    req.logout();
    req.session.cart = null;
    req.session.wishlist = null;
    res.redirect('/user/signin') 
});

router.use('/', isLoggedOut, function(req, res, next){
    next();
});

router.get('/signup',function (req, res, next) {
    var messages = req.flash('error');
    res.render('user/signup',{layout:'other', csrfToken: req.csrfToken(), messages:messages, hasErrors: messages.length > 0});
});

router.post('/signup',passport.authenticate('local.signup', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signup',
    failureFlash: true
}));


router.get('/signin', function (req, res, next) {
    var messages = req.flash('error');
    res.render('user/signin',{layout:'other', csrfToken: req.csrfToken(), messages:messages, hasErrors: messages.length > 0});
});

router.post('/signin', passport.authenticate('local.signin',{
    successRedirect: '/user/profile',
    failureRedirect: '/user/signin',
    failureFlash: true
}));

module.exports = router;

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}

function isLoggedOut(req, res, next){
    if(!req.isAuthenticated()){
        return next();
    }
    res.redirect('/user/profile');
}