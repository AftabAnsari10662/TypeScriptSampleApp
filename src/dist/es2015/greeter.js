define(["require", "exports"], function (require, exports) {
    "use strict";
    class Greeter {
        constructor(personName) {
            this.personName = personName;
        }
        sayGoodMorning() {
            console.log("Good Morning!");
        }
        sayHello() {
            console.log("Say Hello invoked!");
            console.log(`Hellooooo! ${this.personName}`);
        }
        sayGoodBye() {
            console.log("Say Good Bye method invoked");
            console.log(`GoodBye!! ${this.personName}`);
        }
    }
    exports.Greeter = Greeter;
});
