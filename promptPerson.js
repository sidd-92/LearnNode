var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var realPerson = {
    name:'',sayings:[]
};
rl.question("What is the name of person ", function (answer) {
    realPerson.name = answer;
    rl.setPrompt(`What Would ${realPerson.name} say `);
    rl.prompt();

    //listen for any new lines
    rl.on('line', function (saying) {
        realPerson.sayings.push(saying.trim());
        if (saying.toLowerCase().trim() === 'exit')
        {
            rl.close();
        } else
        {
            rl.setPrompt(`What Else would ${realPerson.name} say? ('exit' to leave) `);
            rl.prompt();
        }
        
    });
});

//Listen for the rl close event
rl.on('close', () => {
    console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings); 
    process.exit();
})