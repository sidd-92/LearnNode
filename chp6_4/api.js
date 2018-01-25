//We will read the inventory files
var http = require('http');
var data = require("./data/inventory");

http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { "Content-Type": "text/json" });
        res.end(JSON.stringify(data));    
    }
    else if (req.url === '/instock') {
        listInStock(res);
    }
    else if (req.url === '/onorder') {
        listOnBackOrder(res);
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("JSON Not Found");
    }
    

}).listen(3001);
console.log("Listening To Server at Port 3001");

//List in Stock which take a response
function listInStock(res) {
    var inStock = data.filter((item) => {
        //use the avail key in data 
        return item.avail === "In stock";
    });

    res.end(JSON.stringify(inStock));
}

//List On Back Order which take in a response
function listOnBackOrder(res) {
    var onOrder = data.filter((item) => {
        return item.avail === "On back order";
    });
    res.end(JSON.stringify(onOrder));
}