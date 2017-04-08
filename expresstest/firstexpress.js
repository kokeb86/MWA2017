var express = require('express'),
     http = require('http');
var app = express();
var hostname = 'localhost';
var port = 3000;



app.get('/',function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('Hello World! This is my First Express from MWA');

});

var server = http.createServer(app);

server.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
})