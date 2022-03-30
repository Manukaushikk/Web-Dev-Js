class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
class Student extends Person {
    constructor(name, age, school) {
        super(name, age)
        this.school = school
    }

}
let p = new Person('Harry Potter', 15)
let s = new Student('Ron Craekrl', 18, 'Jpskr')

console.log(p)
console.log(s)