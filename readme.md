# YelpCamp

* Add Landing Page
* Add CampGrounds Page that lists all campground
* Each Campground has Name, Image
* img `src = "<%= campground.image%>"` because `<%=%>` just show like a string without quotes

# Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap

# Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic un-styled form

# Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

# Style the Nav-bar and Form
* Add Nav-bar to all templates
* Style the new campground form

# Add Mongoose
* Install and Configure mongoose
* Setup campground model
* Use campground model inside of our routes

# Show Page
* Review the REST-ful routes we've seen so far
* Add description to our campground model
* Show `db.collection.drop()`
* Add a show route/template

# Refactor Mongoose Code
* Create a models directory
* Use `module.exports`
* Require everything correctly

# Add Seeds file
* Add a `seeds.js` file
* Run the seeds file every time the server starts

# Add the Comment model
* Make our errors go away
* Display comments on campground show page

# Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

# Style show page
* Add sidebar to show page
* Display comments nicely

# Finish styling Show page
* Add public directory
* Add custom stylesheet

# _Auth Pt. 1_ - Add User Model
* Install all packages needed for auth
* Define User model

# _Auth Pt. 2_ - Register
* Configure Passport
* Add register routes
* Add register template

# _Auth Pt. 3_ - Login
* Add login routes
* Add login template

# _Auth Pt. 4_ - Logout/Nav-bar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to nav-bar

# _Auth Pt. 5_ - Show/Hide Links
* Show/hide auth links in navbar

# Refactor The Routes
* Use Express router to reoragnize all routes

# Users + Comments
* Associate users and comments
* Save author's name to a comment automatically

# User + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username+id to newly created campground

# Editing Campgrounds
* Add Method-Override
* Add Edit Route for Campgrounds
* Add Link to Edit Page
* Add Update Route

* **Campground Edit Route: /campgrounds/:id/edit**
* **Comment Edit Route: /campgrounds/:id/comments/:comment_id/edit**

# Deleting Campgrounds
* Add Destroy Route
* Add Delete button

* **Campground Destroy Route: /campgrounds/:id**
* **Comment Destroy Route:    /campgrounds/:id/comments/:comment_id**

# Authorization Part 1
* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/show edit and delete buttons

# Editing Comments
* Add Edit route for comments
* Add Edit button
* Add Update route

* **Campground Edit Route: /campgrounds/:id/edit**
* **Comment Edit Route: /campgrounds/:id/comments/:comment_id/edit**

# Deleting Comments
* Add Destroy route
* Add Delete button

* **Campground Destroy Route: /campgrounds/:id**
* **Comment Destroy Route:    /campgrounds/:id/comments/:comment_id**

# Authorization Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor Middleware

# Adding in Flash
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header

# Refactor with landing.css

# Add attribute in models

# RESTFUL ROUTEs

|name|url|verb|description|
|------------|:-----------:|:----:|:---------------------|
|INDEX|/dogs|GET|Display a list of all dog|
|NEW|/dogs/new|GET|Display form to make a new dog|
|CREATE|/dogs|POST|Add new dog to DB|
|SHOW|/dogs/:id|GET|Shows info about one dog|
|######|#############|###########|#####################|
|INDEX|/campgrounds|GET|Show all campgrounds|
|NEW|/campgrounds/new|GET|Show form to create new campground|
|CREATE|/campgrounds|POST|Add new campground to DB|
|SHOW|/campgrounds/:id|GET|Show more info about one campground|
|EDIT INDEX|/campgrounds/:id/edit|GET|Show edit form for a campground|
|EDIT|/campgrounds/:id/edit|PUT|Update campground in the database|
|DELETE|/campgrounds/:id|DELETE|Remove all comments associated with the campground(Comment.remove({_id: {$in: }}, callback)), remove the campground(req.campground.remove())|
|######|#############|###########|#####################|
|INDEX|/campgrounds/:id/comments/new|GET|Comments New|
|CREATE|/campgrounds/:id/comments|POST|Comments Create|
|EDIT INDEX|/campgrounds/:id/comments/:commentId/edit|GET|Comments Edit|
|EDIT|/campgrounds/:id/comments/:commentId|PUT|Comments Edit|
|DELETE|/campgrounds/:id/comments/:commentId|DELETE|Find campground(findByIdAndUpdate), remove comment from comments array($pull), delete comment in db(req.comment.remove)
|######|#############|###########|#####################|
|INDEX|/register|GET|Show register page|
|CREATE|/register|POST|Handle registration process|
|INDEX|/user/:id|GET|Show user profile page|
|INDEX|/forgot|GET|Show reset password page|
|CREATE|/forgot|POST|Step 1: Create random token using crypto<br>Step 2: Put token and expire to user<br>Step 3: Send Email
|INDEX|/reset/:token|GET|Show reset page with new password|
|CREATE|/reset/:token|POST|Update the new password|

# UI Improvements ([Tutorial](http://slides.com/nax3t/yelpcamp-refactor-ui))
* Use Bootstrap for Login, SignUp
* Update the nav-bar menu:
	* Add active class to menu list items
	* Make it responsive

# Google Maps API ([Tutorial](http://slides.com/nax3t/yelpcamp-refactor-google-maps#/6))
* Sign up for a Google Developer Account
* Get Google Maps API Key
* Add Google Maps scripts to your application
* Display campground location in show.ejs
* Update campground model
* Update new and edit forms
* Add location input field
* Update campground routes

# Moment JS - Time passed since date created ([Tutorial](http://slides.com/nax3t/yelpcamp-refactor-moment#/1))
* Install moment JS
* Require moment and add it to app.locals
* Update campground and comment models
* Use moment in show.ejs

# User Profile
* Add more attributes in user
* Write user page in view/campgrounds/show

# Password Reset
* Use async to sequentially implement function, nodemailer to mail and crypto to make the token in /reset/:token

# Fuzzy Search
* Add search bar on index page with GET method
* Search string will go to search.js, then go to campground.js to find the campgrounds associated to the search string
* Result is the json, this json will go to search.js

# Image Upload
* Use multer to handle multipart/form-data in form upload and cloudinary to upload image, then this service will return the image link

# Migrate to Bootstrap v4
* In header.ejs, change link of bootstrap to v4
	* Change the navbar
  		1. `<nav class="navbar navbar-expand-sm navbar-light bg-light mb-4">`
  			* mb: margin bottom to 4
  		2. button collapse with just one `span`
  		3. `<ul class="navbar-nav mr-auto">`: nav left
  		4. `<ul class="navbar-nav navbar-right">`: nav right
* In footer.ejs, css `<footer class="footer">` in main.css
	* `html{
    position: relative;
    min-height: 95%;
}`
	* `.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1.0rem; /* Set the fixed height of the footer here */
}`
	* Add jQuery CDN, Popper CDN, Bootstrap JS CDN, comply the sequence of CDN
* In campgrounds/index.ejs
	* `Thumbnail` is changed to `Card`
		1. Don't need `flex-wrap`
		2. `card-img-top` is to make image on top of card
		3. `card-body` is to write the caption, button of this card image
		4. `<h4> card-title` and `<p> card-text` is in `card-body`
		5. `<p> float-right` instead of `pull-right`
		6. `<h6> card-subtitle text-muted`
		7. `card-header text-right` for `Add New Comment`
* In campgrounds/new.ejs, use `justify-content-center` to:
	* Make `col-md-12` for `Create a New Campground`
	* Also make `col-xs-12 col-md-6 col-lg-4` for `form-signin`
	* Need to css `form-signin` to avoid form occupy all column

* Change Comments UI on the show page (_Just edit `campgrounds/show.ejs`_)
![alt text](https://9txyla.ch.files.1drv.com/y4m6jSAcJ19JRkFSulicSVcchW1Eg_inkijCIRDAWXxchrlXwdxKWnHgFBBGOBe4_WJdPzewDACbapg9sCcbKvNK30hpnIdhUmVYPOPYcZT0FZK6g5V3uC5dxfOZQHY3vLIenL1w5l6ZxdP4ZjNQmJFTboWhdx0Lx3NEtAbFjOp577ge7Q7A7hST-slBnflTnRVd3HtkDZK-reryzVFlttbfQ/Opera%20Snapshot_2018-02-15_145503_localhost.png?psid=1)
	* `href="#collapseComment"` and `aria-controls="collapseComment"` associated with `data-toggle="collapse"` is to make `<div id="collapseComment"></div>` which contains **Comments panel** collapsible when clicking `Add new comment` button
	![alt text](https://9tu9ia.ch.files.1drv.com/y4mIO7yJK0I4sNd4lHA-9BYRXCSCXQOV-CgcV-l08xhN3_xIsxLBDysBCn8AAK2KFJ08M9bDiaCAkEcEL9mUdfYGXk4dtpHIEEGJRFqUBlfgtVokYPT3XSHlascwfaSbCSGbk4VpT2O5ggwwF_Lk6mPAKxuuY8UvwRY-mNU-imsY_axaUI0XvYPBH3hzH4mJ-SG4fawnRqydkg-5bGKE69JhA/Capture.PNG?psid=1)
    * Collapsible Comments Panel (almost similar to prev ver)
    ![alt text](https://9tuofg.ch.files.1drv.com/y4mESw9kYcjGAsRBLUe--orJ0Y4n4bUowwjuYz9lEwfFaCrS0_6Gv-LJuOzvrnSL2J2xvPONXOkU3UjRAhu8VEFgNCoAtSzlCCKf8cU5uZDJntqu2qhCfYTjFhb7YoZkgwVq22LPjOcTKOD1GFjUWKxqjX4spGozciemqmud3yG11guluZyCC1W2-w2B3L_v0wbsln8DH3_68-QGt3oHEfaAA/Capture01.PNG?psid=1)
    * `Edit Comment` is based on `Add Comments` mechanism# YelpCamp
