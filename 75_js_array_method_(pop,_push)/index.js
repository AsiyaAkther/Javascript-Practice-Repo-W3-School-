// Using pop() Method

const friends = ["Santosh","Rumana","Manna","Mila","Akik"];
document.getElementById("before_pop_demo").innerHTML = friends;
document.getElementById("popped_out_value").innerHTML = "Popped out value is = " + friends.pop()
document.getElementById("after_pop_demo").innerHTML = friends;

// Using push() Method

const vegetables = ["Cucumber","Cabbage","Carrot","Potato"];
document.getElementById("before_push").innerHTML = vegetables;
document.getElementById("length_demo").innerHTML = vegetables.push("Tomato");
document.getElementById("after_push").innerHTML = vegetables;