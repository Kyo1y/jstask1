let sentence = prompt("Insert any sentence");
function uppercase(sentence) {
    for(let i =0; i < 1; i++) {
        if(sentence[i] == sentence[i].toUpperCase()){
            alert("First character is uppercase")
        } else {
            alert("First character is not uppercase")
        }
    }
}
uppercase(sentence);