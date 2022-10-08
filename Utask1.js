var arr = [document.getElementById("string-1").innerHTML,
    document.getElementById("string-2").innerHTML,
    document.getElementById("string-3").innerHTML,
    document.getElementById("string-4").innerHTML,
    document.getElementById("string-5").innerHTML,
    document.getElementById("string-6").innerHTML];

function stringOrder() {
    arr.forEach(x => console.log(x));
}
stringOrder();