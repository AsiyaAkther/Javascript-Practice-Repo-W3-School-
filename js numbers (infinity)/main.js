// Js numbers (infinity)
let myNumber = 25;
let infiniteText = "";
while(myNumber != Infinity){
    myNumber = myNumber * myNumber;
    infiniteText = infiniteText + myNumber + "<br>";
}
document.getElementById("infinity_demo").innerHTML = infiniteText;

// Infinity (Division by zero)
let firstDivNum = 2 / 0;
let secDivNum = - 2 / 0;
document.getElementById("div_by_zero_demo").innerHTML = firstDivNum + "<br>" + secDivNum;