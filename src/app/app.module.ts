/// <reference path="../typings/tsd.d.ts"/>
import * as angular from "angular";
class  App {

constructor(){
let main = angular.module("app", ["ngRoute"]);

    let routeConfig = ($routeProvider: ng.route.IRouteProvider) => {

        $routeProvider.when("/home", {
            template: "/main.template.html",
            controller: "HomeController"
        })
    }

    main.config(routeConfig);
    routeConfig.$inject = ["$routeProvider"];

}
    
}