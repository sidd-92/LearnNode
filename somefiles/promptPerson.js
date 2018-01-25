var readline = require('readline');
var fs = require('fs');
var rl = readline.createInterface(process.stdin, process.stdout);
var realPerson = {
    name:'',sayings:[]
};
rl.question("What is the name of person ", function (answer) {
    realPerson.name = answer;
    //the file name will be name_of_person.md
    //next arg is the contents of the file
    fs.writeFileSync(realPerson.name + ".md",`${realPerson.name}\n============\n\n`);

    rl.setPrompt(`What Would ${realPerson.name} say `);
    rl.prompt();

    //listen for any new lines
    rl.on('line', function (saying) {
        realPerson.sayings.push(saying.trim());
        
        //Use file system to append sayings to the md file
        fs.appendFile(realPerson.name + ".md", `*${saying.trim()}\n`);

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