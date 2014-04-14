var express = require('express');
var majordome = require('./server-routes.js');
var http = require('http');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 1337);
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/youtube/*', majordome.youtube);
app.get('/video/*', majordome.video);


http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
