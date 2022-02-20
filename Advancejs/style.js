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

var obj1 = {
    name: "Mk",
    course: "btech"
};

var obj2 = {
    age: 21
};

var obj3 = {...obj1, ...obj2 };

console.log(obj3);