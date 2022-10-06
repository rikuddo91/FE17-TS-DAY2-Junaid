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
    image : string;
    category : string;
    constructor(Brand : string,Model : string, MaxSpeed : number,YearsOfProd : number,Kilometer : number,Location : string, image:string, category:string){
        this.Brand=Brand;
        this.Model=Model;
        this.MaxSpeed=MaxSpeed;
        this.YearsOfProd= YearsOfProd;
        this.Kilometer = Kilometer;
        this.Location = Location;
        this.image = image;
        this.category = category;

        vehicleArray.push(this);
        }
       
    }

class Cars extends Vehicle {
    NumOfSeats : number;

    constructor(Brand : string,Model : string, MaxSpeed : number,YearsOfProd : number,Kilometer : number,Location : string, NumOfSeats: number, image:string,category:string){
        super(Brand, Model, MaxSpeed, YearsOfProd, Kilometer, Location,image,category);
        this.NumOfSeats = NumOfSeats;



}}

class Bike extends Vehicle {
    Wheels : number;

    constructor(Brand : string,Model : string, MaxSpeed : number,YearsOfProd : number,Kilometer : number,Location : string, Wheels: number,image:string,category:string,){
        super(Brand, Model, MaxSpeed, YearsOfProd, Kilometer, Location,image,category);
        this.Wheels = Wheels;
}

class Trucks extends Vehicle {
    Weight : number;

    constructor(Brand : string,Model : string, MaxSpeed : number,YearsOfProd : number,Kilometer : number,Location : string, Weight: number,image:string, category:string){
        super(Brand, Model, MaxSpeed, YearsOfProd, Kilometer, Location,image, category);
        this.Weight = Weight;

}}

class Collection extends Vehicle {
    Type : string;

    constructor(Brand : string,Model : string, MaxSpeed : number,YearsOfProd : number,Kilometer : number,Location : string, Type: string,image:string, category:string){
        super(Brand, Model, MaxSpeed, YearsOfProd, Kilometer, Location,image, category);
        this.Type = Type;

    }

let moto1 = new Bike ("Kawasaki","Z750", 320, 2015, 25000, "Baden",2,"https://cdn.pixabay.com/photo/2021/02/24/21/13/kawasaki-6047544__480.jpg","bike");

let moto2 = new Bike ("Honda","", 250,2013,25000,"",2,"","");

let car1 = new Cars ("Porsche", "Boxter", 340, 2020, 32000, "Graz",2,"https://cdn.pixabay.com/photo/2019/03/03/16/52/porsche-boxter-4032307__480.jpg","car");

let truck1 = new Trucks ("Mercedes", "P25", 130, 2015, 180000, "Tyrol", 7, "https://cdn.pixabay.com/photo/2017/09/02/15/50/truck-2707698__480.jpg","truck" );

let rare1 = new Collection ("Rolls-royce", "Phantom", 310, 1984, 12000, "London","collection", "https://cdn.pixabay.com/photo/2022/10/05/18/00/rolls-royce-phantom-iii-7501249__480.jpg","rare" )

console.table(vehicleArray)

const contain :any = document.querySelector(".container");
for (let items of vehicleArray){
    contain.innerHTML += `
    <div class="card ${items.category} row" style="width:20rem">
  <img src="${items.image}" class="card-img-top w-100 h-25" alt="">
  <div class="card-body">
    <h5 class="card-title">Category : ${items.category} <br>${items.Brand}<br>${items.Model}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">This vehicle was produced in ${items.YearsOfProd}</li>
    <li class="list-group-item">Actual kilometer : ${items.kilometer}</li>
    <li class="list-group-item">Location : ${items.Location}</li>
    <li class="list-group-item">Max speed : ${items.MaxSpeed}</li>

  </ul>
  <div class="card-body">
    <a href="#" class="card-link" onclick="price()">Price</a>
  </div>
</div>`

}
