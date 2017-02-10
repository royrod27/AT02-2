function Rectangle(width,height){
	this.width = width;
	this.height= height;
}

Rectangle.prototype.display = function(){
	console.log('The area of the rectangle is: ',this.rectangleAreaCalculator());
}

Rectangle.prototype.rectangleAreaCalculator = function(){
	return this.width*this.height;
}


function Circle(radius){
	this.radius = radius;
}

Circle.prototype.display = function(){
	console.log('The area of the circle is: ',this.circleAreaCalculator());
}

Circle.prototype.circleAreaCalculator = function(){
	return Math.PI*Math.pow(this.radius,2);
}


function Triangle(base,v_height){
	this.base = base;
	this.v_height = v_height;
}

Triangle.prototype.display = function(){
	console.log('The area of the triangle is: ',this.triangleAreaCalculator());
}

Triangle.prototype.triangleAreaCalculator = function(){
	return (this.base*this.v_height)/2;
}


var rectangle = new Rectangle(5,3);
rectangle.display();

var circle = new Circle(3);
circle.display();

var triangle = new Triangle(20,12);
triangle.display();