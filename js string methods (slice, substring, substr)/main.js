//The slice() Method
let text = "Apple, Banana, Kiwi";
let text2 = text.slice(7,13); //Slice out a portion of a string from position 7 to position 13
let text3 = text.slice(7); //If you omit the second parameter, the method will slice out the rest of the string
let text4 = text.slice(-12); //If a parameter is negative, the position is counted from the end of the string
document.getElementById("slice_demo_one").innerHTML = text2;
document.getElementById("slice_demo_two").innerHTML = text3;
document.getElementById("slice_demo_three").innerHTML = text4;

//The substring() Method
let sub_text = "Apple, Banana, Kiwi";
document.getElementById("sub_demo").innerHTML = sub_text.substring(7,13);

//The substr() Method
let str_text = "Apple, Banana, Kiwi";
document.getElementById("str_demo").innerHTML = str_text.substr(7,6);