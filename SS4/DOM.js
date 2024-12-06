const sample = document.querySelector(".sample");
const sample2 = document.getElementById("sample2");
document.getElementsByClassName("div");
console.log(sample);
sample.innerHTML = "<h1> Hello SAMPLE </h1>";

let h2 = document.createElement("h2");
h2.innerHTML = "Create Element";
h2.style.color = "red";

sample.appendChild(h2);
