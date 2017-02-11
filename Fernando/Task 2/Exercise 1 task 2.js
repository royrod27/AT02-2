/**
 * Created by Fernando on 2/6/2017.
 */

console.log("****exercise 1 >> Program that can register students to courses and lists : *****");
console.log("Total students per each course");
console.log("Students by their city");
console.log("The average age of the total of students");
console.log("");

function Student(stName, stAge) {
    this.stName = stName;
    this.stAge = stAge;
}

Student.prototype.address = function (city) {
    this.city = city;
    return this;
};

var students = [];

function setCourse() {

    this.numberOfStudents = function () {
        return students.length;
    };

    this.addStudent = function (student) {
        students.push(student);
    };

    this.getStudentByCity = function (city) {
        var arrayStudentByCity = [];

        for (var aux = 0; aux < students.length; aux++) {
            if (students[aux].city === city) {
                arrayStudentByCity.push(students[aux])
            }
        }
        return arrayStudentByCity;
    }

    this.getAverageAge = function () {
        var sumAge = 0;
        for (var aux = 0; aux < students.length; aux++) {
            sumAge += students[aux].stAge;
        }
        return (sumAge/students.length);
    }
}
var setCourse;
var student;

setCourse = new setCourse();
student = new Student("David", 11).address("Cochabamba");
setCourse.addStudent(student);
setCourse.addStudent(new Student("Marian", 11).address("Cochabamba"));
setCourse.addStudent(new Student("Sergio", 12).address("Cochabamba"));
setCourse.addStudent(new Student("Fernando", 17).address("Oruro"));
setCourse.addStudent(new Student("Roy", 13).address("Cochabamba"));
setCourse.addStudent(new Student("Gualberto", 15).address("Cochabamba"));
setCourse.addStudent(new Student("Jorge", 14).address("Beni"));

console.log("Number of Students registered >>> ", setCourse.numberOfStudents());

var findByCity;
var auxCity;
var intAverageAge;

findByCity = setCourse.getStudentByCity("Oruro"); // **** set this string to another city to find students by their city.
    for (auxCity = 0; auxCity < findByCity.length; auxCity++) {
        console.log("REgistered student >>> ", findByCity[auxCity].stName, ", is from the city >>> ", findByCity[auxCity].city);
    }
intAverageAge = parseInt(setCourse.getAverageAge());
console.log("Average age of Students is >>> ", intAverageAge ) ;