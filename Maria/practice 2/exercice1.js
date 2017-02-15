/*
1 create a program that allows students to register to diferent courses, and this program     should be able to display the following
    1. Number total of student for course
    2. List student by city
    3. The average age for course

*/


function Address(street, houseNumber, city){
	this.street = street;
	this.houseNumber = houseNumber;
	this.city = city;
	
	this.display= function(){
       console.log('Street:', this.street,
       	            ', house:', this.houseNumber,
       	            ',city:'+ this.city);

	}
};



function Student(name,age,street, number,city){
	this.name = name;
	this.age = age;
	this.city = city;
    this.address = new Address(street, number,city);
    this.display = function() {
      console.log('Name:'+ this.name);
      console.log('Age:'+ this.age);
    
    };
   

};


Student.prototype.display = function () {
    console.log('Student Name: ', this.name,' Age:', this.age);
}


var citiesStudents = new Array();


function registerCourse(course){
	this.course = course;
	this.students = new Array(); 
	this.registerStudent = function(name,age,street,number,city){
        var student = new Student(name, age, street,number,city); 
        
        this.students.push(student);

        if (citiesStudents.indexOf(city) <= -1)
        	citiesStudents.push(city);


	};

	registerCourse.prototype.average = function () {
        var total = 0;
        for (var i = 0; i < this.students.length; i++) {
            total += this.students[i].age;
        }
        console.log('Average is: ', total / this.students.length);
    }
       
}


registerCourse.prototype.countStudents = function () {
    console.log('Total student:' + this.students.length);
};

registerCourse.prototype.display = function () {
    console.log('Course: ', this.course);
    for (var i = 0; i < this.students.length; i++) {
        this.students[i].display();
    }
}

var courses = new Array();

courses[0] = new registerCourse('A');
courses[0].registerStudent('Angel',15,'Circunvalacion', 105,'Cochabamba');
courses[0].registerStudent('Pepe',17,'Melchor', 45,'Cochabamba');
courses[1] = new registerCourse('B');
courses[1].registerStudent('Juan',18,'Simon Lopez', 80,'La Paz');


for (var i = 0; i < courses.length; i++) {
     console.log('Students  Course :'+ courses[i].course);
     courses[i].countStudents();
     courses[i].average();
}


for (var i = 0; i < citiesStudents.length; i++) {
	console.log('Students city:'+ citiesStudents[i]);
    for (var j = 0; j < courses.length; j++) {
        for (var k = 0; k < courses[j].students.length; k++) {
            if (courses[j].students[k].city === citiesStudents[i]) {
                console.log(courses[j].students[k].display());
            }
        }
    }
  
}

