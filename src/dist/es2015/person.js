define(["require", "exports"], function (require, exports) {
    "use strict";
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        get name() {
            return this._name;
        }
        get age() {
            return this._age;
        }
        getDetail() {
            console.log(`${this.name} is ${this.age} year old.`);
        }
    }
    exports.Person = Person;
    let person = new Person("Aftab Ansari", 22);
    person.getDetail();
});
