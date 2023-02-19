const person = {
    firstName: "Asiya",
    lastName: "Akther",
    id: 3344,
    fullname: function(){
        return this.firstName + " " + this.lastName;
    }
};
document.getElementById("demo").innerHTML = person.fullname();