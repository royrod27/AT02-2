var students = [];
function Student(name, age) {
   this.name = name;
   this.age = age;
}

Student.prototype.address = function(city) {
   this.city = city;
   return this;
};


function Course() {
   this.addStudents = function(student) {
       students.push(student);
   };

   this.numberOfStudents = function() {
       return students.length
   };

};

Course.prototype.lisOfStudentByCity = function(city) {
       var studentsByCity = [];
       for (var counter = 0; counter < students.length; counter++) {
           if (students[counter].city === city) {
               studentsByCity.push(students[counter])
           }
       }
       return studentsByCity;
};

Course.prototype.averageAge = function() {
       var sum = 0;
       for (var counter = 0; counter < students.length; counter++) {
           sum += students[counter].age;
       }
       return (sum/students.length);
};


var math = new Course();

math.addStudents(new Student("Juan", 21).address("Cbba"));
math.addStudents(new Student("Pedro", 18).address("Lpz"));
math.addStudents(new Student("Luisa", 15).address("Lpz"));
math.addStudents(new Student("Maria", 24).address("Lpz"));
math.addStudents(new Student("Carlos", 22).address("Cbba"));

console.log("Number of Students: ", math.numberOfStudents());

var studentsCity = math.lisOfStudentByCity("Lpz");
for (var i = 0; i < studentsCity.length; i++) {
   console.log("City: ",studentsCity[i].city," Student: ", studentsCity[i].name);
}

console.log("The average age: ", math.averageAge());