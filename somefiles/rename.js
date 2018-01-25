var fs = require('fs');
//Rename a file
fs.renameSync("./lib/project-config.js", "./lib/config.json");
console.log("File has been renamed");

//Move a file
fs.rename("./lib/notes.md", "./notes.md", function (err) {
    if (err) {
        console.log("Error");
    } else {
        console.log("File has been moved");
    }
})