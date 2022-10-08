let list = document.getElementsByClassName("item");
var cf = document.createElement("div");
cf.classList.add("item");
cf.innerHTML = `Canned Fish <span class="qty">x 4</span>`;
function a() {
    for (const elem of list) {
        if(elem.textContent.includes("Cola")) {
            elem.remove()
        }
    }
    for (let chocolate of list) {
        if(chocolate.textContent.includes("Chocolate")) {
            let parentDiv = chocolate.parentNode;
            parentDiv.replaceChild(cf, chocolate)
        }
    }
}
a();