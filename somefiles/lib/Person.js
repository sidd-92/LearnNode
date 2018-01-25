var EventEmitter = require('events').EventEmitter;
var util = require('util');

//Constructor Object
var Person = function (name) {
    this.name = name;

};
util.inherits(Person, EventEmitter);
module.exports = Person;