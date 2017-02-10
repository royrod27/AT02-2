// Create a program that creates a student and displays
// that he is too young when his age is less than 17.

function Students() {
    this.student = function (name, age) {
        return age < 17 ? name + ' is too young' : name;
    }
}

var st1 = new Students();
var st2 = new Students();

console.log(st1.student('ser', 10));
console.log(st2.student('an', 18));