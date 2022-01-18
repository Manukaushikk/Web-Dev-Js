console.log(beta()) //Is it work ? lets check it is working because call on below and call on this and no type error and no run time error 

function alpha() {
    return "A"
}

console.log(beta())
    // console.log(gamma()) // Reference Error

function beta() { // Function defined like this are hosted
    return "B"
}

let gamma = function() { //  Function defined like this are  not hosted because they are act like a variable
    return "C"
}


console.log(beta())
    // console.log(gamma())

function area(height, width) {
    if (!width) {
        // if (typeof width == 'undefined') {
        return Math.PI * height * height
    }

    // console.log('height = ', height, 'width = ', width)
    return height * width

}

console.log(' area 3,4 ', area(3, 4))
console.log(' area 4 ', area(4))


function hello() {
    let arguments = 'asas'
    console.log(' hello world', +arguments[0] + arguments[1])
}

hello(1, 2)
hello('Arnav', 'khosla')