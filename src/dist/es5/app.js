define(["require", "exports", "./Greeter"], function (require, exports, Greeter_1) {
    "use strict";
    var App = (function () {
        function App() {
            this.greeter = new Greeter_1.Greeter("Aftab");
        }
        App.prototype.run = function () {
            this.greeter.sayHello();
            this.greeter.sayGoodMorning();
            this.greeter.sayGoodBye();
        };
        return App;
    }());
    exports.App = App;
});
