const Employee = require ("./employee")

class Intern extends Employee {
    constructor (name, id, email, college) {
        super(name, id, email)
        this.college = college
    }
    getCollege() {
        return this.college;
    };
    getRole() {
        return "Intern";
    };
}

module.exports = Intern