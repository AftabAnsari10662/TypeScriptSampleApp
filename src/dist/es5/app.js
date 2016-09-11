/// <reference path="../typings/angularjs/angular.d.ts" />
define(["require", "exports", "./Company"], function (require, exports, Company_1) {
    "use strict";
    var clickHandler = function () { return alert("Who clicked me??"); };
    $(".btn").click(clickHandler);
    angular.module("app.core", []);
    var company = new Company_1.Company();
    company.hire("Aftab", "Anshul", "Rohit", "Remmie");
    company.doWork();
});
