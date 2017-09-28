var http = require('http');
var fs = require('fs');
var settings = require('./settings')

var server = http.createServer();

server.on('request', function(req, res){

    fs.readFile(__dirname + '/dist/index.html', 'utf-8', function (err, data) {
        if(err){
            res.writeHead(404,{'Content-Type': 'text/plain'});
            res.write('404 not found');
            return res.end();
        }
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });

});

server.listen(settings.port, settings.host);
console.log(settings.message);
