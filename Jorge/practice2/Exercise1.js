/*
Create a program that allows students to register to diferent courses
and this program sould be able to display the fallowing
1. Number total od student per course
2. List student by city
3. The aerage age per course
*/


function Student(name, age, city) {
	this.name = name;
	this.age = age;
	this.city = city;

	this.display = function() {
		console.log('Name: ' + this.name);
		console.log('Age:', this.age);
		console.log('City', this.city);
	};

};

function Course(name) {
	this.name = name;
	this.students = [];
	this.addStudent = function(student) {
		this.students.push(student);
	};

	this.numberStudents = function() {
		return this.students.length;
	}

	this.averageAge = function() {
		var average = 0;
		this.students.forEach(function(student) {
    		average = average + student.age;
		});
		return average / this.students.length;	
	}

	this.studentsByCity = function(city) {
		var listStudents = [];
		this.students.forEach(function(student) {
			if(student.city == city) {
				listStudents.push(student);
			}
		});
		return listStudents;
	}

	this.displayListStudents = function(students) {
		students.forEach(function(student) {
    		console.log(student.display());
		});	
	};


	this.display = function() {
		this.students.forEach(function(element) {
    		console.log(element.display());
		});	
	};

};



var course = new Course('AT02');
course.addStudent(new Student('jorge', 18, 'Trinidad'));
course.addStudent(new Student('maria', 21, 'Cocha'));
course.addStudent(new Student('roy', 23, 'Trinidad'));
course.addStudent(new Student('fer', 34, 'oruro'));

console.log('Number of Students:', course.numberStudents());
console.log('Course average Age:', course.averageAge());
console.log('Students by city: Trinidad');
course.displayListStudents(course.studentsByCity('Trinidad'));


