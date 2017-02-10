//Create an Area calculator for the following shapes: Rectangle, Circle, Triangle.

function Area() {
	this.rectangle = function(height, widgth) {
		return height * widgth;
	}

	this.circle = function(radious) {
		return radious * radious * Math.PI;
	}

	this.triangle = function(base, height) {
		return base * height * (1/2);
	}
}

var area = new Area();
console.log('The area of rectangle with height:4 and widgth:5 is :', area.rectangle(4, 5));
console.log('The area of circle with radius:6 is :', area.circle(6));
console.log('The area of triangle with base:4 and widgth:5 is :', area.triangle(4, 5));




