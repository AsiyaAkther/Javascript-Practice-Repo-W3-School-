function replaceMethodOne(){
    let text_one = document.getElementById("demo_one").innerHTML;
    document.getElementById("demo_one").innerHTML = text_one.replace("Microsoft", "W3 School");
}

function replaceMethodTwo(){
    let text_two = document.getElementById("demo_two").innerHTML;
    document.getElementById("demo_two").innerHTML = text_two.replace(/MICROSOFT/i, "W3 School");
}

function replaceMethodThree(){
    let text_two = document.getElementById("demo_three").innerHTML;
    document.getElementById("demo_three").innerHTML = text_two.replace(/Microsoft/g, "W3 School");
}