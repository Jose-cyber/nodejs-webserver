const http = require('http');


http.createServer(function(req, res){
    res.end('<h1>Primiero servidor web node rodando!</h1>');
}).listen(8080);

console.log("O servidor esta rodando!")
