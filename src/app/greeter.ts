export class Greeter {

    personName: string;

    constructor(personName: string) {

        this.personName = personName;
    }

    sayGoodMorning(): void {
        console.log("Good Morning!");
    }
    sayHello(): void {

        console.log("Say Hello invoked!");
        console.log(`Hellooooo! ${this.personName}`);
    }

    sayGoodBye(): void {
        console.log("Say Good Bye method invoked");
        console.log(`GoodBye!! ${this.personName}`)
    }
}