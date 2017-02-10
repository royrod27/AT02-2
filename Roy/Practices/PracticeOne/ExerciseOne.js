//Created by Roy Rodriguez M.
//02/02/2017
function Student(name, age) {
    if (age<=17) {
        console.log("Hello " + name + 'you are so young.');
    }
    else {
        console.log("Hello " + name);
    }
}
Student('Roy', 17);