console.log(1 == '1') //True

console.log(1 === '1') //False

// peculiar Cases

console.log(0 == '') // true, because Number('') == 0

console.log('false' == false) //false

console.log('' == false) // true, both type is 0

// Every WhiteSpace is equal to 0
// LIKE:

console.log('\n' == 0) //True


console.log('\t' == 0) //True

console.log('' == 0) //True , both typecast to 0

console.log('\n' == '\t') // false both are different 

// this doesn't hold good for abstract equality
// a = b, b = c ... implies that .. a = c