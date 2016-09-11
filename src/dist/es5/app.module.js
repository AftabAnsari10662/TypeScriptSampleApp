define(["require", "exports", "angular"], function (require, exports, angular) {
    "use strict";
    var App = (function () {
        function App() {
            var main = angular.module("app", ["ngRoute"]);
            var routeConfig = function ($routeProvider) {
                $routeProvider.when("/home", {
                    template: "/main.template.html",
                    controller: "HomeController"
                });
            };
            main.config(routeConfig);
            routeConfig.$inject = ["$routeProvider"];
        }
        return App;
    }());
});
