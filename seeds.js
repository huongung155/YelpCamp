var mongoose = require('mongoose'),
    Campground = require('./models/campground'),
    Comment = require('./models/comment');
    
var data = [
        {
            name: 'Salmon Greek',
            image: 'http://photosforclass.com/download/10759552364',
            description: 'blah blah blah'
        },
        {
            name: 'Granite Hill',
            image: 'http://photosforclass.com/download/31733208',
            description: 'blah blah blah 2'
        },
        {
            name: "Mountain Goat's Rest",
            image: 'http://photosforclass.com/download/7930463550',
            description: 'blah blah blah 3'
        },
        {
            name: 'Salmon Greek',
            image: 'http://photosforclass.com/download/10759552364',
            description: 'blah blah blah 4'
        },
        {
            name: 'Granite Hill',
            image: 'http://photosforclass.com/download/31733208',
            description: 'blah blah blah 5'
        }
    ];
    
function seedDB(){
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }else{
            console.log('Remove all campground');
            /*data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    }else{
                        console.log('Added a campground');
                        Comment.create({
                            text: 'Blah Blah Blah',
                            author: 'Homer'
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            }else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log('Create new comment');
                            }
                        });
                    }
                });
            });*/
        }
    });
}

module.exports = seedDB;