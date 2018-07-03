// Step 1 - Import Required Module

var http = require("http"); 

// Step 2 - Create Server

http.createServer(function(request,response) { response.writeHead(200,{'content-type' : 'text/plain'});

var a =5; b=6;
var c = a+b;
console.log(c);

}) .listen(8081);

console.log("Mosam");






