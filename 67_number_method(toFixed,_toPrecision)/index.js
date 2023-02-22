// Using toFixed() method

let fix_x = 9.656;
document.getElementById("to_fix_demo").innerHTML =
fix_x.toFixed(0) + "<br>" +
fix_x.toFixed(2) + "<br>" +
fix_x.toFixed(6);

// Using toPrecision() method

let preci_x = 9.656;
document.getElementById("to_preci_demo").innerHTML =
preci_x.toPrecision() + "<br>" +
preci_x.toPrecision(2) + "<br>" +
preci_x.toPrecision(6);