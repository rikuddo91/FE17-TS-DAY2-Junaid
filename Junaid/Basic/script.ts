// basic
class Person{
    name: string;
    age: number;
    jobTitle: string;
    constructor(name: string, age: number, jobTitle: string){
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }

    printAll(): string{
        return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
    }
}

class Employee extends Person{
    salary: number;
    jobLocation: string;
    constructor(name: string, age: number, jobTitle: string, salary: number, jobLocation: string){
        super(name, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }

    printMore(): string{
        return `${super.printAll()} and I get ${this.salary} every month, and I work in ${this.jobLocation}`;
    }
}

const p1 = new Person("John", 29, "Wrestler");
const e1 = new Employee("Serri", 32, "Dev", 5000, "CodeFactory");

console.log(p1.printAll());
console.log(e1.printMore());