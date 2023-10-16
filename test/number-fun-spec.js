const chai = require("chai");
const expect = chai.expect;
const { returnsThree, reciprocal } = require("../problems/number-fun");

describe("returnsThree function" , function() {
    it("should return 3 when function is invoked", function() {
        const result = returnsThree();
        expect(result).to.equal(3);
    })
})

describe("reciprocal function", function() {
    context("Valid Arguments", function() {
        it("should return the reciprocal of a given number", function () {
            const num = 2;
            const rec = reciprocal(num);
            expect(rec).to.equal(0.5);
        })
        it("should return the reciprocal of a given number", function () {
            const num = 4;
            const rec = reciprocal(num);
            expect(rec).to.equal(0.25);
        })
    })

    context("Invalid Arguments", function () {
        it("should throw TypeError if not of type number", function() {
            const num = "alok";
            const rec = () => reciprocal(num);
            expect(rec).to.throw(TypeError);
        })

        it("should throw RangeError if number greater than 10000 or less than 1", function () {
            const num = -5;
            const rec = () => reciprocal(num);
            expect(rec).to.throw(RangeError);

        })
    })

})
