var questions = ["What is the time?", "Why are you sleeping?", "Is Learning Node important?"];
var answers = [];
ask = function (i) {
    //You would like to ask first question input 0.
    //else the others
    if (i >= 0 && i <= questions.length-1)
    {
        process.stdout.write(`My question is ${questions[i]}`);
        process.stdout.write("  >  ");
    }
    else
    {
        process.stdout.write(`Valid Range from 0 to ${questions.length-1}`);
    } 
    
}

process.stdin.on('data', function (data) {
    //process.stdout.write('\n' + data.toString().trim() + '\n');
    //Save the data in the answers array
    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        ask(answers.length);
    } else
    {
        process.exit();
    }
});

//Listen for a process object on exit
process.on('exit', function () {
    process.stdout.write("----------");
    process.stdout.write(`Your Answers were ${answers[0]},${answers[1]},${answers[2]}`);
    process.stdout.write("----------");
});

ask(0);

