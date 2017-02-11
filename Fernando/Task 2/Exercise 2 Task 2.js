/**
 * Created by Fernando on 2/6/2017.
 */

console.log("****exercise 2 >> Program that gets the area of Rectangle, Circle and Triangle : *****");
console.log("");

function GeometricShape() {
    this.getAreaRectangle=function(base,altura){
        return base*altura;
    }
    this.getAreaCircle=function (radio) {
        return Math.PI*radio*radio;
    }
    this.getAreaRectangularTriangle=function(base,altura){

        return (base*altura)/2;
    }

    this.getAreaRectangularTriangle=function(base,altura){

        return (base*altura)/2;
    }
}
var areaOfShape=new GeometricShape();

var areaOfRectangularTriangle = areaOfShape.getAreaRectangularTriangle(8,4); //Change this two values for Base and Height to receive a new Area of Rectangular triangle
console.log('The area of a Rectangular Triangle is >>> ' + areaOfRectangularTriangle + ' <<< if the hardcoded values are 8 and 4');

var areaOfCircle = areaOfShape.getAreaCircle(2);
console.log('The area of a Circle is >>> ' + areaOfCircle + ' <<< if the hardcoded value is 4');

var areaOfRectangle = areaOfShape.getAreaRectangle(8,4);
console.log('The area of a rectangle is >>> ' + areaOfRectangle + ' <<< if the hardcoded values are 8 and 4 too');

