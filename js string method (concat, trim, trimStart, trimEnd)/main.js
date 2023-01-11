//The concat() Method
let concatTextOne = "Hello";
let concatTextTwo = "World!";
let concatStringFinal = concatTextOne.concat(" ", concatTextTwo);
document.getElementById("concat_demo").innerHTML = concatStringFinal;

//The trim() Method
let trimTextOne = "     Hello World!     ";
let trimStringFinal = trimTextOne.trim();
document.getElementById("trim_demo").innerHTML = "Text1 length = " + trimTextOne.length + "<br>Text2 length = " + trimStringFinal.length;

//The trimStart() Method
let trimStartTextOne = "     Hello World!";
let trimStartStringFinal = trimStartTextOne.trimStart();
document.getElementById("trim_start_demo").innerHTML = "Text1 length = " + trimStartTextOne.length + "<br>Text2 length = " + trimStartStringFinal.length;

//The trimEnd() Method
let trimEndTextOne = "Hello World!           ";
let trimEndStringFinal = trimEndTextOne.trimEnd();
document.getElementById("trim_end_demo").innerHTML = "Text1 length = " + trimEndTextOne.length + "<br>Text2 length = " + trimEndStringFinal.length;