/* jshint esnext :true*/
var http = require("http");

http.createServer(function (req, res) {

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<!DOCTYPE html>
     <html>
       <head>
         <title>Web Served</title>
       </head>
       <body>
         <h1>It Just Got Served</h1>
     </html> 
   `);

}).listen(3000);

console.log("Web Server running at http://localhost:3000");
