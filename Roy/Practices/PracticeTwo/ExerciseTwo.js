function Shape(name, sides) {
    this.name = name;
    this.sides = sides;
}

Shape.prototype.area = function () {
    var area = 0;
    switch (this.name) {
        case "Rectangle":
            area = this.sides[0] * this.sides[1];
            break;
        case "Triangle":
            var perimeter = (this.sides[0] + this.sides[1] + this.sides[2]) / 2;
            area = Math.sqrt(perimeter * (perimeter - this.sides[0]) * (perimeter - this.sides[1]) * (perimeter - this.sides[2]));
            break;
        case "Circle":
            area = Math.PI * this.sides[0] * this.sides[0];
            break;
    }
    return area;
};

var rectangleSides = [2, 5];
var rectangleArea = new Shape("Rectangle", rectangleSides).area();

var triangleSides = [2, 3, 4];
var triangleArea = new Shape("Triangle", triangleSides).area();

var circleRadius = [10];
var circleArea = new Shape("Circle", circleRadius).area();

console.log("Rectangle area is: ", rectangleArea);
console.log("Triangle area is: ", triangleArea);
console.log("Circle area is: ", circleArea);