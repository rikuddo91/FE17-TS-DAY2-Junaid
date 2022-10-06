//basic exercises
/* class Persons {
    name: string;
    age: number;
    jobTitle: string;

    constructor(name: string, age: number, jobTitle: string) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    hello() {
        return `Hello there, my name is ${this.name} and I'm ${this.age} years old, and i am a ${this.jobTitle}`
    }

}
let person = new Persons("Mike", 25, "dentist");
console.log(person.hello())

class Employees extends Persons {
    salary: number;
    jobLocation: string;

    constructor(name: string, age: number, jobTitle: string, salary: number, jobLocation: string) {
        super(name, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    intro() {
        return `${super.hello()} and I get ${this.salary} every month, and I work in ${this.jobLocation}`
    }

}
let employee = new Employees("Jack", 32, "secretary", 1800, "Wien");

console.log(employee.intro()) */

// advanced exercise
/* interface Vehicles {
    Brand : string;
    Model : string;
    MaxSpeed : number;
    YearsOfProd : number;
    Kilometer : number;
    Location : string;
} */
let vehicleArray : Array<any> =[];

class Vehicle {
    Brand : string;
    Model : string;
    MaxSpeed : number;
    YearsOfProd : number;
    Kilometer : number;
    Location : string;
    image : string
    constructor(Brand : string,Model : string, MaxSpeed : number,YearsOfProd : number,Kilometer : number,Location : string, image:string){
        this.Brand=Brand;
        this.Model=Model;
        this.MaxSpeed=MaxSpeed;
        this.YearsOfProd= YearsOfProd;
        this.Kilometer = Kilometer;
        this.Location = Location;
        this.image = image;

        vehicleArray.push(this);
        }
}
class Cars extends Vehicle {
    NumOfSeats : number;

    constructor(Brand : string,Model : string, MaxSpeed : number,YearsOfProd : number,Kilometer : number,Location : string, NumOfSeats: number, image:string){
        super(Brand, Model, MaxSpeed, YearsOfProd, Kilometer, Location,image);
        this.NumOfSeats = NumOfSeats;



}}

class Bike extends Vehicle {
    Wheels : number;

    constructor(Brand : string,Model : string, MaxSpeed : number,YearsOfProd : number,Kilometer : number,Location : string, Wheels: number,image:string){
        super(Brand, Model, MaxSpeed, YearsOfProd, Kilometer, Location,image);
        this.Wheels = Wheels;



}}

class Trucks extends Vehicle {
    Weight : number;
    constructor(Brand : string,Model : string, MaxSpeed : number,YearsOfProd : number,Kilometer : number,Location : string, Weight: number,image:string){
        super(Brand, Model, MaxSpeed, YearsOfProd, Kilometer, Location,image);
        this.Weight = Weight;



}}

class Collection extends Vehicle {
    Type : string;

    constructor(Brand : string,Model : string, MaxSpeed : number,YearsOfProd : number,Kilometer : number,Location : string, Type: string,image:string){
        super(Brand, Model, MaxSpeed, YearsOfProd, Kilometer, Location,image);
        this.Type = Type;



}}

let moto1 = new Bike ("Kawasaki","Z1005", 320, 2015, 25000, "Baden",2,"");

let car1 = new Cars ("Porsche", "Boxter", 340, 2020, 32000, "Graz",2,"");

console.table(vehicleArray)