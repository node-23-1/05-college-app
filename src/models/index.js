const Course = require("./Course");
const Professor = require("./Professor");
const Score = require("./Score");
const Student = require("./Student");
const Test = require("./Test");

Professor.belongsToMany(Student, { through: 'ProfessorsStudents' });
Student.belongsToMany(Professor, { through: 'ProfessorsStudents' });

Student.belongsToMany(Course, { through: 'StudentsCourses' });
Course.belongsToMany(Student, { through: 'StudentsCourses' });

Test.belongsTo(Course);
Course.hasMany(Test);

Score.belongsTo(Student);
Student.hasMany(Score);

Score.belongsTo(Test);
Test.hasMany(Score);
