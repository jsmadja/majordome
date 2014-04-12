var fs = require('fs');
var _ = require('underscore');
var sys = require('sys')
var exec = require('child_process').exec;


function puts(error, stdout, stderr) {
    sys.puts(stdout)
}

exports.youtube = function (req, res) {
    var command = "./from-youtube-to-popcorn.sh https://www.youtube.com/" + req.params;
    console.log(command);
    exec(command, function (error, stdout, stderr) {
        res.send({out: stdout, err: stderr, error: error});
    });
};