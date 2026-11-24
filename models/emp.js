
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Employee = sequelize.define("Employee", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ename: {
        type: DataTypes.STRING
    },
    location: {
        type: DataTypes.STRING
    },
    dept: {
        type: DataTypes.STRING
    },
    sal: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: "employees",
    timestamps: false
});

module.exports = Employee;
