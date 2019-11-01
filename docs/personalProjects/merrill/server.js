let http = require('http');
let fs = require('fs');
let url = require('url');

console.log("starting server...")
http.createServer({},function(req, res){
    console.log(req.method)
    q = url.parse(req.url, true);
    console.log(q);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    return res.end('hello world\n');
}).listen(80)