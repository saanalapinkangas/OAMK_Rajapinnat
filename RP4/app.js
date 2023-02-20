var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');

var bookRouter = require('./routes/book');
var borrowerRouter = require('./routes/borrower');
var loginRouter = require('./routes/login');
var userRouter = require('./routes/user');

var app = express();

//app.use(basicAuth({users: { 'admin': '1234' }}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/book', bookRouter);
app.use('/borrower', borrowerRouter);
app.use('/login', loginRouter);
app.use('/user', userRouter);

module.exports = app;
