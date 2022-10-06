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
var Persons = /** @class */ (function () {
    function Persons(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Persons.prototype.hello = function () {
        return "Hello there, my name is ".concat(this.name, " and I'm ").concat(this.age, " years old, and i am a ").concat(this.jobTitle);
    };
    return Persons;
}());
var person = new Persons("Mike", 25, "dentist");
console.log(person.hello());
var Employees = /** @class */ (function (_super) {
    __extends(Employees, _super);
    function Employees(name, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, name, age, jobTitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    Employees.prototype.intro = function () {
        return "".concat(_super.prototype.hello.call(this), " and I get ").concat(this.salary, " every month, and I work in ").concat(this.jobLocation);
    };
    return Employees;
}(Persons));
var employee = new Employees("Jack", 32, "secretary", 1800, "Wien");
console.log(employee.intro());
