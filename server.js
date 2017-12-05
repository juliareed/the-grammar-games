// import { data } from "../../Library/Caches/typescript/2.6/node_modules/@types/xdg-basedir";

const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const Student = require('./models/user');
const findOrCreate = require("mongoose-findorcreate");
const createOrUpdate = require('mongoose-create-or-update');
var db = require("./models");
let displayName = null

// passport JS google auth keys
const OAUTH_CLIENT_ID = "613938978762-sfucnbn3r4lmp5j17pjt8ncbq1m2nlhi.apps.googleusercontent.com";
const OAUTH_SECRET = "i5NbeEN0Cob675MQFHq6LD-R"

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
    session({ secret: "thegrammargames", resave: false, saveUninitialized: false })
);
app.use(require("morgan")("dev"));
app.use(passport.initialize());
app.use(passport.session());
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

// google auth

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

            // const { username, displayName } = profile;

            displayName = profile.displayName;
            // needs a database to handle oauth postbacks
            if (mongoose.connection.readyState === 0)
                throw new Error("Need MONGO connection to handle OAuth");

            Student.findOrCreate({ displayName: displayName })
                .then(({ doc, created }) => {
                    done(null, doc);
                })
                .catch(err => done(err));
        }
    )
);


app.get(
    "/auth/google",
    passport.authenticate("google", { scope: OAUTH_SCOPES }),
    function(req, res) {
        res.redirect(
            process.env.NODE_ENV === "production" ? "/" : "//localhost:3000/"
        );
    }
);

app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    function(req, res) {
        console.log("req.user is ", req.user);
        res.cookie("gg-user", req.user.displayName);
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

app.get("/scores", function(req, res) {
    db.Student
      .find({})
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

app.post("/post", function (req, res) {
db.Student.create({displayName: displayName, scores: req.body.scores})
res.status(200)
});

// app.post("/post", function (req, res) {
//     db.Student.update(
//         { displayName: req.body.displayName },
//         { $set: { scores: req.body.scores } })
//     res.status(200)
// });


app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});