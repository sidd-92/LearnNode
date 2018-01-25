var fs = require('fs');
var stream = fs.createReadStream("./chat.log", "UTF-8");
var data = "";

//To know that reading has started we can use:
stream.once("data",() => {
    console.log("started to read now..---------------");
})

//Listen For a Data Event
stream.on("data", (chunk) => {
   
    process.stdout.write(` Chunk : ${chunk.length} |`);
    data += chunk;
});

//Listen when it has finished reading the file
stream.on("end", () => {
   
    console.log(`Finished Reading File of Size ${data.length}`);
});