// The matchAll() Method
let matchAllText = "I love cats. Cats are very easy to love. Cats are very popular.";
const matchAllIterator = matchAllText.matchAll("Cats");
document.getElementById("matchall_demo").innerHTML = Array.from(matchAllIterator);

// matchAll() method with regular expression
let matchAllrxText = "I love cats. Cats are very easy to love. Cats are very popular.";
const matchAllrxIterator = matchAllrxText.matchAll(/love/g);
document.getElementById("matchall_rx_demo").innerHTML = Array.from(matchAllrxIterator);

// matchAll() method with global and case insensitive flag
let matchAllgiText = "I love cats. Cats are very easy to love. Cats are very popular.";
const matchAllgiIterator = matchAllgiText.matchAll(/cats/gi);
document.getElementById("matchall_gi_demo").innerHTML = Array.from(matchAllgiIterator);

