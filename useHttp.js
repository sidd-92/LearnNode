//We will use the https module
var https = require('https');
//Use file system 
var fs = require('fs');

var options = {
    hostname: "en.wikipedia.org",
    port: 443,
    path: "/wiki/George_Washington",
    method: "GET"
}

var request = https.request(options, (response) => {
    var responseBody = "";
    console.log("Response From Server Started");
    console.log(`Server Status: ${response.statusCode}`);
    console.log("Response Headers : %j", response.headers);

    response.setEncoding("UTF-8");
    //First Time it will raise a data event,
    //Each chunk of data from wikipedia will be passed to our callback function
    response.once("data", (chunk) => {
        console.log(chunk);
    });
    //After the first time data was read,
    response.on("data", (chunk) => {
        console.log(`Chunk Length : ${chunk.length}`);
        //The response Body will have each chunk
        responseBody += chunk;
    });

    //Listen for when the response has ended
    response.on("end",() => {
        fs.writeFile("george_W.html", responseBody, (err) => {
            if (err)
            {
                throw err;
            }
            console.log("File Has been downloaded");
            
        });
    })

});

//We can use the request object that we declared above
request.on("error", (err) => {
    console.log(`Probelm with request: ${err.message}`);
});

//We will end the request
request.end();