var path = require('path');
var util = require('util');
var v8 = require('v8');
util.log(path.basename(__filename));//Get the filename
var dirUploads = path.join(__dirname, 'www', 'files', 'uploads');
util.log(dirUploads);
console.log(v8.getHeapStatistics());


