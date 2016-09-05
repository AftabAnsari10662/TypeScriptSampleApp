
import { Greeter } from "./Greeter"
export class App {

    greeter: Greeter;

    constructor() {

        this.greeter = new Greeter("Aftab");

    }

    run(): void {

        this.greeter.sayHello();
        this.greeter.sayGoodMorning();
        this.greeter.sayGoodBye();
    }

}