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