class Person {
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
let person = new Person ("Mike", 25, "dentist");
console.log (person.hello())
