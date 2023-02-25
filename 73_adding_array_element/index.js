// using push method

const students = ["Rima","Tabassum","Sorna","Surovi"];
document.getElementById("push_demo").innerHTML = students;

function myFunction(){
    students.push("Rabeya");
    document.getElementById("push_demo").innerHTML = students;
}

// usoing Length property for adding array elements

const friends = ["Rumana","Tahmi","Mila","Nasima"];
document.getElementById("length_prop_demo").innerHTML = friends;

function addFunction(){
    friends[friends.length] = "Fouzia";
    document.getElementById("length_prop_demo").innerHTML = friends;
}

// isArray method

document.getElementById("is_arr_demo").innerHTML = Array.isArray(friends);

// instanceof operator

document.getElementById("ins_demo").innerHTML = students instanceof Array;