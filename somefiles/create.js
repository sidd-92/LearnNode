var fs = require('fs');
var md = `
Sample Markdown
================
Sample Subtitile
-----------------`;

fs.writeFile("sample.md", md.trim(), function (err) {
    console.log("File Created");
});