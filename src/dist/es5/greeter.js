define(["require", "exports"], function (require, exports) {
    "use strict";
    var Greeter = (function () {
        function Greeter(personName) {
            this.personName = personName;
        }
        Greeter.prototype.sayGoodMorning = function () {
            console.log("Good Morning!");
        };
        Greeter.prototype.sayHello = function () {
            console.log("Say Hello invoked!");
            console.log("Hellooooo! " + this.personName);
        };
        Greeter.prototype.sayGoodBye = function () {
            console.log("Say Good Bye method invoked");
            console.log("GoodBye!! " + this.personName);
        };
        return Greeter;
    }());
    exports.Greeter = Greeter;
});
