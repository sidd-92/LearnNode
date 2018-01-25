//In this we will create a new directory
var fs = require('fs');

//Check if a directory exist

if (fs.existsSync("dir")) {
    console.log('directory Already exist');
}
else {
    fs.mkdir("dir", function (err) {
        if (err) {
            console.log(err, "in directory creation");
        }
        console.log("directory Created");
    });
}

