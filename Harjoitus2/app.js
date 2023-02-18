var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


/*  Nämä alla olevat koodit on löydyttävä täältä, jos halutaan sivujen toimivan.
    Niissä siis sisällytetään (require) sivusto mukaan, kuten index.js */
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*  Myös nämä koodit on löydyttävä jotta sivu toimii. Tässä sivut otetaan käyttöön.
    Yhteensä siis kahdessa kohtaa, require ja use. */
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
