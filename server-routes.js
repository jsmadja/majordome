var fs = require('fs');
var _ = require('underscore');
var sys = require('sys')
var exec = require('child_process').exec;

exports.youtube = function (req, res) {
    var command = "scripts/from-youtube-to-popcorn.sh http://www.youtube.com/" + req.params;
    console.log(command);
    exec(command, function (error, stdout, stderr) {
        res.send({out: stdout, err: stderr, error: error});
    });
};
