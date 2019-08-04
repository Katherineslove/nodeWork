const http = require("http");

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-type': 'text/plain'});
  res.end('Hellow There, how is it going?');
  console.log('your serve is running on port 3000');
}).listen(3000);
