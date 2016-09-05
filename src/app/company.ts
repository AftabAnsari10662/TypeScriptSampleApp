import { Employee } from "./Employee"
export class Company {

    employees: Array<Employee>;
    hire(...names): void {
        this.employees = names.map(n => new Employee(n, 25));
    }

    doWork(): void {
    this.employees.forEach(e => {
        e.doWork();
    });
    }
}