var ex = require('./lyrics.js');
// var http = require('http');
var express = require('express');
var app = express();

// console.log(ex[song]);

//respond hello world to the homepage
app.get('/', function (req, res) {
	res.send('Hello World!');
});
var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

console.log(host);
console.log('Example app listening at http://%s:%s', host, port);
});

// http.createServer(function(request,response){
// 	var song = Math.floor(Math.random()*ex.length);
// 	response.writeHead(200,{'Content-type':'text/plain'});
// 	response.write(ex[song]);
// 	response.end();

// }).listen(8888);
