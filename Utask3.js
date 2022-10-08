let ol = document.getElementById("todo-list");
const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
function add() {
    for(let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");
        li.className = "task";
        li.innerHTML = tasks[i];
        ol.appendChild(li)
    }
}
add();