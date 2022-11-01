var path = require('path'),
    http = require('http'),
    fs = require('fs'),
    url = require('url'),
    mime = require('mime')

var server = http.createServer();

//genericSen 404 Not found
function genericSend(code, message, response) {
    res.writeHead(code, {
        'Content-Type': 'text/plain'
    });
    res.end(message);
}

server.on('request', (req, res) => {
    //404 Code

    //500 sever

    //200 OK

    var urlParams = url.parse(req.url),
        //pathname: /index.html ==> index.html
        filename = path.join('.', urlParams.pathname)

    fs.exists(filename, (exists) => {
        if (!exists){
            //404
        
        return genericSend(404, 'NOT FOUND', res);
        }

        fs.readFile(filename, 'binary', (err, file) => {
            if (err)
                return genericSend(500, 'INTERNAL SERVE ERROR',res)
            //500
            var type = mime.getType(filename);
            res.writeHead(200, {
                'Content-Type': type
            })
            res.write(file, 'binary');
            res.end();
        });

    })
});

server.listen(9000);