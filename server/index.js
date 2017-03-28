var express = require('express');
var expressSession = require('express-session');
var passport = require('passport');
var bodyParser = require('body-parser');
var LocalStrategy = require('passport-local').Strategy;

var app = express();

passport.use('local', new LocalStrategy(
  function(username, password, done) {
    if (username === 'username' && password === 'password') {
      return done(null, {editmode: true});
    } else {
      console.log('Wrong credentials');
      return done(null, false, {message: 'Wrong credentials'});
    }
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.editmode);
});

passport.deserializeUser(function(id, done) {
  done(null, {editmode: true});
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({secret: 'anything'}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', function(req, res) {
    // Display the Login page with any flash message, if any
    console.log('/');
    res.send('index');
});

app.get('/success', function(req, res) {
    // Display the Login page with any flash message, if any
    console.log(req.user);
    console.log('success');
    res.send('login success');
});

app.get('/fail', function(req, res) {
    // Display the Login page with any flash message, if any
    console.log(req.user);
    console.log('fail');
    res.send('login fail');
});

app.get('/editorlogin', function(req, res) {
    // Display the Login page with any flash message, if any
    console.log('editorlogin GET');
    res.send('please provide username and password');
});

app.post('/editorlogin',
  passport.authenticate('local', { successRedirect: '/success',
                                   failureRedirect: '/fail'})
);

app.listen(5000, function () {
  console.log('Example app listening on port 5000!')
});