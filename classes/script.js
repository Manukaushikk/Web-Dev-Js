class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    isAdult() {
        return this.age >= 18
    }
}

let p1 = new Person('John Deo', 22)
let p2 = new Person('Jone Deo', 15)


console.log(typeof Person) //function; there is No new datatype called 'class'
console.log(p1.__proto__ == Person.prototype) //True
console.log(p1.__proto__.__proto__ == Object.prototype) //True

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age)
        this.grade = grade
    }
}

let s1 = new Student('Hnady Joy', 14)
let s2 = new Student('Jasmine Roy', 16, 5)

console.log(s1.__proto__ == Student.prototype)
console.log(s1.__proto__.__proto__ == Person.prototype)
console.log(s1.__proto__.__proto__.__proto__ == Object.prototype)

// Inheritance Chain
// Object.prototype -> Person.prototype -> Student.prototype
// no inheritance between the classes (actually they are function)
// Object - x - > Person - x - > Student