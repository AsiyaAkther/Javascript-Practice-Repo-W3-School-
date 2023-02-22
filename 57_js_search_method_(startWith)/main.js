// The startWith() Method
let startWithText = "Hello world, welcome to the universe.";
document.getElementById("starwith_demo").innerHTML = startWithText.startsWith("Hello");
document.getElementById("starwith_demo_two").innerHTML = startWithText.startsWith("welcome");

//A start position for the search can be specified
document.getElementById("specified_start_position_demo").innerHTML = startWithText.startsWith("world",5);
document.getElementById("specified_start_position_two").innerHTML = startWithText.startsWith("welcome",13);