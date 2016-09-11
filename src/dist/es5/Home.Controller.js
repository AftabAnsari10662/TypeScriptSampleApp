define(["require", "exports"], function (require, exports) {
    "use strict";
    var HomeController = (function () {
        function HomeController() {
            this.message = "Home Page!";
            this.title = "Index Page";
        }
        return HomeController;
    }());
    exports.HomeController = HomeController;
});
