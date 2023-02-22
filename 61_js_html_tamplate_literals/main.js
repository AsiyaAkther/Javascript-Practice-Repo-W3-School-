// How to create html tamplate with tamplate literals

let header = "This is a tamplate literals demo";
let paragraph = "We can make html tamplate from js code by using tamplate literals";
let tags = ["Tamplate Literals", "Javascript", "ES6"];
let html = `<h1>${header}</h1><ul>`;
html += `<p>${paragraph}</p>`;
for(const x of tags){
    html += `<li>${x}</li>`;
} 
html += `</ul>`;
document.getElementById("html_tamplate_demo").innerHTML = html;