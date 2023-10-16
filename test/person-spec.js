const chai = require("chai");
const expect = chai.expect;
const Person = require("../problems/person");

describe("Person Class", function () {
  it("should have 'name' and 'age' properties", function () {
    const person = new Person("mai", 32);
    expect(person).to.have.property("name");
    expect(person).to.have.property("age");
  });
  it("should set 'name' and 'age' property correctly", function () {
    const person = new Person("mai", 32);
    expect(person.name).to.equal("mai");
    expect(person.age).to.equal(32);
  });

  it("should print person's name with greeting message", function () {
    const person = new Person("mai", 32);
    const greet = person.sayHello();
    expect(greet).to.equal("Hello, my name is mai");
  });

  it("should return a string stating that this instance visited other person instance", function () {
    const person = new Person("mai", 32);
    const other = new Person("Erin", 30);
    const otherPerson = other.name;
    const visit = person.visit(otherPerson);
    expect(visit).is.equal("mai visited Erin");
  });
  it("should get value of otherperson from visit()", function () {
    const person = new Person("mai", 32);
    const other = new Person("Erin", 30);
    const switchVisited = person.switchVisit(other);
    expect(switchVisited).to.equal("Erin visited mai");
  });

  context("Valid Object", function () {
    it("should update the properties of a Person instance", function () {
      const coolPerson = new Person("mai", 32);
      const updatedObj = { name: "lulu", age: 57 };
      coolPerson.update(updatedObj);
      expect(coolPerson.name).to.equal("lulu");
      expect(coolPerson.age).to.equal(57);
    });
    it("should throw a TypeError if the object does not have 'name' and 'age' properties", function () {
      const person = new Person("mai", 32);
      const invalidObj = { name: "lulu" }; // Missing 'age' property

      expect(() => person.update(invalidObj)).to.throw(
        TypeError,
        'Invalid object. Object must have "name" and "age" properties.'
      );
    });
  });
  context("Invalid Object", function () {
    it("should throw a TypeError if the argument is not an object", function () {
      const person = new Person("mai", 32);
      const invalidArg = "not an object";
      expect(() => person.update(invalidArg)).to.throw(
        TypeError,
        "Invalid argument. Argument must be an object."
      );
    });
  });

  context("update invoked Sucessfully", function () {
    it("should return true", function () {
      const coolPerson = new Person("mai", 32);
      const updatedObj = { name: "lulu", age: 57 };
      const result = coolPerson.tryUpdate(updatedObj);

      expect(result).to.equal(true);
      expect(coolPerson.name).to.equal("lulu");
      expect(coolPerson.age).to.equal(57);
    });
  });
  context("update invoked not Sucessfull", function () {
    it("should return false when 'update' is not successful (missing 'age' property)", function () {
      const person = new Person("mai", 32);
      const invalidObj = { name: "lulu" }; // Missing 'age' property

      const result = person.tryUpdate(invalidObj);

      expect(result).to.equal(false);
      expect(person.name).to.equal("mai");
      expect(person.age).to.equal(32);
    });
    it("should return false when 'update' is not successful (invalid argument)", function () {
      const person = new Person("mai", 32);
      const invalidObj = "not an object"; // Missing 'age' property

      const result = person.tryUpdate(invalidObj);

      expect(result).to.equal(false);
      expect(person.name).to.equal("mai");
      expect(person.age).to.equal(32);
    });
  });

  it("should return an array of the stored strings", function () {
    const person1 = new Person("John", 30);
    const person2 = new Person("Alice", 25);
    const person3 = new Person("Bob", 35);

    const people = [person1, person2, person3];

    const greetings = Person.greetAll(people);
    expect(greetings).to.be.an("array");
    expect(greetings).to.have.lengthOf(3);
    expect(greetings).to.deep.equal([
      "Hello, my name is John",
      "Hello, my name is Alice",
      "Hello, my name is Bob",
    ]);
  });

  it("should throw a TypeError if the argument is not an array", function () {
    const invalidArgument = "not_an_array";

    const testFunction = () => {
      Person.greetAll(invalidArgument);
    };

    expect(testFunction).to.throw(
      TypeError,
      "Invalid argument! Must be an array of Person instances."
    );
  });

  it("should throw a TypeError if any element in the array is not a Person instance", function () {
    const person1 = new Person("John", 30);
    const person2 = "not_a_person";
    const person3 = new Person("Alice", 25);

    const people = [person1, person2, person3];

    const testFunction = () => {
      Person.greetAll(people);
    };

    expect(testFunction).to.throw(
      TypeError,
      "Invalid array element! Must be a Person instance."
    );
  });
  
});
