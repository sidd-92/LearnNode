var fs = require('fs');
//Removing files
try
{ 
    fs.unlinkSync("./lib/config.json");
}
catch (e) {
    console.log(e);
}

fs.unlink("notes.md", (err) => {
    if (err) {
        console.log("Error");
    }
    else {
        console.log("its all good");
    }
});
