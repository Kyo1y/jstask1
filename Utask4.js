let p = document.getElementsByTagName("p");
function hr() {
    for(let i = 0; i <p.length; i++) {
        let hr = document.createElement("hr");
        p[i].after(hr)
    }
}
hr();