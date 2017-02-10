function student(name, age) {
	var n=name;
	var a=age;
	if(a<17){
		console.log("Student:" + name + " is too young");
	} else {
		console.log("Student: " + name + " is " + a + " years old");
	}
};

student('david', 10);