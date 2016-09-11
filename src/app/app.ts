/// <reference path="../typings/angularjs/angular.d.ts" />
// import { Greeter } from "./Greeter"

// var greeter:Greeter = new Greeter("TypeScript");

// greeter.sayHello();
// greeter.sayGoodMorning();
// greeter.sayGoodBye();

$(".btn").click()
angular.module("app.core",[]);
import { Company } from "./Company"

let company = new Company();
company.hire("Aftab","Anshul","Rohit","Remmie");
company.doWork();

