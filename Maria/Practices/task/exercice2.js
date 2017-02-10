/*
2. Create an Area Calculator for the following c 
    1. Rectangle
   2. Circle
   3. Triangle


*/

function shapeRectangle(height, width, shape) {
    this.shape = shape;
    this.height = height;
    this.width = width;
};

shapeRectangle.prototype.display = function () {
	console.log('Shape: Rectangle');
    console.log('Length: ' + this.height);
    console.log('Width: ', this.width);
    console.log(this.calculateArea());
};

shapeRectangle.prototype.calculateArea = function () {
    return ("The Area is:" + this.width * this.height);
}

function shapeCircle(radius) {
    this.radius = radius;
}

shapeCircle.prototype.display = function () {
	console.log('Shape: Circle');
    console.log('Radius: ' + this.radius);
    console.log(this.calculateArea());
};

shapeCircle.prototype.calculateArea = function () {
    return ('The Area is: ' + this.radius * this.radius * Math.PI );
};

function shapeTriangle(sideOne, sideTwo, sideThree) {
	console.log('Shape: Triangle');
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
};

shapeTriangle.prototype.display = function () {
    console.log('Side 1: ' + this.sideOne);
    console.log('Side 2: ' + this.sideTwo);
    console.log('Side 3: ' , this.sideThree);
    console.log('The Area is:' + this.calculateArea());
};

shapeTriangle.prototype.calculateArea = function () {

     var area = (Math.sqrt(this.calculatePerimeter()*((this.calculatePerimeter()-this.sideOne)*(this.calculatePerimeter()-this.sideTwo)*(this.calculatePerimeter()-this.sideThree))));
     return area;
};

shapeTriangle.prototype.calculatePerimeter = function () {
	var perimeter = (this.sideOne + this.sideTwo + this.sideThree) / 2;
    return perimeter;
};

var rectangle = new shapeRectangle(4, 5);
rectangle.display();

var circle = new shapeCircle(Math.floor((Math.random() * 6) + 1));
circle.display();

var triangle = new shapeTriangle(3, 3, 1);
triangle.display();