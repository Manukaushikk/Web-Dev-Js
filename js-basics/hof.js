// Higher Order Function =>  hof.js

function greet(name) {
    console.log('Hello', name)

}

function createGreeter(greeting) {


    function greet(name) {
        console.log(greeting, name)

    }

    return greet
        // return greet()  this greet() means we call the value the value . In the above greet function we denote below by g1
}

function getName() {
    return document.getElementById('namebox').value

}

let g1 = createGreeter('Good Morning')
let g2 = createGreeter('Good Morning')

console.log(typeof g1)

console.log(greet('Raju'))
console.log(greet('Purvi'))


console.log(g1('Raju'))
console.log(g1('Purvi'))


console.log(g2('shargun'))
console.log(g2('udit'))