define(["require", "exports", "./Greeter"], function (require, exports, Greeter_1) {
    "use strict";
    class App {
        constructor() {
            this.greeter = new Greeter_1.Greeter("Aftab");
        }
        run() {
            this.greeter.sayHello();
            this.greeter.sayGoodMorning();
            this.greeter.sayGoodBye();
        }
    }
    exports.App = App;
});
