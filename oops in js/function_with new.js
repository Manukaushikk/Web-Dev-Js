function Person(name, age) {
    this.name = name
    this.age = age
    return 10
}

let p = new Person('Harry Potter', 20)
let p2 = new Person('Jeeni Deol', 16)
console.log('p= ' + JSON.stringify(p))
console.log(p2)
    // console.log(age)