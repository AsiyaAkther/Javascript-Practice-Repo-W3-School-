//The indexOf() Method
let indexOfText = "Please locate where 'locate' occurs!"
document.getElementById("indexof_demo").innerHTML = indexOfText.indexOf("occurs");

//The lastIndexOf() Method
let lastIndexOfText = "Please locate where 'locate' occurs!";
document.getElementById("last_indexof_demo").innerHTML = lastIndexOfText.lastIndexOf("locate");

//Text not found
let indexOfNotFoundText = "Please locate where 'locate' occurs!";
let lastIndexOfNotFoundText = "Please locate where 'locate' occurs!";

document.getElementById("indexof_not_found").innerHTML = indexOfNotFoundText.indexOf("John");
document.getElementById("last_indexof_not_found").innerHTML = lastIndexOfNotFoundText.lastIndexOf("Doe");

//Accept second parameter
let indexOfSecParameter = "Please locate where 'locate' occurs!";
let lastIndexOfSecParameter = "Please locate where 'locate' occurs!";

document.getElementById("indexof_sec_parameter").innerHTML = indexOfSecParameter.indexOf("locate", 18);
document.getElementById("last_indexof_sec_parameter").innerHTML = lastIndexOfSecParameter.lastIndexOf("locate", 18);