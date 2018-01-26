var http = require('http');
var fs = require('fs');
var path = require('path');
//We can chain functions to one another
//we will chain listen function to the belo function
http.createServer((request, response) => {
    //We a new request comes in
    console.log(`Request Method Was -> ${request.method} and URL was -> ${request.url}`); 
    if (request.url === '/') {
        //If you are requesting the homepage
        fs.readFile("./public/index.html", "UTF-8", (err, html) => {
            response.writeHead(200, { "Content-type": "text/html" });
            response.end(html);
        });
        
    }//Use regular expression to match extension css and jpg
    else if (request.url.match(/.css$/))
    {
        var cssPath = path.join(__dirname, 'public', request.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        response.writeHead(200, { "Content-Type": "text/css" });
        fileStream.pipe(response);

    }
    else if (request.url.match(/.jpg$/)) {
        var imgPath = path.join(__dirname, 'public', request.url);
        var imgStream = fs.createReadStream(imgPath);
        response.writeHead(200, { "Content-Type": "image/jpeg" });
        imgStream.pipe(response);

    }    
    else {
        //If not requesting home page then respond with 404
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end("404 File Not Found");
        
    }
}).listen(3001);
console.log("Server is listening");