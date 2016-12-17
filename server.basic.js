var http = require('http');
var server = http.createServer();

server.on('request', function (code) {
  console.log('Request On');
});
server.on('connection', function (code) {
  console.log('Connecion On');
});
server.on('close', function (code) {
  console.log('Close On');
});
server.listen(52273);

setTimeout(function() {server.close()}, 10000);
