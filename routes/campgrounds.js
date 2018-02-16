var express = require('express'),
    router = express.Router(),
    Campground = require('../models/campground'),
    Comment = require('../models/comment'),
    middleware = require('../middleware'),//it will automatically go to middleware/index.js
    geocoder = require('geocoder'),
    multer = require('multer'),
    cloudinary = require('cloudinary'),
    {checkCampgroundOwnership, checkCommentOwnership, isLoggedIn, isAdmin, isSafe} = middleware,
    storage = multer.diskStorage({
        filename: function(req, file, callback) {
            callback(null, Date.now() + file.originalname);
        }
    }),
    imageFilter = function (req, file, cb) {
        // accept image files only
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
            return cb(new Error('Only image files are allowed!'), false);
        }
        cb(null, true);
    },
    upload = multer({ storage: storage, fileFilter: imageFilter});

// Define escapeRegex function for search feature
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

cloudinary.config({
    cloud_name: 'dqagyeboj',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

//INDEX - show all campgrounds
router.get('/', function(req, res){
    if(req.query.search && req.xhr) {
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        // Get all campgrounds from DB
        Campground.find({name: regex}, function(err, allCampgrounds){
            if(err){
                console.log(err);
            } else {
                res.status(200).json(allCampgrounds);
            }
        });
    } else {
        // Get all campgrounds from DB
        Campground.find({}, function(err, allCampgrounds){
            if(err){
                console.log(err);
            } else {
                if(req.xhr) {
                    res.json(allCampgrounds);
                } else {
                    res.render('campgrounds/index',{campgrounds: allCampgrounds, page: 'campgrounds'});
                }
            }
        });
    }
});

//CREATE - add new campground to DB
router.post('/', isLoggedIn, upload.single('image'), function(req, res){
    cloudinary.uploader.upload(req.file.path, function (result) {
    // get data from form and add to campgrounds array
        var name = req.body.name;
        var image = result.secure_url;
        var desc = req.body.description;
        var author = {
            id: req.user._id,
            username: req.user.username
        };
        var price = req.body.price;
        geocoder.geocode(req.body.location, function (err, data) {
            if (err || data.status === 'ZERO_RESULTS') {
                req.flash('error', 'Invalid address');
                return res.redirect('back');
            }
            var lat = data.results[0].geometry.location.lat;
            var lng = data.results[0].geometry.location.lng;
            var location = data.results[0].formatted_address;
            var newCampground = {name: name, image: image, description: desc, price: price, author:author, location: location, latitude: lat, longitude: lng};
            // Create a new campground and save to DB
            Campground.create(newCampground, function(err, newlyCreated){
                if(err){
                    console.log(err);
                } else {
                    newlyCreated.save(function (err, data) {
                        if(err){
                            console.log(err);
                        }else{
                            console.log(data);
                        }
                    });
                    //redirect back to campgrounds page
                    res.redirect("/campgrounds");
                }
            });
        });
    });
});

//NEW - show form to create new campground
router.get('/new', isLoggedIn, function(req, res){
    res.render('campgrounds/new');
});

// SHOW - shows more info about one campground
router.get('/:id', function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id).populate('comments').exec(function(err, foundCampground){
        if(err || !foundCampground){
            console.log(err);
            req.flash('error', 'Campground does not exist!');
            res.redirect('/campgrounds');
        }else {
            //render show template with that campground
            res.render('campgrounds/show', {campground: foundCampground});
        }
    });
});

// EDIT - shows edit form for a campground
router.get("/:id/edit", isLoggedIn, checkCampgroundOwnership, function(req, res){
    //render edit template with that campground
    res.render('campgrounds/edit', {campground: req.campground});
});

// PUT - updates campground in the database
router.put('/:id', upload.single('image'), function(req, res){
    cloudinary.uploader.upload(req.file.path, function (result) {
        geocoder.geocode(req.body.location, function (err, data) {
            var lat = data.results[0].geometry.location.lat;
            var lng = data.results[0].geometry.location.lng;
            var location = data.results[0].formatted_address;
            var newData = {name: req.body.name, image: result.secure_url, description: req.body.description, price: req.body.price, location: location, latitude: lat, longitude: lng};
                // var extract = foundCampground.image.match(/^https:\/\/res\.cloudinary\.com\/dqagyeboj\/image\/upload\/v1517711641\/(\w*\.\w*)/i);
            Campground.findByIdAndUpdate(req.params.id, {$set: newData}, function(err, campground){
                if(err){
                    req.flash('error', err.message);
                    res.redirect('back');
                } else {
                    req.flash('success','Successfully Updated!');
                    res.redirect('/campgrounds/' + campground._id);
                }
            });
        });
    });
});

// DELETE - removes campground and its comments from the database
router.delete('/:id', isLoggedIn, checkCampgroundOwnership, function(req, res) {
    Comment.remove({
        _id: {
            $in: req.campground.comments
        }
    }, function(err) {
        if(err) {
            req.flash('error', err.message);
            res.redirect('/');
        } else {
            req.campground.remove(function(err) {
                if(err) {
                    req.flash('error', err.message);
                    return res.redirect('/');
                }
                req.flash('error', 'Campground deleted!');
                res.redirect('/campgrounds');
            });
        }
    })
});

//Every user, show campgrounds this user creates
//Campground.find().where('author.id').equals(foundUser._id).exec(err, campgrounds)

module.exports = router;
