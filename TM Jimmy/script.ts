class Persons {
    name : string; 
    age : number;
    jobTitle : string;

    constructor(name: string, age : number , jobTitle:string){
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
        hello() {
            return `Hello there, my name is ${this.name} and I'm ${this.age} years old, and i am a ${this.jobTitle}` 
        }

}
let person = new Persons ("Mike", 25, "dentist");
console.log (person.hello())

class Employees extends Persons {
    salary : number;
    jobLocation : string;

    constructor(name: string, age : number , jobTitle:string, salary: number, jobLocation:string){
        super(name, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    intro (){
        return `${super.hello()} and I get ${this.salary} every month, and I work in ${this.jobLocation}`
    }

}
let employee = new Employees ("Jack", 32, "secretary", 1800, "Wien");

console.log(employee.intro())