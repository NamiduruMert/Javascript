//You can use that JS item.Just add the script src on the basePage.html's script 


let result;
result = document.getElementById("firstHeader");
result = document.getElementById("firstHeader").id;
result = document.getElementById("firstHeader").innerText;
result = document.getElementById("firstHeader").className;

document.getElementById("firstHeader").style.fontFamily = "arial";
document.getElementById("firstHeader").style.fontSize = "30px";
document.getElementById("firstHeader").style.color = "red";
document.getElementById("firstHeader").style.backgroundColor = "Cyan";
document.getElementById("firstHeader").style.textAlign = "center";
document.getElementById("firstHeader").style.display = "block"; // If you want to disappear that tag you can use none

const text = "My Javascript text";

document.getElementById("firstHeader").innerText = "Our First Header";
document.getElementById("firstHeader").innerHTML =
  "<p>We can use p tag in here...</p>";
document.getElementById("firstHeader").innerText = text;
document.getElementById("firstHeader").innerHTML =
  "<h1>" + text + "</h1>" + "<p>" + "Second P Tag in here" + "</p>";

result = document.querySelector("#secondHeader").tagName;
result = document.querySelector(".baseListElement");
result = document.querySelector("div");

result = document.querySelector("li");
result = document.querySelector("li:first-child");
result = document.querySelector("li:last-child");
result = document.querySelector("li:nth-child(2)");
result = document.querySelector("li:nth-child(4)");

console.log(result);
