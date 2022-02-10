let str = "Asdsad"
let num = 233
let bool = true
let arr = [246, 436, 6, 346]
let obj = { a: 10, b: 'asdasd' }
let fun = function() {
    console.log('yay!')
}

//if x and y are not primitive
// x == y : true <- what does this mean?
// this means they are the same object in memory

console.log('typeof String', typeof String)
console.log('typeof Boolean', typeof Boolean)
console.log('typeof Number', typeof Number)
console.log('typeof Array', typeof Array)
console.log('typeof Object', typeof Object)
console.log('typeof Function', typeof Function)

console.log(str.__proto__.__proto__ == obj.__proto__)
console.log(num.__proto__.__proto__ == obj.__proto__)
console.log(bool.__proto__.__proto__ == obj.__proto__)
console.log(arr.__proto__.__proto__ == obj.__proto__)
console.log(fun.__proto__.__proto__ == obj.__proto__)

// Everything indirectly inherits from the same thing
// that obj is inherited form
// if i.e. in javascript, everything is essential an object

console.log('========== prototypes ==========')
console.log(obj.__proto__ == Object.prototype)
console.log(str.__proto__ == String.prototype)
console.log(num.__proto__ == Number.prototype)
console.log(bool.__proto__ == Boolean.prototype)
console.log(arr.__proto__ == Array.prototype)
console.log(fun.__proto__ == Function.prototype)

// String.prototype inherits for Object.prototype

// typeof Object.create(Boolean.prototype) => "Object"

// prototype means => an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible.