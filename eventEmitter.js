var Person = require('./lib/Person');
//New Person
var ben = new Person('Ben Franklin');
//Another Person
var george = new Person('George Washington');
//Since Person is inherited it can listen for events

ben.on('speak', (said) => {
    console.log(`${ben.name} : ${said}`);
});
ben.emit('speak', "A Circle Is Pointless");

george.on('speak', (said) => {
    console.log(`${george.name}
    : ${said}`);
});
george.emit('speak', "Nice Joke Ben");