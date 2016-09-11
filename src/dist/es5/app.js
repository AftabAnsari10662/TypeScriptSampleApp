/// <reference path="../typings/tsd.d.ts"/>
define(["require", "exports", "jquery", "angular", "./Company"], function (require, exports, $, angular, Company_1) {
    "use strict";
    var app;
    (function (app) {
        var main = angular.module("app", ["ngRoute"]);
        var routeConfig = function ($routeProvider) {
            $routeProvider.when("/home", {
                template: "/main.template.html",
                controller: "HomeController"
            });
        };
        main.config(routeConfig);
        routeConfig.$inject = ["$routeProvider"];
    })(app || (app = {}));
    var clickHandler = function () { return alert("Who clicked me??"); };
    $(".btn").click(clickHandler);
    angular.module("app.core", []);
    var company = new Company_1.Company();
    company.hire("Aftab", "Anshul", "Rohit", "Remmie");
    company.doWork();
});
