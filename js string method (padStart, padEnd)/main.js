//The padStart() Method
let padStartText = "5";
padStarttextTwo = padStartText.padStart(4,"0");
let numbStart = 5;
let numbStartText = numbStart.toString();

document.getElementById("pad_start_demo").innerHTML = padStartText.padStart(4,"x");
document.getElementById("pad_start_demo_two").innerHTML = padStarttextTwo;
document.getElementById("pad_start_demo_three").innerHTML = numbStartText.padStart(4,0);

//The padEnd() Method
let padEndText = "5";
padEndtextTwo = padEndText.padEnd(4,"0");
let numbEnd = 5;
let numbEndText = numbEnd.toString();
        
document.getElementById("pad_end_demo").innerHTML = padEndText.padEnd(4,"x");
document.getElementById("pad_end_demo_two").innerHTML = padEndtextTwo;
document.getElementById("pad_end_demo_three").innerHTML = numbEndText.padEnd(4,0);