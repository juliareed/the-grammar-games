const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

// passport JS google auth keys
const OAUTH_CLIENT_ID = "613938978762-sfucnbn3r4lmp5j17pjt8ncbq1m2nlhi.apps.googleusercontent.com";
const OAUTH_SECRET = "i5NbeEN0Cob675MQFHq6LD-R"

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/thegrammargames", {
        useMongoClient: true
    }
);
// schema that will hold user info
var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    points: {
        type: Number,
        required: true,
        trim: true
    }
});

var User = mongoose.model('User', UserSchema);
module.exports = User;

// insert data into mongodb

if (req.body.name &&
    req.body.email &&
    req.body.points) {

    var userData = {
        email: req.body.email,
        name: req.body.name,
        points: req.body.points
    }

    //use schema.create to insert data into the db
    User.create(userData, function(err, user) {
        if (err) {
            return next(err)
        } else {
            return res.redirect('/profile');
        }
    });
}

// google auth

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

const callbackURL =
    process.env.NODE_ENV === "production" ?
    "https://the-grammar-games.herokuapp.com/auth/google/callback" :
    "http://localhost:3001/auth/google/callback";

const OAUTH_SCOPES = ['profile', 'email']
passport.use(
    new GoogleStrategy({
            clientID: OAUTH_CLIENT_ID,
            clientSecret: OAUTH_SECRET,
            callbackURL
        },
        function(accessToken, refreshToken, profile, done) {

            console.log('Yay Google Profile', profile);
            done(null, profile);
        }
    )
);

app.get(
    "/auth/google",
    passport.authenticate("google", { scope: OAUTH_SCOPES }),
    function(req, res) {

    }
);

app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    function(req, res) {
        console.log("req.user is ", req.user);
        res.redirect(
            process.env.NODE_ENV === "production" ? "/" : "//localhost:3000/"
        );
    }
);
/* End Auth */

// route for logging out
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});