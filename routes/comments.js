const express = require('express'),
    router = express.Router({mergeParams: true}),/*merge id in app.use('/campgrounds/:id/comments', commentRoutes) in app.js*/
    Campground = require('../models/campground'),
    Comment = require('../models/comment'),
    middleware = require('../middleware'),//it will automatically go to middleware/index.js
    {checkCommentOwnership, isLoggedIn, isAdmin} = middleware;

//Comments New
router.get('/new', isLoggedIn, function(req, res){
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        } else {
            res.render('comments/new', {campground: campground});
        }
    })
});

//Comments Create
router.post('/', isLoggedIn, function(req, res){
    //lookup campground using ID
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            res.redirect('/campgrounds');
        } else {
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                } else {
                    //add username and id to comment
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    //save comment
                    comment.save(function (err, data) {
                        if(err){
                            console.log(err);
                        }else{
                            console.log(data);
                        }
                    });
                    campground.comments.push(comment);
                    campground.save(function (err, data) {
                        if(err){
                            console.log(err);
                        }else{
                            console.log(data);
                        }
                    });
                    console.log(comment);
                    req.flash('success', 'Created a comment!');
                    res.redirect('/campgrounds/' + campground._id);
                }
            });
        }
    });
});

router.get('/:commentId/edit', isLoggedIn, checkCommentOwnership, function(req, res){
    res.render('comments/edit', {campground_id: req.params.id, comment: req.comment});
});

router.put("/:commentId", isLoggedIn, checkCommentOwnership, function(req, res){
    Comment.findByIdAndUpdate(req.params.commentId, req.body.comment, function(err, comment){
        if(err){
            console.log(err);
            res.render("edit");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

router.delete("/:commentId", isLoggedIn, checkCommentOwnership, function(req, res){
    // find campground, remove comment from comments array, delete comment in db
    Campground.findByIdAndUpdate(req.params.id, {
        $pull: {
            comments: req.comment.id
        }
    }, function(err) {
        if(err){
            console.log(err);
            req.flash('error', err.message);
            res.redirect('/');
        } else {
            req.comment.remove(function(err) {
                if(err) {
                    req.flash('error', err.message);
                    return res.redirect('/');
                }
                req.flash('error', 'Comment deleted!');
                res.redirect('/campgrounds/' + req.params.id);
            });
        }
    });
});

module.exports = router;