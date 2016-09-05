define(["require", "exports"], function (require, exports) {
    "use strict";
    var Person = (function () {
        function Person(name, age) {
            this._name = name;
            this._age = age;
        }
        Object.defineProperty(Person.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "age", {
            get: function () {
                return this._age;
            },
            enumerable: true,
            configurable: true
        });
        Person.prototype.getDetail = function () {
            console.log(this.name + " is " + this.age + " year old.");
        };
        return Person;
    }());
    exports.Person = Person;
    var person = new Person("Aftab Ansari", 22);
    person.getDetail();
});
