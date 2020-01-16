var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var truck_type = require('./routes/truck_type');
var truck_capacity = require('./routes/truck_capacity');
var transport_details = require('./routes/transport_details');
var driver_details = require('./routes/driver_details');
var truck = require('./routes/truck');
var company = require('./routes/company');
var agencies_master = require('./routes/agencies_master');
var request_load = require('./routes/request_load');
var user_creation = require('./routes/user_creation');
var employee = require('./routes/employee');
var meta = require('./routes/meta/meta');
var post_load = require('./routes/post_load');
var deal_final = require('./routes/deal_final');
var accounts = require('./routes/accounts');
var accounts_master = require('./routes/accounts_master');
var accounts_ledger = require('./routes/accounts_ledger');
var rewards_ledger = require('./routes/rewards_ledger');
var rewards_redemption = require('./routes/rewards_redemption');
var accounts_transactions = require('./routes/accounts_transactions');
var pod = require('./routes/pod');
var deal_final_new = require('./routes/deal_final_new');
var advance_amount = require('./routes/advance_amount');
var attach_documents = require('./routes/attach_documents');


// transport details app
var transporter_details_app = require('./apis/app/routes/transporter_details');
var transporter_request_load = require('./apis/app/routes/request_load');






var app = express();
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/truck_type', truck_type);
app.use('/api/truck_capacity', truck_capacity);
app.use('/api/transport_details', transport_details);
app.use('/api/driver_details', driver_details);
app.use('/api/truck', truck);
app.use('/api/company', company);
app.use('/api/agencies_master', agencies_master);
app.use('/api/request_load', request_load);
app.use('/api/user_creation', user_creation);
app.use('/api/employee', employee);
app.use('/api/meta', meta);
app.use('/api/post_load', post_load);
app.use('/api/deal_final', deal_final);
app.use('/api/accounts', accounts);
app.use('/api/accounts_master', accounts_master);
app.use('/api/accounts_ledger', accounts_ledger);
app.use('/api/rewards_ledger', rewards_ledger);
app.use('/api/rewards_redemption', rewards_redemption);
app.use('/api/accounts_transactions', accounts_transactions);
app.use('/api/pod', pod);
app.use('/api/deal_final_new', deal_final_new);
app.use('/api/advance_amount', advance_amount);
app.use('/api/attach_documents', attach_documents);


// transport details app
app.use('/api/app/transporter_details', transporter_details_app);
app.use('/api/app/transporter_request_load', transporter_request_load);





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
