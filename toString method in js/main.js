let number = 48;
document.getElementById("tostring_demo").innerHTML = "Decimal " + number + " = "+ "<br><br>" +
"Hexatrigesimal (base 36): " + number.toString(36) + "<br>" +
"Duotrigesimal (base 32): " + number.toString(32) + "<br>" +
"Hexadecimal (base 16): " + number.toString(16) + "<br>" +
"Duodecimal (base 12): " + number.toString(12) + "<br>" +
"Octal (base 8): " + number.toString(8) + "<br>" +
"Binary (base 2): " + number.toString(2);