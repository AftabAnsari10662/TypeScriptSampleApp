/// <reference path="../typings/tsd.d.ts"/>

import * as $ from "jquery";
import * as angular from "angular";
let clickHandler = () => alert("Who clicked me??");

$(".btn").click(clickHandler);
angular.module("app.core", []);
import { Company } from "./Company"

let company = new Company();
company.hire("Aftab", "Anshul", "Rohit", "Remmie");
company.doWork();

