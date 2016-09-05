var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./Person"], function (require, exports, Person_1) {
    "use strict";
    var Employee = (function (_super) {
        __extends(Employee, _super);
        function Employee(name, age) {
            _super.call(this, name, age);
        }
        Employee.prototype.doWork = function () {
            console.log(this.name + " is working");
        };
        return Employee;
    }(Person_1.Person));
    exports.Employee = Employee;
});
