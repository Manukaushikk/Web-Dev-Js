// IIFE -> Immediately Invoked Function Expression

// (function sayHello() {
//     console.log("Hello");
// })();

// (function(l, p, r, s) {

//     console.log("3^4 = " + Math.pow(3, 4));
//     console.log("4^3 = " + Math.pow(4, 3));
//     console.log("root(2) = " + Math.sqrt(2));
//     console.log("sin(10) = " + Math.sin(10));
// })(console.log, Math.pow, Math.sqrt, Math.sin);


// for (var i = 0; i < 10; i++) {

//     setTimeout(function() {
//         console.log(i);
//     }, 100)
// }

for (var i = 0; i < 10; i++) {
    setTimeout(console.log, 100, i)

}