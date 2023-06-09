// IF you are using submit type for backend.You have to add a attribute in your script code.That attribute need to clear default.
const firstButton = document.getElementById("firstButton");
const secondButton = document.getElementById("secondButton");

firstButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("You click the first button (ADD button)");
});
secondButton.addEventListener("click", Mert1);

function Mert1() {
  console.log("function hidden from external place");
}