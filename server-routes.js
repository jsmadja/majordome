var fs = require('fs');
var _ = require('underscore');
var sys = require('sys')
var exec = require('child_process').exec;

exports.youtube = function (req, res) {
    var command = "scripts/from-youtube-to-popcorn.sh http://www.youtube.com/watch?v=" + req.params;
    console.log(command);
    exec(command, function (error, stdout, stderr) {
    res.send({command:command, result:'OK'});
    });
};

exports.video = function (req, res) {
    var dir = "web_store/" + new Date().getTime();
    var message = req.originalUrl.replace('/video/', '');
    exec("wget " + message + " --directory-prefix=" + dir, function (error, stdout, stderr) {
        res.send({out: stdout, err: stderr, error: error});
    });
    console.log(message);
};