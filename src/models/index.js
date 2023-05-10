const Course = require("./Course");
const Professor = require("./Professor");
const Student = require("./Student");

Professor.belongsToMany(Student, { through: 'ProfessorsStudents' });
Student.belongsToMany(Professor, { through: 'ProfessorsStudents' });

Student.belongsToMany(Course, { through: 'StudentsCourses' });
Course.belongsToMany(Student, { through: 'StudentsCourses' });
