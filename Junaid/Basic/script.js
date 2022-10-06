"use strict";
// basic
class Person {
    constructor(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    printAll() {
        return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
    }
}
class Employee extends Person {
    constructor(name, age, jobTitle, salary, jobLocation) {
        super(name, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    printMore() {
        return `${super.printAll()} and I get ${this.salary} every month, and I work in ${this.jobLocation}`;
    }
}
const p1 = new Person("John", 29, "Wrestler");
const e1 = new Employee("Serri", 32, "Dev", 5000, "CodeFactory");
console.log(p1.printAll());
console.log(e1.printMore());
