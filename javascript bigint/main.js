// How to create bigint
let fNumber = 123456789012345678901234567890;
let secBigintNumber = 123456789012345678901234567890n;
let thirdBigintNumber = BigInt("123456789012345678901234567890");
document.getElementById("bigint_demo").innerHTML = "Without using bigint: 123456789012345678901234567890 = " + fNumber + "<br>" + "Using bigint (append n to the end): 123456789012345678901234567890n = " + secBigintNumber + "<br>" + "Using BigInt(): BigInt(123456789012345678901234567890) = " + thirdBigintNumber;

// BigInt with arithmetic operator
let firstOperand = 9007199254740995n;
let secOperand = 9007199254740995n;
document.getElementById("bigint_with_operator").innerHTML = "9007199254740995n * 9007199254740995n = " + firstOperand * secOperand;

// Maximum safe integer
let maxSafeInt = Number.MAX_SAFE_INTEGER;
document.getElementById("max_safe_int_demo").innerHTML = maxSafeInt + "<br>";

// Minimum safe integer
let minSafeInt = Number.MIN_SAFE_INTEGER;
document.getElementById("min_safe_int_demo").innerHTML = minSafeInt;