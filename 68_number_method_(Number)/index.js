// Using Number() method

let x = "34";
document.getElementById("demo").innerHTML =
Number(x) + "<br>" +
Number(true) + "<br>" +
Number(false) + "<br>" +
Number("100") + "<br>" +
Number("      45    ") + "<br>" +
Number("Jhon") + "<br>" +
Number("10, 33");

// Using Number() method on a date

let date = new Date("2017-09-30");
document.getElementById("date_to_num").innerHTML = Number(date);