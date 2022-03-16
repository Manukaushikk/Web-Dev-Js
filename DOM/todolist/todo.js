window.onload = function() {
    let newtask = document.getElementById('newtask')
    let addtask = document.getElementById('addtask')
    let todolist = document.getElementById('todolist')


    addtask.onclick = function() {
        let li = document.createElement('li')



        //Add the X button 
        let xBtn = document.createElement('button')
        xBtn.innerText = '×'
        xBtn.onclick = function(event) {
            event.target.parentElement.remove()
        }

        let upBtn = document.createElement('button')
        xBtn.innerText = '↑'
        upBtn.onclick = function(event) {
            // event.target = the up button
            // event.target.parentElement = the <li> item..

            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement,
                event.target.parentElement.previousElementSibling
            )
        }

        //Add the task text 
        let taskSpan = document.createElement('span')
        taskSpan.innerText = newtask.value

        li.appendChild(upBtn)
        li.appendChild(xBtn)
        li.appendChild(taskSpan)
        todolist.appendChild(li)



    }





}