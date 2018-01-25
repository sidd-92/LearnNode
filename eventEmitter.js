var events = require('events');
var emmiter = new events.EventEmitter();

emmiter.on('customEvent', (message,status) => {
console.log(`${status}:${message}`);


});
//The Emitter , message, status
emmiter.emit('customEvent', "Hello World",200);