function color() {
    for(let i = 0; i < 3; i++) {
        document.getElementsByClassName("element")[i].style.color = "red"
    }
    for(let i = 3; i < 6; i++ ) {
        document.getElementsByClassName("element")[i].style.color = "green"
    }
}
color();