// Looping in array

const persons = ["Raju","Juha","Miti","Fahim","Mikdad"];
let text = "<ul>";
for(let i = 0; i < persons.length; i++){
    text += "<li>" + persons[i] +"</li>";
}
text += "</ul>";
document.getElementById("loop_in_array").innerHTML = text;

// Looping with forEach function in array

let list = "<ul>";
persons.forEach(myFunction);
list += "</ul>";
document.getElementById("forEach_demo").innerHTML = list;

function myFunction(value){
    list += "<li>" + value + "</li>"
}