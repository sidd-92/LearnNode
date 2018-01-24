//process.arv is available globally and its an array
console.log(process.argv);
//run the node with 
//node app.js --user Sid --greeting 'Hello World'
/*
The Output
['C:\\Program Files\\nodejs\\node.exe',
    'C:\\Users\\Siddharth\\LearnNode\\LearnNode\\app.js',
    '--user',
    'Sid',
    '--greeting',
    '\'Hello',
    'World\'']

 */
/**
 * @name Used to get the value after the first 2 indexes in process.argv
 * @param {*} flag 
 * @returns Next Value after the paths
 */
function grab(flag) {
    var index = process.argv.indexOf(flag);
    return (index === -1) ? null : process.argv[index + 1];
}

var greeting = grab('--greeting');
var user = grab('--user');
if (!user || !greeting) {
    console.log('NO USER OR GREETING');
    
} else {
    console.log(`User is ${user} and says ${greeting}`);
}
