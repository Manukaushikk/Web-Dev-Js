function Person(name, age) {
    this.name = name
    this.age = age
        // this.isAdult = function() { return this.age >= 18 }

}
Person.prototype.isAdult = function() { return this.age >= 18 }
Person.prototype.city = "DELHI"

let p = new Person('Harry Potter', 15)
let p2 = new Person('Jeeni Deol', 30)

console.log(p.isAdult())
console.log(p2.isAdult())


console.log(p.isAdult == p2.isAdult)