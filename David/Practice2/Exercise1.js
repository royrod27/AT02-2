function Address(city) {
    this.city = city;
}
Address.prototype.display = function () {
    console.log('City', +this.city);
};

function Student(name, age) {
    this.name = name;
    this.age = age;
}
Student.prototype.address = function (city) {
    this.city = city;
    return this;
};

Student.prototype.display = function () {
    console.log('Name: ' + this.name);
    console.log('Age: ', this.age);
    console.log(this.address);
};

function Course() {
    var students = [];

    this.add = function (student) {
        students.push(student);
    },

        this.cantStudents = function () {
            return students.length;
        },

        this.cantStudentsByCity = function (city) {
            var cities = [];
            for (var index = 0; index < students.length; index++) {
                if (students[index].city === city) {
                    cities.push(students[index]);
                }
            }
            return cities;
        },

        this.average = function () {
            var total = 0;
            students.forEach(function (student) {
                total += student.age;
            });
            return total / course1.cantStudents();
        },

        this.displayByCity = function (cities) {
            for (var index = 0; index < cities.length; index++) {
                console.log("Students that lives on ", cities[index].city);
            }
            console.log("The quantity are:" + cities.length);
        }
}

var course1 = new Course();
var student1 = new Student('Pedro', 18).address('Cocha');
var student2 = new Student('Goni', 13).address('Snta');
var student3 = new Student('Lucaz', 16).address('Cocha');
var student4 = new Student('Paz', 17).address('Cocha');

course1.add(student1);
course1.add(student2);
course1.add(student3);
course1.add(student4);

console.log("Number of Students: " + course1.cantStudents());
course1.displayByCity(course1.cantStudentsByCity('Cocha'));
console.log("Average age for Student: " + course1.average());