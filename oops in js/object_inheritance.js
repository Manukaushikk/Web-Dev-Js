let a = { p: 10, q: 'akjsi', r: false }

let b = Object.create(a)
let c = Object.create(b)

console.log(a)
console.log(b)
console.log(b.q)
console.log(c.q)
b.q = 'dsddffvfv'
console.log(b)
console.log(c.q)