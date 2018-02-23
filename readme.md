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
* HTML and CSS `forgot` which requires user to input email, then `POST` the `forgot` in which send email which contains `/reset/:token`
	* `async.waterfall` is to do number of functions sequentially, in `[]` contains all these functions
* ![alt text](https://vbq8ig.ch.files.1drv.com/y4m3Y35bdhnqspMSld1-l5TvalMwVRLo8dwuI8uT9OqWec2zqsDfv176dyPU5h6j4yGUUb5oPHIq0w0_Vn68esN331cSwlsogVYSnwOmVTKBmCaNAVetulAThejOSGOdS4KgeEXsFS5CQmIAJSoAMWTA7QfdTE2pi4l7GIJOM9IvsQ7hxoUFmzoatf-vhAYrOoT_KDVcsVPqH4PRN2uy8ismw/Capture13.PNG?psid=1)
	* This function is to make **token**, `done(err, token)` is to pass parameters to next function
* ![alt text](https://vbqnga.ch.files.1drv.com/y4mgKZNpLCN74G1PO7Yu_bEX5fobM50Ba3HKgpyjGjE2RM9omdaWj2zo22tNgDCpI0b2f1pGGUMMyGEkbAFSuvQD0hz9tpVnwTumZcl5HXAQUUDcoWvQzkqnBbIHLVKj_qcLweFfsZ8AhDLLvh3C6il6cshaM-HrqTAMXEDSRXSbto806Hot5sMDApC1mAW8FT0mBLzJsgEh_Juqh5N77RNeQ/Capture14.PNG?psid=1)
	* Next function is to find the email that inputs, in which you set the `resetPasswordToken` and `resetPasswordExpires` to 1000h, pass `err, token, user` to next function
* ![alt text](https://vbrycw.ch.files.1drv.com/y4m9oZnLrMMaOJdlk3lzPNEArIzwHyVmF5hlxv5I2mkNqwfbZmqz0SkmhHwIlcSuabH8mrw4ARzgZNgbVmEild8m_sWR8JE1xj-sf2VjaUULxGdyipqZ_cHKrWQ3FxBQhgs5UjPza9yZnKL-gKBssCI9oDlIejdsB-jQte7XyfawstoTmlv4HlcRSFXkMSiM2UeAiJaiAd6hkko7CuO7Cvo9Q/Capture15.PNG?psid=1)
	* Next function is to config mail content which contains sender, receiver, text contents, html contents
* ![alt text](https://vbrrxa.ch.files.1drv.com/y4mkiO-O96Cf_s4UC1_GxutBYfOKFBHh_45DQDQZuu-3ZIF66Ox5TD3C5yM9vxA20l3GCBJtt1wHyshlzAubdNxCOyXo5Shdx8lVlj_VjZjYU5E2Gg2iGtl7bAvD4wNT2dxiomI1Gq_1eHCNoQL7ZeWOrzlgpmxC8HPr82Z3PPGKUU7BKa7CRMw4tB8BuuHdzEuL6hMBbDgp78S_EJoeHmoeQ/Capture16.PNG?psid=1)

# Fuzzy Search
* Add search bar on index page with GET method
![alt text](https://g7ypuq.ch.files.1drv.com/y4mEv0tOJJzzhRtaiduCKaOvch_EZkHhI713EE6RyPtPNd4E6gcvE41D--MwD9VK_opOkFNBJCCAK2SbwpdDA3_85hAULokw1rs0EbeCXZf1IgRmj9KW1fwfxjggxV7FhE82kGNZYVjq-sH62YuUiIW4pSuOooh3IqCxu78ZRPgY3gJmip-dLz4UwbdTg9_mOWFAlFRXR7gCE1oElguI-O9Cw/Capture10.PNG?psid=1)
* Search string will go to search.js
![alt text](https://g7yicg.ch.files.1drv.com/y4mDXJdJH2Yapo_i9-zUlhRNX9z9ZCduBZQTEJzjGfVTi7XoDAdncYVNDAg3NwU4YoEM8nflY6t2evIehd7AhBHnFx715mZSVnf4ivkcog61L36M7r_Fi0NSYjHw1wElE8uDjKscMcTXfsJwPRy_j8vVNCoP841u18QLeOIaiP1O3jUN4T31vKgZxgUs10l7zJx-bJgkOuGsJrvXj8O65ZNuA/Capture11.PNG?psid=1)
	* The `.serialize()` method creates a text string in standard URL-encoded notation. It can act on a jQuery object that has selected individual form controls, such as `<input>`, `<textarea>`, `<select>`. Eg: **`single=Single&multiple=Multiple&multiple=Multiple3&check=check2&radio=radio1`**
	* `$.get('/campgrounds?' + search, function(data) {` will call `router.get('/', function(req, res){` in `campgrounds.js` and the `res.status(200).json(allCampgrounds);` is the `data`  
* ![alt text](https://g7ztlq.ch.files.1drv.com/y4m7Cc0kGCPmKgKNqTzFDx3VqIKPdXZw9XnYigIkv8jdJUxUz5tAh0-OWLxMZ0ijOjBDUhIAVpJ-dwIHx4UUlCY1if7c3cOw-KrIScFGGhqYPLYvrZ-qGQvgOk0YO34x5ZlxNi3bFpo2VIh4lD3WU-MxZ5E_xdoINa4Rb1q4zO9o2EVzz_Pos4IjeFtDPd_6WEvFFGzWmdG-cleOR0cyJHW3A/Capture12.PNG?psid=1)

# Image Upload
* Use multer to handle multipart/form-data in form upload and cloudinary to upload image, then this service will return the image link
* Add npm **cloudinary** where you upload image and **multer** which is the way to upload image in `routes/campgrounds.js`
* Declare `storage`, `imageFilter` and `upload` in `routes/campgrounds.js`
* Config your account **cloudinary**
![alt text](https://g7z7iw.ch.files.1drv.com/y4mB7ro1NyW-P01RtsfEU2qqe166iZP92Xl2Fx9dSOJN9ggv7b0_hWa9p0vpF08aN8UquEdX7Q9bK0g0rkOuHCDquGYNTZF-R42GxCmGku0cJocqO6V42oI1ZaTtsVpJpFKLn_ngH2XeUK5VW0qwDvIoPS-xnluhv2KDzImhLumm5O8L1SYJCvJwjXIoPgl-tVAgbnanBkhtEpz_5JiQQ5f6w/Capture07.PNG?psid=1)
* Declare `enctype="multipart/form-data"` and `input type="file"` in `views/campgrounds/new.ejs`
![alt text](https://g7z03a.ch.files.1drv.com/y4mmGC2nXEZfvhJESTCICEAhXqmuoKNmphKPsRoorG5Ockf4mdi1N9YtL4pQIe8Ge5AtwQWzhx40FhyWxt6-oFmWZuB3ySyvVD2F17FlYudTEW-K4rZmKjssItYDm7HaB64kTMqmfWkScmC0m0Kp4Co_WtXg-J7TLUnNlNP7HMLiak9fRXk7NXFmHKYn8vtyWQ_cZzy9w1FSpia9lXiczc1Xg/Capture08.PNG?psid=1)
* `cloudinary.uploader.upload(req.file.path, function (result)` will upload image on **cloudinary** and `result.secure_url` is the image link on **cloudinary**
![alt text](https://g7wqxg.ch.files.1drv.com/y4mVPBFfBtuWu-gi2HL9oQKXNhyj2v6JAnQGyKYfnET6RECZzslIKxTkWs8lyDG4gxQMhPIpSY_bTohO5A62x8-9LkZ9yfJUiVeTRLZ4HuVJy4-SYZ_R9fMxGEqW6Ti3avJiwkebVBzhpfKssZr3snIKMHKmhPqtWP8tjqgOA7SBQOtkyvOytRDy7WfpjUl0zMjJ9NwzmsGkGK-_d5GUa420A/Capture09.PNG?psid=1)

# 4 Types of directory link
* ../abc/xyz is to come to root directory of abc
* ./abc/xyz = abc/xyz is to come to abc
* /abc/xyz : example app.use(express.static('./public')), so it is to come to public/abc/xyz

# Migrate to Bootstrap v4
* In header.ejs, change link of bootstrap to v4
	* Change the navbar
  		1. `<nav class="navbar navbar-expand-sm navbar-light bg-light mb-4">`
  			* `mb`: margin bottom to 4
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

# Change Comments UI on the show page (_Just edit `campgrounds/show.ejs`_)
![alt text](https://9txyla.ch.files.1drv.com/y4m6jSAcJ19JRkFSulicSVcchW1Eg_inkijCIRDAWXxchrlXwdxKWnHgFBBGOBe4_WJdPzewDACbapg9sCcbKvNK30hpnIdhUmVYPOPYcZT0FZK6g5V3uC5dxfOZQHY3vLIenL1w5l6ZxdP4ZjNQmJFTboWhdx0Lx3NEtAbFjOp577ge7Q7A7hST-slBnflTnRVd3HtkDZK-reryzVFlttbfQ/Opera%20Snapshot_2018-02-15_145503_localhost.png?psid=1)
* `href="#collapseComment"` and `aria-controls="collapseComment"` associated with `data-toggle="collapse"` is to make `<div id="collapseComment"></div>` which contains **Comments panel** collapsible when clicking `Add new comment` button
![alt text](https://9tu9ia.ch.files.1drv.com/y4mIO7yJK0I4sNd4lHA-9BYRXCSCXQOV-CgcV-l08xhN3_xIsxLBDysBCn8AAK2KFJ08M9bDiaCAkEcEL9mUdfYGXk4dtpHIEEGJRFqUBlfgtVokYPT3XSHlascwfaSbCSGbk4VpT2O5ggwwF_Lk6mPAKxuuY8UvwRY-mNU-imsY_axaUI0XvYPBH3hzH4mJ-SG4fawnRqydkg-5bGKE69JhA/Capture.PNG?psid=1)
* Collapsible Comments Panel (almost similar to prev ver)
![alt text](https://9tuofg.ch.files.1drv.com/y4mESw9kYcjGAsRBLUe--orJ0Y4n4bUowwjuYz9lEwfFaCrS0_6Gv-LJuOzvrnSL2J2xvPONXOkU3UjRAhu8VEFgNCoAtSzlCCKf8cU5uZDJntqu2qhCfYTjFhb7YoZkgwVq22LPjOcTKOD1GFjUWKxqjX4spGozciemqmud3yG11guluZyCC1W2-w2B3L_v0wbsln8DH3_68-QGt3oHEfaAA/Capture01.PNG?psid=1)
* `Edit Comment` is based on `Add Comments` mechanism

# Captcha (in `routes/contact.js` and `routes/index.js`)
* Save key in `.env` file
* Get captcha response by `req.body['g-recaptcha-response']`
* Verify this URL to check Captcha succeed
![alt text](https://g7zfog.ch.files.1drv.com/y4mfWsW5BJWU9C7Uz90tIHpgoV9b1Xxld2FZIzcriOd15HN5f9JSydrKGRtqe1MT_IIWeVB7YB_w7DwCo-AXHk8oK6wpHHTkBStFU5aa7LKHmBSPD1xuRs7sptD3TtFW12ZreFFPIfgej6wOwB1U3Mx18GVm9fLHyQXIx5YTMiWvhcAO5YTmYVV3w0VpOeqUAXxs6LXSyC-uo9rwH7AWL6Jcg/Capture05.PNG?psid=1)
* `${secretKey}`, `${captcha}` is to write `var` variable in **raw text** on `JS` files
* Moreover, when captcha succeeds, you can send mail to admin in `routes/contact.js` like the way mail sent in **Password Reset**
![alt text](https://g7ywma.ch.files.1drv.com/y4mLOrAqCKX-gjsP6EYaHHRLlgnadyNL0KoCxfjIKil0_NlhTUj1-k7-ndFhsqC3ufOetFRKMgEz6CbHqPLqYLNAizvcmZ9qdk8V4Gi-erzrT8fWFFpAw_gSvSmJVcxxYdSL8ITB6fxoaWdPiVZxmf7jdxzXFO_gVIcQ3vR63K6sx2d-yYrGK8fDpXrMeLVAmwAm5axgOhv9cGDaSiObwWeNA/Capture06.PNG?psid=1)

# Deploy on Heroku/mlab
`heroku login`  
> Enter your Heroku credentials  
> Email: ....  
> Password: ....  
* Initialize the git for heroku  
`git init`  
`git add -A`  
`git commit -m'test'`  
* Create heroku: `heroku create`  
	* `heroku apps:rename quan1609`: to easily access heroku in [quan1609.herokuapp.com](https://quan1609.herokuapp.com)
	* `git remote -v`: to check heroku is also created, it creates the remote to push on heroku git
		* > heroku  https://git.heroku.com/name..  (fetch)
		* > heroku  https://git.heroku.com/name..  (push)
* After creating heroku git, add and commit all changes, `git push heroku master`	
	* Based on the package.json, heroku will `npm install` these package, so don't need to `push` _node_modules_
* When some error occurs, heroku just show `Application error`, if you want to specify error, `heroku logs`
* Make sure the `scripts/starts: "node app.js"` in package.json where the heroku follows to run app
* Can run cmd on heroku directory `heroku run ls` or `heroku run npm i -S mongoose`
* Replace `mongodb://localhost/test` with `process.env.DATABASEURL` (in .env file, `DATABASEURL='mongodb://huongung155:chuabiet155@ds051368.mlab.com:51368/yelpcamp'`)