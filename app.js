var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var beginRouter = require('./routes/begin');
 var begin2Router = require('./routes/begin2');
 var index1Router = require('./routes/index1');
 var minServiceRouter = require('./routes/minService');
 var docmentRouter = require('./routes/docment');
 var begin3Router = require('./routes/begin3');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use("/login",loginRouter);
app.use('/begin',beginRouter);
 app.use('/begin2',begin2Router);
 app.use('/index1',index1Router);
 app.use('/minService',minServiceRouter);
 app.use('/docment',docmentRouter);
 app.use('/begin3',begin3Router);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.log('错误:'+err);
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
