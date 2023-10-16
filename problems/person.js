class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello, my name is ${this.name}`
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson}`
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this.name);
  }

  update(obj) {
    if(typeof obj !== "object") {
      throw new TypeError("Invalid argument. Argument must be an object.");
    } else if (!obj.hasOwnProperty('name') || !obj.hasOwnProperty('age')) {
      throw new TypeError(`Invalid object. Object must have "name" and "age" properties.`)
    }
    this.name = obj.name;
    this.age = obj.age;
  }

  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    } catch(error) {
      return false
    }
  }

  static greetAll(people) {
    if (!Array.isArray(people)) {
        throw new TypeError("Invalid argument! Must be an array of Person instances.");
    }

    const greetings = [];
    for (const person of people) {
        if (!(person instanceof Person)) {
            throw new TypeError("Invalid array element! Must be a Person instance.");
        }
        greetings.push(person.sayHello());
    }

    return greetings;
}

}

module.exports = Person;
