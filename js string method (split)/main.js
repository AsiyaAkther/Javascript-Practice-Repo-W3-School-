//return single character
let splitoneText = "a,b,c,d,e,f";
const splitOneArray = splitoneText.split(",");
document.getElementById("split_one_demo").innerHTML = splitOneArray[2];

//return multiple character
let splitmultipleText = "Hello";
const splitmultipleArray = splitmultipleText.split("");
splitmultipleText = "";
for(let i = 0; i < splitmultipleArray.length; i++){
    splitmultipleText += splitmultipleArray[i] + "<br>";
}
document.getElementById("split_multiple_demo").innerHTML = splitmultipleText;