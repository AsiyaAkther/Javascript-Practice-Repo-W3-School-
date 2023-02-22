// Js  numbers NaN
document.getElementById("nan_demo").innerHTML = 100 / "Apple";

// Js numbers NaN (with numeric string)
document.getElementById("numeric_string_demo").innerHTML = 100 / "10";

// Js numbers NaN (with isNaN function)
let isNanText = 100 / "Apple";
document.getElementById("nan_function_demo").innerHTML = isNaN(isNanText);

// Js numbers NaN (using NaN in mathmetical operation)
let nanText = NaN;
let number = 5;
document.getElementById("nan_mathmetical_operation").innerHTML = nanText + number;

// Js numbers NaN (using typeof function)
let nanTextTwo = NaN;
document.getElementById("typeof_nan_demo").innerHTML = typeof(nanTextTwo);