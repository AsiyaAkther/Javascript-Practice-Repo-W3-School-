// Js decimal numbers
let withDecimalNumber = 4.56;
let withoutDecimalNumber = 6;
document.getElementById("decimal_numbers_demo").innerHTML = withDecimalNumber + "<br>" + withoutDecimalNumber;

// Js numbers with exponent notation
let exponentNumberOne = 123e5;
let exponentNumberTwo = 123e-5;
document.getElementById("exponent_notation_demo").innerHTML = exponentNumberOne + "<br>" + exponentNumberTwo;

// Js integer precision
let intPrecisionOne = 999999999999999;
let intPrecisionTwo = 9999999999999999;
document.getElementById("int_precision_demo").innerHTML = intPrecisionOne + "<br>" + intPrecisionTwo;

//Js floating point precision
let floatPrecision = 0.2 + 0.1;
document.getElementById("floating_point_precision").innerHTML = "0.2 + 0.1 = " + floatPrecision;

// To solve this problem 
let floatPrecisionOPrb = (0.2 * 10 + 0.1 * 10)/10;
document.getElementById("float_precision_prb").innerHTML = "0.2 + 0.1 = " + floatPrecisionOPrb;