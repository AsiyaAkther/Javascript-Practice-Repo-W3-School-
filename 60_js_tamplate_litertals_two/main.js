// tamplate literals with variables

let firstNmae = "Jhon";
let lastName = "Doe";
let varText = `Welcome ${firstNmae}, ${lastName}.`;
document.getElementById("literals_with_variable").innerHTML = varText;

// tamplate literals with expressions

let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
document.getElementById("literals_with_expression").innerHTML = total;