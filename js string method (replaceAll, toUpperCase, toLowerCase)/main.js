//The ReplaceAll() method
let replaceAllText = "I love cats. Cats are very easy to love. Cats are very popular."
replaceAllText = replaceAllText.replaceAll("Cats", "Dogs");
replaceAllText = replaceAllText.replaceAll("cats", "dogs");
document.getElementById("replace_all_demo").innerHTML = replaceAllText;


//The toUpperCase() Method
function toUpperCase(){
    let toUpperCaseText = document.getElementById("to_upper_demo").innerHTML;
    document.getElementById("to_upper_demo").innerHTML = toUpperCaseText.toUpperCase();
}


//The toLowerCase() Method
function toLowerCase(){
    let toLowerCaseText = document.getElementById("to_lower_demo").innerHTML;
    document.getElementById("to_lower_demo").innerHTML = toLowerCaseText.toLowerCase();
}