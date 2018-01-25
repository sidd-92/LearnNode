var EventEmitter = require('events').EventEmitter;
var util = require('util');

//Constructor Object
var Person = function (name) {
    this.name = name;
    
};
util.inherits(Person, EventEmitter);

//New Person
var ben = new Person('Ben Franklin');
//Since Person is inherited it can listen for events

ben.on('speak', (said) => {
    console.log(`${ben.name} : ${said}`);
});
ben.emit('speak', "A Circle Is Pointless");