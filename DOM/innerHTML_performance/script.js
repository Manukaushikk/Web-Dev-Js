window.onload = function() {
    let num = document.getElementById('num')
    let list = document.getElementById('list')
    let print = document.getElementById('print')

    print.onclick = function() {
        let start = new Date().getTime()
        let N = parseInt(num.value)
        for (let i = 1; i <= N; i++) {
            let item = document.createElement('li')
            item.innerText = i
            list.appendChild(item)
                // list.innerHTML += '<li>' + i + '</li>'
                // let newstr = list.innerHTML += '<li>' + i + '</li>'

            // list.innerHTML = null
            // list.innerHTML = newstr

        }
        list.innerHTML = listHTML
        console.log(new Date().getTime() - start)

    }
}