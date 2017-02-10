function Student(name, age) {
    this.name = name;
    this.age = age;
}

Student.prototype.address = function (street, houseNumber, city) {
    this.street = street;
    this.houseNumber = houseNumber;
    this.city = city;
    return this;
};


function Course() {
    var students = [];

    this.addStudents = function (student) {
        students.push(student);
    };

    this.numberOfStudents = function () {
        return students.length
    };

    this.lisOfStudentByCity = function (city) {
        var studentsByCity = [];

        for (var index = 0; index < students.length; index++) {
            if (students[index].city === city) {
                studentsByCity.push(students[index])
            }
        }
        return studentsByCity;
    }

    this.averageAge = function () {
        var sum = 0;
        for (var index = 0; index < students.length; index++) {
            sum += students[index].age;
        }
        return (sum/students.length);
    }

}


var courseA = new Course();
var studentA = new Student("Carlos", 15).address("A", "001", "Alpha");
courseA.addStudents(studentA);
courseA.addStudents(new Student("Oscar", 16).address("B", "002", "Beta"));
courseA.addStudents(new Student("Pedro", 15).address("C", "003", "Alpha"));

console.log("Number of Students: ", courseA.numberOfStudents());

var studentsCityAlpha = courseA.lisOfStudentByCity("Alpha");
for (var indexTwo = 0; indexTwo < studentsCityAlpha.length; indexTwo++) {
    console.log("Student: ", studentsCityAlpha[indexTwo].name, " lives on ", studentsCityAlpha[indexTwo].city, "city");
}

console.log("Average age: ", courseA.averageAge());