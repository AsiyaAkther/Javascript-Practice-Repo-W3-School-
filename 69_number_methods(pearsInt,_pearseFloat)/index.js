// Using parseInt() method

let x = "20";
document.getElementById("int_demo").innerHTML =
parseInt(x) + "<br>" +
parseInt("100") + "<br>" +
parseInt("45.67") + "<br>" +
parseInt("23 45 67") + "<br>" +
parseInt("-89") + "<br>" +
parseInt("yearse");

// Using parseFloat() method

let y = "45.67";
document.getElementById("float_demo").innerHTML =
parseFloat(y) + "<br>" +
parseFloat("100") + "<br>" +
parseFloat("76.6") + "<br>" +
parseFloat("23 45 67") + "<br>" +
parseFloat("-89") + "<br>" +
parseFloat("yearse");