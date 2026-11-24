
const { where } = require("sequelize");
const Employee = require("../models/emp");

class EmployeeRepository {

    async findAll() {
        return await Employee.findAll();
    }

    async findById(id) {
        return await Employee.findByPk(id);
    }

    async save(employee) {
        return await Employee.create(employee);
    }

    async deleteById(id) {
        return await Employee.destroy({
            where: { id }
        });
    }

    async update(id,employee){
        return await Employee.update({
            where:{id:id}
        })
    }
}

module.exports = new EmployeeRepository();
