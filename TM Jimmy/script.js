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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// advanced exercise
/* interface Vehicles {
    Brand : string;
    Model : string;
    MaxSpeed : number;
    YearsOfProd : number;
    Kilometer : number;
    Location : string;
} */
var vehicleArray = [];
var Vehicle = /** @class */ (function () {
    function Vehicle(Brand, Model, MaxSpeed, YearsOfProd, Kilometer, Location, image, category) {
        this.Brand = Brand;
        this.Model = Model;
        this.MaxSpeed = MaxSpeed;
        this.YearsOfProd = YearsOfProd;
        this.Kilometer = Kilometer;
        this.Location = Location;
        this.image = image;
        this.category = category;
        vehicleArray.push(this);
    }
    return Vehicle;
}());
var Cars = /** @class */ (function (_super) {
    __extends(Cars, _super);
    function Cars(Brand, Model, MaxSpeed, YearsOfProd, Kilometer, Location, NumOfSeats, image, category) {
        var _this = _super.call(this, Brand, Model, MaxSpeed, YearsOfProd, Kilometer, Location, image, category) || this;
        _this.NumOfSeats = NumOfSeats;
        return _this;
    }
    return Cars;
}(Vehicle));
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(Brand, Model, MaxSpeed, YearsOfProd, Kilometer, Location, Wheels, image, category) {
        var _this = _super.call(this, Brand, Model, MaxSpeed, YearsOfProd, Kilometer, Location, image, category) || this;
        _this.Wheels = Wheels;
        return _this;
    }
    return Bike;
}(Vehicle));
var Trucks = /** @class */ (function (_super) {
    __extends(Trucks, _super);
    function Trucks(Brand, Model, MaxSpeed, YearsOfProd, Kilometer, Location, Weight, image, category) {
        var _this = _super.call(this, Brand, Model, MaxSpeed, YearsOfProd, Kilometer, Location, image, category) || this;
        _this.Weight = Weight;
        return _this;
    }
    return Trucks;
}(Vehicle));
var Collection = /** @class */ (function (_super) {
    __extends(Collection, _super);
    function Collection(Brand, Model, MaxSpeed, YearsOfProd, Kilometer, Location, Type, image, category) {
        var _this = _super.call(this, Brand, Model, MaxSpeed, YearsOfProd, Kilometer, Location, image, category) || this;
        _this.Type = Type;
        return _this;
    }
    return Collection;
}(Vehicle));
var moto1 = new Bike("Kawasaki", "Z750", 320, 2015, 25000, "Baden", 2, "https://cdn.pixabay.com/photo/2021/02/24/21/13/kawasaki-6047544__480.jpg", "bike");
var moto2 = new Bike("Honda", "", 250, 2013, 25000, "", 2, "", "");
var car1 = new Cars("Porsche", "Boxter", 340, 2020, 32000, "Graz", 2, "https://cdn.pixabay.com/photo/2019/03/03/16/52/porsche-boxter-4032307__480.jpg", "car");
var truck1 = new Trucks("Mercedes", "P25", 130, 2015, 180000, "Tyrol", 7, "https://cdn.pixabay.com/photo/2017/09/02/15/50/truck-2707698__480.jpg", "truck");
var rare1 = new Collection("Rolls-royce", "Phantom", 310, 1984, 12000, "London", "collection", "https://cdn.pixabay.com/photo/2022/10/05/18/00/rolls-royce-phantom-iii-7501249__480.jpg", "rare");
console.table(vehicleArray);
var contain = document.querySelector(".container");
for (var _i = 0, vehicleArray_1 = vehicleArray; _i < vehicleArray_1.length; _i++) {
    var items = vehicleArray_1[_i];
    contain.innerHTML += "\n    <div class=\"card ".concat(items.category, " row\" style=\"width:20rem\">\n  <img src=\"").concat(items.image, "\" class=\"card-img-top w-100 h-25\" alt=\"\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Category : ").concat(items.category, " <br>").concat(items.Brand, "<br>").concat(items.Model, "</h5>\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n  </div>\n  <ul class=\"list-group list-group-flush\">\n    <li class=\"list-group-item\">This vehicle was produced in ").concat(items.YearsOfProd, "</li>\n    <li class=\"list-group-item\">Actual kilometer : ").concat(items.kilometer, "</li>\n    <li class=\"list-group-item\">Location : ").concat(items.Location, "</li>\n    <li class=\"list-group-item\">Max speed : ").concat(items.MaxSpeed, "</li>\n\n  </ul>\n  <div class=\"card-body\">\n    <a href=\"#\" class=\"card-link\" onclick=\"price()\">Price</a>\n  </div>\n</div>");
}
