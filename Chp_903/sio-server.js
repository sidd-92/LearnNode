var express = require('express');
var http = require('http');


var app = express();
var server = http.createServer(app).listen(3001);
var io = require('socket.io')(server);

app.use(express.static("./public"));
io.on("connection", (socket) => {
    //User has sent a chat message
    socket.on("chat", (message) => {
       //We will broadcast the message to all the sockets
        socket.broadcast.emit("message", message);
    });

    socket.emit("message", "Welcome To The Chat");
     
});

console.log("Socket is Running");