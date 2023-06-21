var createError = require('http-errors');
var express = require('express');
var path = require('path');
var app = express(); 
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const  mongoose  = require('mongoose');

const cors = require('cors'); // addition we make
const fileUpload = require('express-fileupload'); //addition we make


const dbURI = "mongodb://127.0.0.1:27017/ojong";
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


mongoose.connect( dbURI, {
  useNewUrlParser: true, 
  useUnifiedtopology:true
}).then(function(){
  console.log('db connection successful an am listening for request now');
}).catch(function(err){
 console.log(err.message)
});
 
 
// view engine setup  
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors()); 
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Use CORS and File Upload modules here

app.use(fileUpload());


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
