function newElement() {
    let div = document.getElementById("container");
    let ul = document.createElement("ul");
    div.appendChild(ul);
    while(true) {
        const newTask = prompt("Add new task");
        if(newTask.length == 0 || typeof newTask == null) {
            break;
        }
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(newTask));
        ul.appendChild(li);
    }
}