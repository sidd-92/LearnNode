var fs = require('fs');

fs.readFile("./chat.log", "UTF-8", (err, chatlog) => {
    console.log(`File Has Been Read ${chatlog.length}`);
});
console.log("Reading Files");