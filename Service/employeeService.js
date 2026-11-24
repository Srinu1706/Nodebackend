
const repo = require("../repositories/employeeRepository");

class EmployeeService {

    async getAllEmployees() {
        return await repo.findAll();
    }

    async getEmployeeById(id) {
        return await repo.findById(id);
    }

    async saveEmployee(employee) {
        return await repo.save(employee);
    }

    async deleteEmployee(id) {
        return await repo.deleteById(id);
    }
    async updateEmployee(id,employee){
        return await repo.update(id,employee)
    }
}

module.exports = new EmployeeService();
