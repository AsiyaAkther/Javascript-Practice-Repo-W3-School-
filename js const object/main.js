const car = {type:"Fiat", model:"500", color:"white"};
        car.color = "red";
        car.owner = "Johnson";
        document.getElementById("demo_one").innerHTML = "Car owner is " + car.owner;
        document.getElementById("demo_two").innerHTML = "Car color is " + car.color;