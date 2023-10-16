const chai = require("chai");
const expect = chai.expect;
const { Triangle, Scalene, Isosceles } = require("../problems/triangle");

describe("Triangle Class", function () {
    describe("constructor", function () {
      it("should have 'side1', 'side2', and 'side3' properties", function () {
        const triangle = new Triangle(3, 4, 5);
        expect(triangle).to.have.property("side1");
        expect(triangle).to.have.property("side2");
        expect(triangle).to.have.property("side3");
      });

      it("should set 'side1', 'side2', and 'side3' properties correctly", function () {
        const triangle = new Triangle(3, 4, 5);
        expect(triangle.side1).to.equal(3);
        expect(triangle.side2).to.equal(4);
        expect(triangle.side3).to.equal(5);
      });
    });

    describe("getPerimeter method", function () {
      it("should return the perimeter of the Triangle", function () {
        const triangle = new Triangle(3, 4, 5);
        expect(triangle.getPerimeter()).to.equal(12); // 3 + 4 + 5 = 12
      });
    });

    describe("hasValidSideLengths method", function () {
      it("should return true for a valid triangle", function () {
        const triangle = new Triangle(3, 4, 5);
        expect(triangle.hasValidSideLengths()).to.equal(true);
      });

      it("should return false for an invalid triangle", function () {
        const triangle = new Triangle(1, 2, 3); // Sum of any two sides is not greater than the remaining side
        expect(triangle.hasValidSideLengths()).to.equal(false);
      });
    });

    describe("validate method", function() {
        it("should add an isValid property with value true for a valid triangle", function() {
            const triangle = new Triangle(3, 4, 5);
            triangle.validate();
            expect(triangle.isValid).to.equal(true);
        })
        it("should add an isValid property with value false for a Invalid triangle", function() {
            const triangle = new Triangle(1, 2, 3);
            triangle.validate();
            expect(triangle.isValid).to.equal(false);
        })
    })

    describe("getValidTriangles method", function() {
        it("should return an array of valid triangles from an array of Triangle instances", function() {
            const triangle1 = new Triangle(3, 4, 5);
            const triangle2 = new Triangle(1, 2, 3);
            const triangle3 = new Triangle(5, 12, 13);

            const triangles = [triangle1, triangle2, triangle3];
            const validTriangles = Triangle.getValidTriangles(...triangles);

            expect(validTriangles).to.deep.equal([triangle1, triangle3]);
        })
    })
})

describe("Scalene Class", function () {
    it("should inherit and override the validate method", function () {
      // Create a Scalene instance with valid side lengths
      const scalene = new Scalene(5, 6, 7);

      // Call validate method of Scalene class
      scalene.validate();

      // Check if the isValidScalene property is correctly set to true for a valid scalene triangle
      expect(scalene.isValidScalene).to.equal(true);

      // Create a Scalene instance with invalid side lengths
      const invalidScalene = new Scalene(1, 2, 3);

      // Call validate method of Scalene class
      invalidScalene.validate();

      // Check if the isValidScalene property is correctly set to false for an invalid scalene triangle
      expect(invalidScalene.isValidScalene).to.equal(false);
    });
});

describe("Isosceles Class", function () {
    it("should inherit and override the validate method", function () {
      // Create an Isosceles instance with valid side lengths
      const isosceles = new Isosceles(5, 5, 7);

      // Call validate method of Isosceles class
      isosceles.validate();

      // Check if the isValidIsosceles property is correctly set to true for a valid isosceles triangle
      expect(isosceles.isValidIsosceles).to.equal(true);

      // Create an Isosceles instance with invalid side lengths
      const invalidIsosceles = new Isosceles(3, 4, 5);

      // Call validate method of Isosceles class
      invalidIsosceles.validate();

      // Check if the isValidIsosceles property is correctly set to false for an invalid isosceles triangle
      expect(invalidIsosceles.isValidIsosceles).to.equal(false);
    });
});
