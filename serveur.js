var express = require('express');
var serveur = express();

serveur.get("/",function(request,response){
    response.sendFile(__dirname +"/views/index.html");
});

serveur.get("/test",function(request,response){
    response.send("Test");
});

serveur.post("/test",function(request,response){
    response.send("Test en post");
});

serveur.listen(12107);
// var hostname = '127.0.0.1';
// var port = 12107;
//
// const server = http.createServer(function(request,response) {
//   response.statusCode = 200;
//   response.setHeader('Content-Type', 'text/plain');
//   response.end('Hello World\n');
// });
//
// server.listen(port, ip, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
