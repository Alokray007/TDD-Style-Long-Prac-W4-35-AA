class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }

    hasValidSideLengths() {
        const [a, b, c] = [this.side1, this.side2, this.side3].sort((a, b) => a - b);
        return a + b > c;
    }

    validate() {
        return this.isValid = this.hasValidSideLengths()
    }

    static getValidTriangles(...triangles) {
        let result =  triangles.filter((triangle) => triangle.validate());
        return result;
    }
}

class Scalene extends Triangle {
    constructor(side1, side2, side3) {
      super(side1, side2, side3); // Call the parent class constructor
      this.isValidTriangle = this.hasValidSideLengths(); // Inherited property
    }

    isScalene() {
      return this.isValidTriangle && this.side1 !== this.side2 && this.side1 !== this.side3 && this.side2 !== this.side3;
    }

    validate() {
      super.validate(); // Call the parent class validate method
      this.isValidScalene = this.isScalene(); // Check if it's a valid scalene triangle
    }
}

class Isosceles extends Triangle {
    constructor(side1, side2, side3) {
      super(side1, side2, side3); // Call the parent class constructor
      this.isValidTriangle = this.hasValidSideLengths(); // Inherited property
    }

    isIsosceles() {
      return this.isValidTriangle && (this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3);
    }

    validate() {
      super.validate(); // Call the parent class validate method
      this.isValidIsosceles = this.isIsosceles(); // Check if it's a valid isosceles triangle
    }
}



module.exports = {
    Triangle,
    Scalene,
    Isosceles
}
