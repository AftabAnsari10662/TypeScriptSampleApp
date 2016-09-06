interface IEmployee {

    doWork(): void;

}


import { Person } from "./Person";
export class Employee extends Person implements IEmployee {

    constructor(name: string, age: number) {
        super(name, age);
    }
    doWork(): void {
        console.log(`${this.name} is working`);
    }

}