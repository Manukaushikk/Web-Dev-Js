// 𝐄ꗟ6 Version Of JS

// Template String
// var user = "Manu Kaushik"
//     document.write("Hello" + user + "Welcome to year 2022"); This is normal method 
// var greet = `Hello ${user}`
// console.log(greet)

// let firstName = "Manu";
// let lastName = "Kaushik";

// function fullName(firstName, lastName) {
//     return `${firstName} ${lastName}`;
// }

// let hello = `Hello ${fullName(firstName,lastName)}`;

// document.write(hello);
// console.log(hello);

// Arrow Function
// let hello = () => console.log("Hello");
// hello();

// in below this is before the es6 method
// let welcome = function(name) {
//     return `Hello & Welcome ${name}`;
// }
// console.log(welcome("Manu"));

// Now in ES6
// let welcome = (name, age) => `Hello & Welcome ${name} - ${age}`;
// {
// return `Hello & Welcome ${name} - ${age}`;
// }
// console.log(welcome("Manu", 21));

// Rest operator

// function sum(name, ...args) {
//     console.log(arguments);

//     document.write(`Hello ${name}:`);

//     let sum = 0;
//     for (let i in args) {
//         sum += args[1];
//     }
//     document.write(sum + "<br>")
// }     
// sum("Ramu", 20, 30, 40);
// sum("Shivansi", 20, 98, 40);
// sum(20, 30);

// Spread Operator
// function(...args) => Rest Operator
// sum(...args) => Spread Operator {Always used for calling

// function sum(name, ...args) {
//     console.log(arguments);

//     document.write(`Hello ${name}:`);

//     let sum = 0;
//     for (let i in args) {
//         sum += args[i];
//     }
//     document.write(sum);
// }
// var arr1 = [10, 20, 30];

// var arr2 = arr1;
// var arr2 = [...arr1];
// arr1.push(50)
// console.log(arr1);
// console.log(arr2);
// sum("Ramu", ...arr);


// var arr1 = [10, 20, 30];

// var arr2 = [60, 50];

// var arr3 = [4, ...arr2, ...arr1, 5]; //spread operator 
// var arr3 = [...arr2, ...arr1]; //spread operator 

// console.log(arr3);

// var obj1 = {
//     name: "Mk",
//     course: "btech"
// };

// var obj2 = {
//     age: 21
// };

// var obj3 = {...obj1, ...obj2 };

// console.log(obj3);

// Object literals

// let name = "Purvi";
// let course = "Btech";

// var obj = {
//     name,
//     course,

// };

// console.log(obj);

// Another Way

// let n = "name";

// var obj = {
//     [n]: "Lol",
//     course: "Bcom",

// };

// console.log(obj);
// console.log(obj.name);

// Another Way

// let n = "student";

// var obj = {
//     [n + "name"]: "Lol",
//     course: "Bcom",
//     detail: function() {
//         return `${this.studentname} is student of ${this.course}`
//     }

// };

// console.log(obj);
// console.log(obj.detail());

// New function Syntax

// let obj = {
//     name: "Kuch bhi",
//     show() {
//         console.log(this.name);
//     }
// };
// console.log(obj.name);

// let name = "Poori";
// let course = "CA";

// function student(name, course) {
//     return { name, course };
// }
// console.log(student(name, course));

// Function call stacks
// function ceo() {
//     console.log("Let's make a dent in the universe")
//     cto()
// }

// function cto() {
//     console.log("Let's make a gamechanging product0")
//     vpengg()
// }

// function vpengg() {
//     console.log("Let's make a new javascript framework")
//     techlead()
// }

// function techlead() {
//     console.log("Let's port Angular to TypeScript")
//     developer()
// }

// function techlead() {
//     console.log("Let's copy some code form Stackflow")
//     throw new Error("The code didn't work")
// }
// ceo()

// setTimeout && setInterval

// var intervalId = 0;
// var runcount = 0;

// function sayHello() {
//     runcount++;
//     if (runcount > 5) {
//         clearInterval(intervalId)
//     }
//     console.log("Hello !")
// }

// console.log("And the wait starts ...");
// var intervalId = setInterval(sayHello, 1000)

// var myfun = function() {
//     console.log("This runs after 1 sec")
// }
// setInterval(myfun, 1000)
// var str = "My name is Manu Kaushik"
// var output = str.split("").reverse().join("");
// document.write(output);

// let user = {
//     name: "Ram Ram Ji",
//     age: 51,
//     city: "UP"
// }
// let { name, age, city } = user;
// let { name:a, age:b, city:c } = user;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(name);
// console.log(age);
// console.log(city);

// class hello {
//     message() {
//         console.log("Hello Everyone");
//     }
//     sorry() {
//         console.log("Sorry Everyone");
//     }
// }
// let a = new hello()
// a.message()
// a.sorry()

// constructor example
// constructor (){
// console.log("hello");
// }

// message example
// message(){
// console.log("hello");
// }

// static name() {
// console.log("hello");
// }