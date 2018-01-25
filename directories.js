var fs = require('fs');
//Use the anfn snippet in VS Code for async functions
//NOTE : We cannot remove a directory which has files in it
//First read all files in the Logs directory

fs.readdirSync("./logs").forEach((fileName) => {
   //First Delete all files inside this directory using Unlink
   
    fs.unlinkSync("./logs/" + fileName);
});

fs.rmdir("./logs", (err) => {
    if (err) {
        throw err;
    } 
    else {
        console.log("Everything was Okay");
   } 
});