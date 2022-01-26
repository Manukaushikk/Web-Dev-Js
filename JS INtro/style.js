// let a = 10;
// console.log(a);

// let b = [1, 2, 3, 4, 5];
// console.log(b);
// console.log("Hello World");


// Javascript
// Variables, Arrays, Functions, Loops, Classes, Objects 

// c = 20; // Global Variable
// var d = 30; //Function Scope 
// let e = 50; //Block Scope

// Arrays
// let arr = ["Apple", "Mango", "Kiwi"]
// console.log(arr);

// arr.push("Banana"); //Insert at Back
// arr.pop(); // Remove from Back
// arr.shift(); // Remove from Front
// arr.unshift("Orange"); // Insert at Front
// arr.indexOf("Kiwi"); //find you the index

// if (arr[0] == "Apple") {
//     console.log("Apple");
// } else {
//     console.log("No it is ", arr[0])
// }










// function fun() {
//     let a = 5;
//     if (a == 5) {
//         f = 10; //let has a block scope, var has a function scope
//         console.log("Inside", f);
//     }
//     console.log("Outside", f);
// }
// fun();
// console.log("Global", f);

// function square_root(n) {
//     console.log("In first sqrt fn");
//     console.log(Math.sqrt(n));
//     return;
//     return "hello";
// }

// Function Hosting
// var sqrt_n = function() {

//     console.log("In second Sqrt Fn");
//     return;
// }

// Classes and Objects

// Another Way
// function fruit(taste, color) {
//     this.color = color;
//     this.taste = taste;
// }

// new keyword
// let mango = new fruit("sweet", "yellow");
// let orange = new fruit("sour", "orange");

// one way
// var apple = {
//     taste: "sweet",
//     color: "red",
// }

// class keyword (ECMAScript 2015) // ECMAScript also known as javascript

// Class Declaration 
// class fruit {
//     constructor(taste, color) {
//         this.color = color;
//         this.taste = taste;
//     }
// };

// Function - CSSStyleDeclaration, Function Expression
// let kiwi = new fruitclass("sour", "green");

// Strings 
// let p = 'arav'
//     let str = 'This is myselfve\'s string'
//     let str = `This is ${p}'s string`
// let longstr = `this is \
// a very long\
// string`
// console.log(longstr)
//     console.log(str)

// Searching
// let s1 = 'this is a easy job'
// let s2 = 'ab aab abbcsa ba aab bss'
//     console.log(s1.indexOf('is', 3))
// console.log(s2.indexOf('ab', 1))

// String Methods

// let mainstr = 'this is a long string'
// let smallstr = mainstr.substr(4, 3) // In this 4 is the starting point and 3 is the  printing next 3 string or any doubt refer this: https://www.techonthenet.com/js/string_substr.php
//     let smallstr = mainstr.slice(3, 4)

// console.log(smallstr)

// Arrays - Add/Remove

// let fruits = ["apple", "mango"]

// push and pop

// fruits.push("Melon")
// console.log(fruits)

// fruits.pop()
// console.log(fruits)

// Shift and Unshift
// fruits.shift();
// console.log(fruits)

// fruits.unshift("Kiwi");
// console.log(fruits)

// Data Changing
let notes = ['do', 're', 'mi', 'fa', 'ls', 'me', 'vc', 'ui']

// slice
// notes.slice(4, 6)
// console.log(notes)
// console.log(notes.slice(3))

// spice
// let omit = notes.splice(4, 2)
// console.log(omit)
// console.log(notes)

// spice - Part 2

// notes.splice(0, 3, 'sa', 're', 'ga')
// console.log(notes)

// concat
console.log(notes.concat(['sa', 're', 'ga']))
console.log(notes)