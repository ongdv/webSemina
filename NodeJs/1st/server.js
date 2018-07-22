var http = require('http');

var server = http.createServer(function(req, res){
    console.log(req);
    res.writeHead(200, {'Content-type' : 'text/html'})
    res.end('Server Open!')
});

server.listen(3333, function(){
    console.log('Good');
});