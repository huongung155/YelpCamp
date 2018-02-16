var express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    Campground = require('../models/campground'),
    User = require('../models/user'),
    async = require('async'),
    nodemailer = require('nodemailer'),
    crypto = require('crypto'),
    middleware = require('../middleware'),
    {isLoggedIn, checkUserOwnership, captchaMiddleware} = middleware;

//root route
router.get('/', function(req, res){
    res.render('landing');
});

// show register form
router.get('/register', function(req, res){
    res.render('register', {page: 'register'});
});

//handle sign up logic
router.post("/register", captchaMiddleware, function(req, res){
    var newUser = new User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        avatar: req.body.avatar
        });
    /*if(req.body.adminCode === process.env.ADMIN_CODE) {
        newUser.isAdmin = true;
    }*/
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register', {error: err.message});
        }
        passport.authenticate('local')(req, res, function(){
            req.flash('success', 'Welcome to YelpCamp ' + newUser.username);
            res.redirect('/campgrounds');
        });
    });
});

//show login form
router.get('/login', function(req, res){
    res.render('login', {page: 'login'});
});

//handling login logic
router.post('/login', passport.authenticate('local',
    {
        successRedirect: '/campgrounds',
        failureRedirect: '/login',
        failureFlash: true,
        successFlash: 'Welcome to YelpCamp!'
    }), function(req, res){
});

// logout route
router.get('/logout', function(req, res){
    req.logout();
    req.flash('success', 'See you later!');
    res.redirect('/campgrounds');
});

//User profile
router.get('/users/:id', isLoggedIn, checkUserOwnership, function (req, res) {
    User.findById(req.params.id, function (err, foundUser) {
        if(err){
            req.flash('error', 'Something went wrong');
            return res.redirect('back');
        }
        Campground.find().where('author.id').equals(foundUser._id).exec(function (err, foundCampground) {
            if(err){
                req.flash('err', 'Something went wrong');
                res.redirect('back');
            }else{
                res.render('users/show', {user: foundUser, campgrounds: foundCampground});
            }
        });
    });
});

//Reset Password
router.get('/forgot', function(req, res) {
    res.render('forgot');
});

router.post('/forgot', function (req, res, next) {
    async.waterfall([
        function (done) {
            crypto.randomBytes(20, function (err, buf) {
                var token = buf.toString('hex');
                done(err, token);
            });
        },
        function (token, done) {
            User.findOne({email: req.body.email}, function (err, user) {
                if(user){
                    user.resetPasswordToken = token;
                    user.resetPasswordExpires = Date.now() + 3600000;

                    user.save(function (err) {
                        done(err, token, user);
                    });
                }else{
                    req.flash('error', 'No account with that email address exists');
                    res.redirect('/forgot');
                }
            })
        },
        function (token, user, done) {
            var smtpTransport = nodemailer.createTransport({
                service: 'Gmail',
                auth:{
                    user: 'haanh16091997@gmail.com',
                    pass: process.env.GMAILPW
                }
            });
            var mailOptions = {
                to: user.email,
                from: 'haanh16091997@gmail.com',
                subject: 'Node.js Password Reset',
                text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                'http://' + req.headers.host + '/reset/' + token + '\n\n' +
                'If you did not request this, please ignore this email and your password will remain unchanged.\n'
            };
            smtpTransport.sendMail(mailOptions, function (err) {
                console.log('Mail Sent');
                req.flash('success', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
                done(err, 'done');
            });
        }
    ], function (err) {
        if(err){
            return next(err);
        }
        res.redirect('/forgot');
    });
});

router.get('/reset/:token', function (req, res) {
    User.findOne({resetPasswordToken: req.params.token, resetPasswordExpires: {$gt:Date.now()}}, function (err, user) {
        if(user){
            res.render('reset', {token: req.params.token});
        }else{
            req.flash('error', 'Password reset token is invalid or has expired.');
            res.redirect('/forgot');
        }
    });
});

router.post('/reset/:token', function (req, res) {
    async.waterfall([
        function (done) {
            User.findOne({resetPasswordToken: req.params.token, resetPasswordExpires: {$gt: Date.now()}}, function (err, user) {
                if(!user){
                    req.flash('error', 'Password reset token is invalid or has expired.');
                    res.redirect('back');
                }else if(req.body.password === req.body.confirm){
                    user.setPassword(req.body.password, function (err) {
                        user.resetPasswordToken = undefined;
                        user.resetPasswordExpires = undefined;

                        user.save(function (err) {
                            req.login(user, function (err) {
                                done(err, user);
                            });
                        });
                    });
                }else{
                    req.flash("error", "Passwords do not match.");
                    res.redirect('back');
                }
            });
        },
        function (user, done) {
            var smtpTransport = nodemailer.createTransport({
                service: 'Gmail',
                auth:{
                    user: 'haanh16091997@gmail.com',
                    pass: 'chuabiet155'
                }
            });
            var mailOptions = {
                to: user.email,
                from: 'haanh16091997@gmail.com',
                subject: 'Node.js Password Reset',
                text: 'Hello,\n\n' + 'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
            };
            smtpTransport.sendMail(mailOptions, function (err) {
                console.log('Mail Sent');
                req.flash('success', 'Success! Your password has been changed.');
                done(err, 'done');
            });
        }
    ], function (err) {
        res.redirect('/campgrounds');
    });
});

module.exports = router;