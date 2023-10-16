const chai = require("chai");
const expect = chai.expect;
const reverseString = require("../problems/reverse-string");

describe("reverseString function", function () {
    it("should reverse the given string", function() {
        const string = "fun";
        const reversedString = reverseString(string);
        expect(reversedString).to.equal("nuf");
    })

    it("should throw a TypeError when a non-string argument is passed", function () {
        const nonString = 23;
        const reverseStringCall = () => reverseString(nonString);
        expect(reverseStringCall).to.throw(TypeError);
      });
})
