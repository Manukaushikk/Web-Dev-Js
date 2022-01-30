// Answer in context of C++ / Java
// What does the keyword "this" menu, what does it refer to?
// In which places in code can we NOT use "this" ?

function chectThis() {
    console.log(this)

}

let obj = {
    a: 10,
    b: "sdss",
    c: true,
    d: function() {
        console.log(this)
    },
    e: {
        l: 234,
        m: 'ssdsasacfv'
    }
}