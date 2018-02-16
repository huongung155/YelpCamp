var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    flash = require('connect-flash'),
    passport = require('passport'),
    cookieParser = require("cookie-parser"),
    methodOverride = require("method-override"),
    LocalStrategy = require('passport-local'),
    User = require('./models/user'),
    Campground = require('./models/campground'),
    Comment = require('./models/comment'),
    session = require("express-session"),
    seedDB = require('./seeds');
// configure dotenv
require('dotenv').load();

var campgroundRoutes = require('./routes/campgrounds'),
    commentRoutes = require('./routes/comments'),
    contactRoutes = require('./routes/contacts'),
    indexRoutes = require('./routes/index');

// assign mongoose promise library and connect to database
mongoose.Promise = global.Promise;

mongoose.connect(process.env.DATABASEURL, { useMongoClient: true }).then(() => console.log('Database connected')).catch(err => console.log('Database connection error: ${err.message}'));

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(methodOverride('_method'));
app.use(cookieParser('secret'));
//seedDB();
//require moment
app.locals.moment = require('moment');

//PASSPORT Configuration
app.use(require('express-session')({
    secret: 'Quan Luu is quite handsome',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//The following code is actually add middleware to every single 'app.'
//This middleware is to add req.user to every single 'app.' like app.get("/campgrounds")
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash('error');//instead of writing res.render('login', {message: req.flash('error)}) in routes/index.js, we can write without it
    res.locals.success = req.flash('success');
    next();//do the code after middleware
});

app.use('/campgrounds', campgroundRoutes);//all link in router.get() starts by /campgrounds
app.use('/campgrounds/:id/comments', commentRoutes);
app.use('/contacts', contactRoutes),
app.use('/', indexRoutes);

module.exports = app;