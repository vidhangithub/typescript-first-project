"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    firstName;
    lastName;
    age;
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullNameAndAge() {
        return `${this.firstName} ${this.lastName}, Age: ${this.age}`;
    }
}
exports.Person = Person;
//# sourceMappingURL=Person.js.map