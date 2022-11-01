var http= require('http'),
    url= require('url'),
    server= http.createServer();

    server.on('request',(req,res)=>{
        console.log("--incoming request--", req.url);
        var incomingUrl= url.parse(req.url,true);
        console.log(incomingUrl);

        if(incomingUrl.path==='/hello'){
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end("Hello World, I'am Huy!");
        }else if(incomingUrl.path==="/goodbye"){
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end("Bái bai! See you later");
        }else{
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end("NOT FOUND 404 '/_\'");
        }

        // res.writeHead(200,{'Content-Type':'text/plain'});
        // res.end("Hello World");
    });

    server.listen(9000);