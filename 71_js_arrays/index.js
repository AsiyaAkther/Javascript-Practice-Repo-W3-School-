const cars = ["Volvo","BMW","Saab"];
const accessCar = cars[1]; // accesing a array element
document.getElementById("arr_demo").innerHTML =
"The car names: " + cars + "<br>" +
"The car[1] value is : " +  accessCar;

cars[2] = "Opel"; // change a array element
document.getElementById("arr_chng_demo").innerHTML =
"Change a value in cars[2] index: " + cars + "<br>" +
"The typeof array is: " + typeof(cars);

// Declare an array using new keyword

const fdNames = new Array("Rumana","Tanmoy","Santosh","Mahi");
document.getElementById("new_arr_demo").innerHTML =
"My friends names are: " + fdNames + "<br>" +
"The array length is: " +fdNames.length;