define(["require", "exports", "./Greeter"], function (require, exports, Greeter_1) {
    "use strict";
    var greeter = new Greeter_1.Greeter("Aftab");
    greeter.sayHello();
    greeter.sayGoodMorning();
    greeter.sayGoodBye();
});
