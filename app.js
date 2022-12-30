var http = require('http');

http.createServer(function(req,res){
    res.end('来自 '+ process.argv[2] +'端口的app的回应\n');
}).listen(process.argv[2] )