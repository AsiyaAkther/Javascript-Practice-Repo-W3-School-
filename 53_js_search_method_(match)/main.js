//The match() Method
let matchText = "The rain in SPAIN stays mainly in the plain";
const matchArray = matchText.match("ain");
document.getElementById("match_demo").innerHTML = matchArray.length + " " + matchArray;

//match() method with regular expression
let matchRxText = "The rain in SPAIN stays mainly in the plain";
const matchRxArray = matchRxText.match(/ain/);
document.getElementById("match_rx_demo").innerHTML = matchRxArray.length + " " + matchRxArray;

//match() Method global search
let matchGlobalText = "The rain in SPAIN stays mainly in the plain";
const matchGlobalArray = matchGlobalText.match(/ain/g);
document.getElementById("match_global_demo").innerHTML = matchGlobalArray.length + " " + matchGlobalArray;

//match() method global, case-insensitive search
let matchgiText = "The rain in SPAIN stays mainly in the plain";
const matchgiArray = matchgiText.match(/ain/gi);
document.getElementById("match_gi_demo").innerHTML = matchgiArray.length + " " + matchgiArray;