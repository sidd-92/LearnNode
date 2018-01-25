//We will use HTTP module to build a server
var http = require('http');
//We create the server
var server = http.createServer((request, response) => {
    //We will write the response headers
    //Content type : 
    //* can be text / plain 
    //* text/html
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(`<!DOCTYPE html>
                  <html>
                  <head><title>The User Page</title></head>
                  <body>
                  <h1>Welcome , User</h1>
                  <p>${request.url}</p>
                  <p>${request.method}</p>
                  </body>
                  </html>
                  `);
   
});
//We will tell server to listen on a port
server.listen(3001);
console.log("The server is listening..");