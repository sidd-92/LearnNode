var spawn = require('child_process').spawn;
var cp = spawn("node", ["alwaysTalking"]);
cp.stdout.on("data", (data) => {
    console.log(`STDOUT : ${data.toString().trim()}`);
});

cp.on("close", () => {
    console.log('Child Process Has Ended');
    process.exit();
    
});

setTimeout(() => {
    cp.stdin.write("Stop");

}, 4000);