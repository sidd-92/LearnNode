var expect = require('chai').expect;
var tools = require("../lib/tools");
describe("Tools()", () => {
    describe("printName()", () => {
        //We will write all the tests here
        it("should print the last name first", () => {
            var results = tools.printName({ first: "Siddharth", last: "Natrajan" });
            //Should/expect it to be Natrajan,Siddharth
            expect(results).to.equal("Natrajan,Siddharth");
        });
    });

    describe("loadWiki()", () => {
       it("Load Abraham Lincoln Wikipedia Page") 
    });
});
