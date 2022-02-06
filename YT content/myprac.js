// var a = 120;
// var b = "30";

// console.log(a == b);
// console.log(a === b);
// console.log(a != b);
// console.log(a !== b);
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);

// if (a > b) {
//     document.write("A is Greater");
// }

// var age = 20;

// if (age >= 18 && age <= 21) {
//     console.log("You are eligible")
// }

// var age = 22;

// if (age >= 18 || age <= 21) {
//     console.log("You are eligible")
// }

// var age = 20;

// if (!age <= 18) {
//     console.log("You are eligible")
// }

// var x = '30';
// var x = 30;
// var x = 35;

// if (x === 30) {
//     if (x == 30) {
//     if (x > 30) {
//     console.log("X is same");
//     console.log("X is Greater");
// } else {
//     console.log("X is not same");
//     console.log("X is Smaller");
// }

// var name1 = ' Akshita Kaushik';
// var name2 = 'Purvi Kaushik';
// var gender = "Male";

// if (gender == "Male") {
//     console.log("Hello Mr." + name1);
// } else {
//     console.log("Hello Miss. " + name2);
// }

// var per = prompt("Enter your Grade : ");

// if (per >= 80 && per <= 100) {
//     document.write("Merit");
// } else if (per >= 60 && per < 80) {
//     document.write("1st Division");
// } else if (per >= 45 && per < 60) {
//     document.write("2nd Division");
// } else if (per >= 33 && per < 45) {
//     document.write("3rd Division");
// } else if (per < 33) {
//     document.write("Fail");
// } else {
//     document.write("Please enter valid percentage");
// }

// Arithmetic Operator
// a = 10;
// b = 20;

// a = prompt("Enter for 1st number : ")
// b = prompt("Enter for 2nd number : ")

// ad = ++a;
// bd = --b;

// document.write(a + b);
// document.write("<br>"); // This is used for line break
// document.write(a - b);
// document.write("<br>");
// document.write(a / b);
// document.write("<br>");
// document.write(a * b);
// document.write("<br>");
// document.write(a % b);
// document.write("<br>");
// document.write(a ** b);
// document.write("<br>");
// document.write(ad);
// document.write("<br>");
// document.write(bd);

// Assignment Operator
// var a = 10;
// var b = 20;

// a = b;
// a *= b;
// a += b;
// a -= b;
// a /= b;
// a %= b;
// a **= b;
// console.log(a);

// Comparision Operator
// var a = 10

// document.write(a == 15)
// document.write("<br>");
// document.write(a === 15)
// document.write("<br>");
// document.write(a != 15)
// document.write("<br>");
// document.write(a !== 15)
// document.write("<br>");
// document.write(a > 15)
// document.write("<br>");
// document.write(a >= 15)
// document.write("<br>");
// document.write(a < 15)
// document.write("<br>");
// document.write(a <= 15)


// Logical  Operator
// var a = 13
// if (a > 10) {
//     document.write("A is Greater")
// }

// var a = 80
//     if (a >= 10 && a <= 15) {
//         document.write("A is bro")
//     }
//     if (a >= 10 || a <= 5) {
//         document.write("A is bro")
//     }
// if (!a <= 80) {
//     document.write("A is bro")
// }

// if - else statement
// var a = 10
// if (a > 10) {
//     document.write("A is Greater")
// } else {
//     document.write("A is Smaller")
// }

// var name1 = 'Raju'
// var name2 = 'Radsd'

// var gender = "Male"
// if (gender != "Male") {
//     document.write("hello Mr." + name1)
// } else {
//     document.write("hello Mrs." + name2)
// }

// var day = 3;

// switch (day) {
//     case 0:
//         document.write("Today is Monday");
//         break;

//     case 1:
//         document.write("Today is Tuesday");
//         break;

//     case 2:
//         document.write("Today is Wednesday");
//         break;

//     case 3:
//         document.write("Today is Thursday");
//         break;
// }

// alert("Hi its my website ")

// var a = confirm("Do you like my website")
// if (a != a) {
//     alert("Thanks")
// } else {
//     alert("Welcome")
// }

// var per = prompt("Enter the Percentage");

// if (per >= 80 && per <= 100) {
//     document.write("Merit");
// } else if (per >= 60 && per < 80) {
//     document.write("A grade");
// } else if (per >= 45 && per <= 60) {
//     document.write("C Grade");
// } else if (per >= 33 && per < 45) {
//     document.write("Pass");
// } else if (per >= 0 && per < 33) {
//     document.write("Fail");
// } else {
//     document.write("Enter a valid percentage");
// }

// function hello(fname, lname) {
//     document.write("Hello" + " " + fname + " " + lname + "<br>");
// }

// function sum(a, b) {
//     document.write("Hey the sum is" + " " + (a + b));
// }

// hello("Raj", "Kapoor");
// hello("Rajesh", "Khana");
// sum(10.75, 12);


// function fullname(fname = "Manu", lname = "Kaushik") {
//     var a = fname + " -  " + lname;

//     return a;
// }

// var fn = fullname("Ram", "Lal");
// document.write(fn);

// Events
// function hello() {
//     document.write("Hello Everyone");
//     alert("Hello Everyone");
// }

// While loops

// var a = 1;
// document.write("<ul>");
// while (a <= 10) {
//     document.write("<li>Hello Manu Kaushik</li>");
//     a = a + 1;
// }
// document.write("</ul>");

// break and continue
// for (var a = 1; a <= 10; a++) {
//     if (a == 3) {
//         document.write("Hey : " + a + "<br>")
//         continue;
//         break;

//     }
//     document.write("Number : " + a + "<br>")

// }

// find even and odd Number 
// for (var a = 1; a <= 100; a++) {
//     if (a % 2 != 0) {
//         document.write(a + "<br>")

//     }
// }

// Nested Loop
// for (var a = 1; a <= 100; a = a + 10) {
//     for (var b = a; b < a + 10; b++) {
//         document.write(b + " ");
//     }
//     document.write("<br>")

// }

// for (var a = 1; a <= 5; a++) {
//     for (var b = 1; b <= a; b++) {
//         document.write(b + " ")
//     }
//     document.write("<br> ")
// }

// for (var a = 1; a <= 5; a++) {
//     for (var b = 1; b <= a; b++) {
//         document.write(a)

//     }
//     document.write(" <br>")
// }


// for (var a = 5; a >= 1; a--) {
//     for (var b = 1; b <= a; b++) {
//         document.write(a)

//     }
//     document.write(" <br>")
// }


// for (var a = 5; a >= 1; a--) {
//     for (var b = a; b >= 1; b--) {
//         document.write(b)

//     }
//     document.write(" <br>")
// }

// var ab = [
//     ["Manu", 19, "Male", "bcom"],
//     ["laks", 17, "Male", "bba"],
//     ["Rashi", 18, "Female", "btech"],
//     ["Raj", 20, "Male", "bca"]
// ];
// document.write(ab[0])
// document.write("<table border = '1px' cellspacing = '0' > ");
// for (var a = 0; a < 4; a++) {
//     document.write("<tr>");
//     for (var b = 0; b < 4; b++) {
//         document.write("<td>" + ab[a][b] + "</td> ")

//     }
//     document.write("<tr>");
// }
// document.write("</table>")

// Delete in Array
// var a = ["manu", 22, "Male", "Bca"]
// document.write(a + "<br>")
// a[0] = "Sunny";
// document.write(a + "<br>")
// delete a[1];
// document.write(a + "<br>")


// document.write(a[1] + "<br>")

// Looping Array Elements
// var fruits = ["Mango", "Orange", "Apple", "Kiwi"];
// var veg = ["soya", "panner"];

// Array length
// console.log(fruits.length);
// console.log(fruits[0]);
// console.log(fruits.length - 1);

// Remove an Element from an Array
// console.log(fruits.pop()); //delete at the last
// console.log(fruits.shift()); //remove mango from the front

// Add an Element to an Array
// console.log(fruits.unshift('Mirch')); //add to the front
// console.log(fruits.push('panner')); //add to the front

// indexOf() ==  searches an element of an array and returns its position
// console.log(fruits.indexOf('Apple'));

// concat( )  ==  joins two or more arrays and returns a result
// console.log(fruits.concat(veg));

// find() == returns the first value of an array element that passes a test
// var totn_array = [-2, -1, 0, 7, 2];

// function greater_than_zero(totn_element) {
//     return totn_element > 0;
// }

// console.log(totn_array.find(greater_than_zero));

// findIndex() == returns the first index of an array element that passes a test

// const array1 = [15, 14, 2, 170, 12];

// const isLargeNumber = (element) => element > 15;

// console.log(array1.findIndex(isLargeNumber));

// forEach() == calls a function for each element
// fruits.forEach(element => console.log(element));

// includes() == checks if an array contains a specified element
// console.log(fruits.includes("sab"))

// sort() == sorts the elements alphabetically in strings and in ascending order
// fruits.sort();
// console.log(fruits);

// slice() ==	selects the part of an array and returns the new array
// var fruits = ["Mango", "Orange", "Apple", "Kiwi"];
// console.log(fruits.slice(3));

// splice() == removes or replaces existing elements and/or adds new elemen
// fruits.splice(0, 0, 'dio');
// console.log(fruits);

//  some function
// var ages = [10, 12, 18, 15];
// document.write(ages + "<br><br>")

// var b = ages.some(checkAdult);
// document.write(b + "<br><br>")


// function checkAdult(age) {
//     return age >= 18;

// }

// Find() Function

// var ages = [10, 12, 18, 15];
// document.write(ages + "<br><br>")

// var b = ages.find(checkAdult);
// document.write(b + "<br><br>")

// function checkAdult(age) {
//     return age >= 18;
// }

//   -> OBJECT <-

// var a = {
//     fname: 'Mannan',
//     lname: 'Joa',
//     age: 12,
//     email: 'hello@gmail.com',
//     favMovies: ['Dhoom', 'Robot', 'Hum'],
//     living: {
//         'city': 'Chandigarh',
//         'country': 'India'
//     },
//     salary: function() {
//         return 3500000;
//     },
//     fullname: function() {
//         return this.fname + " " + this.lname;
//     }

// }
// console.log(a); 
// document.write(a.favMovies[1])
// document.write(a.salary())
// document.write(a.fullname())
// document.write(a.living.city)


//   -> OBJECT PART 2 <-
// var person = new Object();

// person.firstName = 'Ram';
// person.lastName = 'Kumar';
// person.age = 25;

// console.log(person);
// document.write(person['firstName'])

// ARRAY OF OBJECTS <-

// var student = [
//     { Name: "Ram", Age: 15 },
//     { Name: "Joy", Age: 16 },
//     { Name: "Kiro", Age: 14 },
// ];
// console.log(student);

// for (var a = 0; a < student.length; a++) {
//     document.write(student[a].Name + " " + student[a].Age + "<br>")

// }

// CONST VARIABLE WITH ARRAY AND OBJECT

// const a = [10, 20, 30];

// a = 30; // In This we cannot declare again ( because it is const ) 
// a[1] = 80;
// console.log(a);

// In the below we do not declare again and again the variable in const
// const a = {
//     name: "Ram",
//     age: 24
// };

// a.name = "Raj Kapoor";
// a.age = "35";
// console.log(a);

// TYPES OF LOOPS
// 1. FOR LOOP

// var obj = {
//     fname: "Raj",
//     lname: "Kapoor",
//     age: 21,
//     email: "abc@gmail.com"
// };
// for (var key in obj) {
//     document.write(key + ":" + obj[key] + "<br>");
// }

// Array -- Map () function
// var ary = [11, 4, 9, 16];

// var b = ary.map(test);
// document.write(b);

// function test(x) {
//     return x * 10;
// }

// Another Ex
// var ary = [
//     { fname: "Raj", "lname": "Kumar" },
//     { fname: "ytrt", "lname": "lohu" },
//     { fname: "opiy", "lname": "tyagi" }

// ];
// var b = ary.map(test);
// document.write(b);

// function test(x) {
//     return x.fname + " " + x.lname;
// }

// String Methods
// 1. Length
// var str = "JavaScript is a Great Language";
// var a = str.length;

// document.write(a);


// 2. tolower Case
// var str = "JavaScript is a Great Language";
// var a = str.toLowerCase();

// document.write(a);


// 3. toUppercase
// var str = "JavaScript is a Great Language";
// var a = str.toUpperCase();

// document.write(a);


// 4. includes 
// var str = "JavaScript is a Great Language";
// var a = str.includes("y");

// document.write(a);

// 5. starswith 
// var str = "JavaScript is a Great Language";
// var a = str.startsWith("J");

// document.write(a);

// 6. Endswith 
// var str = "JavaScript is a Great Language";
// var a = str.endsWith("J");

// document.write(a);

// 6. Endswith 
// var str = "JavaScript is a Great Language";
// var a = str.search("J"); //When they got no matching they return -1

// document.write(a);

// 7.match

// var str = "JavaScript is a Great Language";
// var a = str.match(/is/g);

// document.write(a);

// 8.lastindexof()

// var str = "JavaScript is a Great Language";
// var a = str.lastIndexOf("is");

// document.write(a);

// 9. replace()

// var str = "JavaScript is a Great Language";
// var a = str.replace("is", "is id ");

// document.write(a);

// 10. trim()

// var str = "JavaScript is a Great Language";
// var str = "      JavaScript     ";
// var a = str.trim();
// alert(a)
// document.write(a);

// 11. charAt()
// var str = "JavaScript is a Great Language";
// var a = str.charAt(3);

// document.write(a);

// 12. CharCodeAt()
// var str = "JavaScript is a Great Language";
// var a = str.charCodeAt(1); // this is for ASCII code

// document.write(a);

// 13. fromCharCode()
// var str = "JavaScript is a Great Language";
// var a = String.fromCharCode(68); //This is running on ASCII Table 

// document.write(a);

// 14. Concat()
// var str = "JavaScript is a Great Language";
// var str2 = "hello";

// var a = str.concat(str2);

// document.write(a);

// 15. split()
// var str = "JavaScript is a Great Language";
// var a = str.split(" ");

// document.write(a);

// 16. repeat()
// var str = "JavaScript is a Great Language";
// var a = str.repeat(5);

// document.write(a);

// 17. slice()
// var str = "JavaScript is a Great Language";
// var a = str.slice(3);//3 se start 

// document.write(a);

// 18. substr()
var str = "JavaScript is a Great Language";
var a = str.substr("is", "is id ");

document.write(a);

// 19. substring()

// var str = "JavaScript is a Great Language";
// var a = str.replace("is", "is id ");

// document.write(a);

// 20. toString()

// var str = "JavaScript is a Great Language";
// var a = str.replace("is", "is id ");

// document.write(a);

// 21. valueof()

// var str = "JavaScript is a Great Language";
// var a = str.replace("is", "is id ");

// document.write(a);