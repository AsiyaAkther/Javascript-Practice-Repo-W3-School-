//The search() Method
let searchText = "Please locate where 'locate' occurs!";
document.getElementById("search_demo").innerHTML = searchText.search("where");

//Search for regular expression
let searchRxText = "Please locate where 'locate' occurs!";
document.getElementById("search_rx_demo").innerHTML = searchRxText.search(/occurs/);