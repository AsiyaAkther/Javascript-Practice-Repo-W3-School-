//Exponentiation Assignment Operator
let expo_val = 10;
expo_val **= 5;
document.getElementById("expo_demo").innerHTML = expo_val;

//Left Shift Assignment Operator
let lsa_val = -100;
lsa_val <<= 5;
document.getElementById("lsa_demo").innerHTML = "Value of x is: " + lsa_val;

//Right Shift Assignment Operator
let rsa_val = -100;
rsa_val >>= 5;
document.getElementById("rsa_demo").innerHTML = rsa_val;

//Unsigned Right Shift Assignment Operator
let unsigned_val =-100;
unsigned_val >>>= 5;
document.getElementById("unsigned_demo").innerHTML = unsigned_val;

//Bitwise AND Assignment Operator
let bit_and_val = 100;
bit_and_val &= 5;
document.getElementById("bit_and_demo").innerHTML = bit_and_val;

//Bitwise OR Assignment Operator
let bit_or_val = 100;
bit_or_val |= 5;
document.getElementById("bit_or_demo").innerHTML = bit_or_val;

//Bitwise XOR Assignment Operator
let bit_xor_val = 100;
bit_xor_val ^= 5;
document.getElementById("bit_xor_demo").innerHTML = bit_xor_val;

//Logical AND assignment operator
let logical_and_val = 100;
logical_and_val &&= 5;
document.getElementById("logical_and_demo").innerHTML = logical_and_val;

//Logical OR assignment operator
let logical_or_val = undefined;
logical_or_val ||= 5;
document.getElementById("logical_or_demo").innerHTML = logical_or_val;

//Nullish coalescing assignment operator
let nca_val = 100;
nca_val ??= 5;
document.getElementById("nca_demo").innerHTML = nca_val;