// Creates a program that allows students to register to different courses,
// and this program should be able to display the following:
// Number total of students per course
// List students by city
// The students average age per course.

var cities = new Array();

function Student(nameStudent, city, age) {

    this.name = nameStudent;
    this.age = age;
    this.city = city;
}

Student.prototype.display = function () {
    console.log('Student Name: ', this.name, ' City: ', this.city, ' Age: ', this.age);
}

Student.prototype.displayCity = function () {
    console.log(this.city);
}

function Course(nameCourse) {
    this.name = nameCourse;
    this.students = [];

    this.addStudent = function (name, city, age) {
        var student = new Student(name, city, age);
        cities.push(city);
        this.students.push(student);
    };

    Course.prototype.average = function () {
        var sumAge = 0;
        for (var i = 0; i < this.students.length; i++) {
            sumAge += this.students[i].age;
        }
        console.log('the average for course is: ', sumAge / this.students.length);
    }
};

Course.prototype.countStudents = function () {
    console.log('Number of students to this course ', this.students.length);
};

Course.prototype.display = function () {
    console.log('Course: ', this.name);
    for (var i = 0; i < this.students.length; i++) {
        this.students[i].display();
    }
}

var listOfCourses = new Array();

listOfCourses[0] = new Course('AT');
listOfCourses[0].addStudent('ser', 'cba', 20);
listOfCourses[0].addStudent('fer', 'lpz', 15);
listOfCourses[1] = new Course('MT');
listOfCourses[1].addStudent('Ju', 'lpz', 23);
listOfCourses[1].addStudent('ros', 'tja', 24);

for (var i = 0; i < listOfCourses.length; i++) {
    listOfCourses[i].display();
    listOfCourses[i].countStudents();
    listOfCourses[i].average();
}

var citiesSort = cities.slice().sort();
var citiesUnique = new Array();

for (var i = 0; i < citiesSort.length; i++) {
    if (citiesSort[i] === citiesSort[i + 1]) {
        continue;
    }
    citiesUnique.push(citiesSort[i]);
}

var count = 0;

for (var k = 0; k < citiesUnique.length; k++) {
    for (var i = 0; i < listOfCourses.length; i++) {
        for (var j = 0; j < listOfCourses[i].students.length; j++) {
            if (listOfCourses[i].students[j].city === citiesUnique[k]) {
                count++;
            }
        }
    }
    console.log(citiesUnique[k], ' ', count);
    count = 0;
}






