/// <reference path="../typings/tsd.d.ts"/>
define(["require", "exports", "jquery", "angular", "./Company"], function (require, exports, $, angular, Company_1) {
    "use strict";
    var clickHandler = function () { return alert("Who clicked me??"); };
    $(".btn").click(clickHandler);
    angular.module("app.core", []);
    var company = new Company_1.Company();
    company.hire("Aftab", "Anshul", "Rohit", "Remmie");
    company.doWork();
});
