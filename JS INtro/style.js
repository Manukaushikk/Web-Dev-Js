let a = 10;
console.log(a);

let b = [1, 2, 3, 4, 5];
console.log(b);
console.log("Hello World");


//Javascript
//Variables, Arrays, Functions, Loops, Classes, Objects 

c = 20; // Global Variable
var d = 30; //Function Scope 
let e = 50; //Block Scope

function fun() {
    let a = 5;
    if (a == 5) {
        f = 10; //let has a block scope, var has a function scope
        console.log("Inside", f);
    }
    console.log("Outside", f);
}
fun();
console.log("Global", f);

function square_root(n) {
    console.log("In first sqrt fn");
    // console.log(Math.sqrt(n));
    return;
    // return "hello";
}

// Function Hosting
var sqrt_n = function() {

    console.log("In second Sqrt Fn");
    return;
}