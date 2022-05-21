
require('dotenv').config(); 
const express = require("express"),
app = express(),
port = process.env.PORT || 3001,
cors = require("cors"), 
bodyParser = require("body-parser"), 
mongoose = require("mongoose"), 
findOrCreate = require("mongoose-findorcreate"), 
session = require("express-session"), 
passport = require("passport"), 
passportLocalMongoose = require("passport-local-mongoose"),
GoogleStrategy = require("passport-google-oauth20").Strategy, 
Axios = require("axios"); 

app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));



app.use(session({
    secret: "Our little secret",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// NEED TO CHANGE THE BELOW DATABASE 
mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true });
mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    googleId: String,
    secret: String
})

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate); 

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

// passport.serializeUser(User.serializeUser()) was only from mongoose
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, (err, user) => {
        done(err, user);
    })
});

// NEED TO CHANGE THE BELOW MIDDLEWARE 
passport.use(new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "http://localhost:3000",
        userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
    },
    function(accessToken, refreshToken, profile, cb) {
        console.log(profile);
        User.findOrCreate({ googleId: profile.id }, function(err, user) {
            return cb(err, user);
        });
    }
));

app.listen(port, () => console.log("Backend server live on " + port));

/* ----------------------------DIRECTLY COPIED --------------------------------- */

app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
})

app.get("/auth/google",
    // works because the GoogleStrategy is already set 
    passport.authenticate("google", { scope: ["profile"] }) 
); 


/* ----------------------------------------------------------------- */


app.get("/", (request, response) => {
    response.send({ message: "We did it!" });
});

app.post("/register", (req, res) => {
    User.register({ username: req.body.username }, req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            res.redirect("http://localhost:3000");
        } else {
            passport.authenticate("local")(req, res, () => {
                // console.log("working"); 
                res.redirect("http://localhost:3000");
            })
        }
    })
})

app.post("/login", (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    })

    req.login(user, (err) => {
        if (err) {
            console.log(err);
            res.redirect("http://localhost:3000"); 
        } else {
            passport.authenticate("local")(req, res, () => {
                res.redirect("http://localhost:3000");
            })
        }
    })
})

