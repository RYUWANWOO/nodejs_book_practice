var http = require('http');

http.createServer(function (request, response) {
  request.on('data', function (data) {
    console.log('POST Data:', data);
  });
}).listen(52273, function () {
  console.log('Server Running at 127.0.0.1:52273');
});
