function Rectangle(height, widgth) {
    this.height = height;
    this.width = widgth;
};

Rectangle.prototype.display = function () {
    console.log('Height: ' + this.height);
    console.log('Widgth: ', this.width);
    console.log('The Area of a Rectangle is: ' + this.area());
};

Rectangle.prototype.area = function () {
    return (this.width * this.height);
}

function Circle(rad) {
    this.rad = rad;
}

Circle.prototype.display = function () {
    console.log('Radius: ' + this.rad);
    console.log('The Area of a Circle is: ' +this.area());
};

Circle.prototype.area = function () {
    return (this.rad * this.rad * Math.PI );
};

function Triangle(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
};

Triangle.prototype.display = function () {
    console.log('Side1: ' + this.side1);
    console.log('Side2: ' + this.side2);
    console.log('Side3: ' , this.side3);
    console.log('The Area of a Triangle is: ' +this.area());
};

Triangle.prototype.area = function () {
    return (Math.sqrt(this.perimeter()*((this.perimeter()-this.side1)*(this.perimeter()-this.side2)*(this.perimeter()-this.side3))));
};

Triangle.prototype.perimeter = function () {
    return (this.side1 + this.side2 + this.side3) / 2;
};

var rectangle = new Rectangle(3, 8);
rectangle.display();

var circle = new Circle(Math.floor((Math.random() * 10) + 1));
circle.display();

var triangle = new Triangle(2, 3, 4);
triangle.display();

