var Person = /** @class */ (function () {
    function Person(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.hello = function () {
        return "Hello there, my name is ".concat(this.name, " and I'm ").concat(this.age, " years old, and i am a ").concat(this.jobTitle);
    };
    return Person;
}());
var person = new Person("Mike", 25, "dentist");
console.log(person.hello());
