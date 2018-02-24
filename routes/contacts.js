var express = require('express'),
    router = express.Router(),
    nodemailer = require('nodemailer'),
    request = require('request'),
    ses = require('nodemailer-ses-transport');

//contact form
router.get('/', function (req, res) {
    res.render('contacts/contactMe', {page: 'contact'});
});

router.post('/send', function (req, res) {
    var captcha = req.body['g-recaptcha-response'];
    if(captcha){
        var secretKey = process.env.CAPTCHA;
        var verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}&remoteip=${req.connection.remoteAddress}`;
        //Make request to verify URL
        request.get(verifyURL, (err, response, body) => {
            //if not successful
            if(body.success !== undefined && !body.success){
                req.flash('error', 'Body Undefined');
                return res.redirect('back');
            }
            var smtpTransport = nodemailer.createTransport(ses({
                accessKeyId: process.env.AMAZON_KEY,
                secretAccessKey: process.env.AMAZON_SECRET_KEY
            }));
            var mailOptions = {
                from: 'haanh16091997@gmail.com',
                to: 'huongung155@gmail.com',
                replyTo: req.body.email,
                subject: "Camp contact request from " + req.body.name,
                text: 'You have received an email from... Name: ' + req.body.name + ' Phone: ' + req.body.phone + ' Email: ' + req.body.email + ' Message: ' + req.body.message,
                html: '<h3>You have received an email from...</h3><ul><li>Name: ' + req.body.name + '</li><li>Phone: ' + req.body.phone +'</li><li>Email: ' + req.body.email + '</li></ul><p>Message: <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + req.body.message + '</p>'
            };
            smtpTransport.sendMail(mailOptions, function (err) {
                if(err){
                    req.flash("error", err.stack);
                    res.redirect("back");
                }else{
                    req.flash("success", "Your email has been sent, we will respond within 24 hours.");
                    res.redirect("/campgrounds");
                }
            });
        })
    }else{
        req.flash('error', 'Please select captcha');
        res.redirect('back');
    }
});

module.exports = router;