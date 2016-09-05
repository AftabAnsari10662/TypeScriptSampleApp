// import { Greeter } from "./Greeter"
define(["require", "exports", "./Company"], function (require, exports, Company_1) {
    "use strict";
    var company = new Company_1.Company();
    company.hire("Aftab", "Anshul", "Rohit", "Remmie");
    company.doWork();
});
