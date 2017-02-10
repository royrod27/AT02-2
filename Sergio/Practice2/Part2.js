function circle(radius) {
    this.radius = radius;
}

circle.prototype.returnArea = function () {
    return Math.PI * this.radius * this.radius;
};

function rectangle(base, high) {
    this.base = base;
    this.high = high;

}

rectangle.prototype.returnArea = function () {
    return this.base * this.high;
}

function triangle(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
}

triangle.prototype.perimeter = function () {
    return this.sideA + this.sideB + this.sideC;
}

triangle.prototype.returnArea = function () {
    return (Math.sqrt(this.perimeter() / 2 * ((this.perimeter() / 2 - this.sideA) * (this.perimeter() / 2 - this.sideB) * (this.perimeter() / 2 - this.sideC))))
}

var circ = new circle(4);
var rect = new rectangle(4, 2);
var tria = new triangle(3, 4, 5);

console.log(circ.returnArea());
console.log(rect.returnArea());
console.log(tria.returnArea());