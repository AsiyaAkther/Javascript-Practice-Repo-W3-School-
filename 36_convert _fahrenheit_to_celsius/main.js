function toCelsius(f){
    return (5 / 9) * (f - 32);
}
document.getElementById("demo").innerHTML = "The tamperature is " + toCelsius(77) + " celsius";