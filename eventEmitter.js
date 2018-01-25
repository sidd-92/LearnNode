var Person = require('./lib/Person');
//New Person
var ben = new Person('Ben Franklin');
//Since Person is inherited it can listen for events

ben.on('speak', (said) => {
    console.log(`${ben.name} : ${said}`);
});
ben.emit('speak', "A Circle Is Pointless");