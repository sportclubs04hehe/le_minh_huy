var http = require('http');
var url= require('url');

var httpServer = http.createServer(function (req,res){
    var q = url.parse(req.url, true).query;
    res.end("Hello World, I'am Huy");
});

httpServer.listen(8080, function() {
    console.log("server listening on port 8080");
})

