console.log("Script loaded")

// var is for global variables
var y = 4
function myFunc() {
    y = 3
}
myFunc();
console.log(y);

// let is block scope variable
let x = 6;
function myFunc2() {
    x = 4;
}
myFunc();
console.log(x);


// -------- Date Types --------

var var1 = 5;
var var2 = "something";

console.log(typeof (var1)); // output: number
console.log(typeof (var2)); // output: string

function typeCheck(uin){
    if(typeof(uin) === 'string'){
        console.log("ok")
    }
}

typeCheck("8");
