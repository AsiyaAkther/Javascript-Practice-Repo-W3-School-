// Using shift() Mathod

const students = ["Jiniya","Asma","Reshma","Alo","Shirin"];
document.getElementById("before_shift").innerHTML = students;
document.getElementById("shifted_element").innerHTML = "The shifted element is = " + students.shift();
document.getElementById("after_shift").innerHTML = students;

// Using unshift() Mathod

const friends = ["Rumana","Tanha","mampi","Mila","Nasima"];
document.getElementById("before_unshift").innerHTML = friends;
document.getElementById("length_demo").innerHTML = "The shifted element is = " + friends.unshift("Tahmi");
document.getElementById("after_unshift").innerHTML = friends;