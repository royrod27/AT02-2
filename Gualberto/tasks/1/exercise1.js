function Student(name, age){
	if(age < 17){
		console.log('Hello ' + name + ' you are too young');
	}
	else {
		console.log('Hello ' + name + ' you are old enought');
	}
}

Student('Gualy', 15);