define(["require", "exports", "./Employee"], function (require, exports, Employee_1) {
    "use strict";
    var Company = (function () {
        function Company() {
        }
        Company.prototype.hire = function () {
            var names = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                names[_i - 0] = arguments[_i];
            }
            this.employees = names.map(function (n) { return new Employee_1.Employee(n, 25); });
        };
        Company.prototype.doWork = function () {
            this.employees.forEach(function (e) {
                e.doWork();
            });
        };
        return Company;
    }());
    exports.Company = Company;
});
