export class Person {

    _name: string;
    _age: number;
    constructor(name: string, age: number) {

        this._name = name;
        this._age = age;
    }

    get name() {

        return this._name;
    }

    get age() {

        return this._age;
    }

    getDetail(): void {
        console.log(`${this.name} is ${this.age} year old`);
    }
}

let person = new Person("Aftab Ansari", 22);
person.getDetail();