//Create a new socket event
var socket = io("http://localhost:3001");


socket.on("disconnect", () => {
    setTitle("Disconnected Client");
});

socket.on("connect", () => {
    setTitle("Connected To Cyber Chat");
});


socket.on("message", (message) => {
    printMessage(message);
});
document.forms[0].onsubmit = function () {
    var input = document.getElementById("message");
    printMessage(input.value);
    socket.emit("chat", input.value);
      
    input.value = '';
};

function setTitle(title) {
    document.querySelector("h1").innerHTML = title;
}

function printMessage(message) {
    var p = document.createElement("p");
    p.innerText = message;
    document.querySelector("div.messages").appendChild(p);
}
