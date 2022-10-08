var dateContainer = document.getElementById("date-container");

function monthName() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var givenDate = new Date(date.value);
    var mm = String(givenDate.getMonth());
    var h2 = document.createElement("h2");
    var month = monthNames[mm]
    h2.innerText = "Date's month is " + month;
    document.getElementById("date-container").appendChild(h2)
    console.log()
};