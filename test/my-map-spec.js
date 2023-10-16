const chai = require("chai");
const spies = require("chai-spies");
const { myMap } = require("../problems/my-map"); // Adjust the import path accordingly
const expect = chai.expect;

chai.use(spies);

describe("myMap", function () {
  let inputArray;
  let callback;

  beforeEach(function () {
    // Create a fresh array and callback for each test
    inputArray = [1, 2, 3];
    callback = chai.spy((el) => el * 2);
  });

  it("should return a new array without mutating the original", function () {
    const mappedArray = myMap(inputArray, callback);

    // Check if the original array is not mutated
    expect(inputArray).to.deep.equal([1, 2, 3]);
    // Check if the returned array is correct
    expect(mappedArray).to.deep.equal([2, 4, 6]);
  });

  it("should not call the built-in Array.prototype.map method", function () {
    // Spy on the Array.prototype.map method
    const originalMap = Array.prototype.map;
    Array.prototype.map = chai.spy(() => {
      throw new Error("Array.prototype.map should not be called");
    });

    // Call myMap with the spy callback
    myMap(inputArray, callback);

    // Restore the original Array.prototype.map method
    Array.prototype.map = originalMap;

    // Make sure the spy callback was called
    expect(callback).to.have.been.called.exactly(inputArray.length);
  });

  it("should invoke the callback for each element in the array", function () {
    myMap(inputArray, callback);

    // Check if the callback was called for each element
    expect(callback).to.have.been.called.exactly(inputArray.length);
  });
});
