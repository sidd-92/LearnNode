var waitTime = 3000;//3 Seconds
var currentTime = 0;
var waitInterval = 10;//If you increase wait interval the percent will go slower
var percentWaited = 0;

function writeWaitingPercent(p) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Waiting...${p} %`);
}


console.log("Wait For It");
var interval = setInterval(function () {
    currentTime += waitInterval;
    percentWaited = Math.floor((currentTime / waitTime) * 100);
    writeWaitingPercent(percentWaited);
}, waitInterval);

setTimeout(function () {
    clearInterval(interval);
    writeWaitingPercent(100);
    process.stdout.write("\n");
    console.log("Done");

}, waitTime);
process.stdout.write("\n");
writeWaitingPercent(percentWaited);