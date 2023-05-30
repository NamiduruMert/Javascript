// program that checks if the number is positive, negative or zero
// input from the user
const number = parseInt(prompt("Enter a number: "));

// check if number is greater than 0
if (number > 0) {
  console.log("The number is positive");
}

// check if number is 0
else if (number == 0) {
  console.log("The number is zero");
}

// if number is less than 0
else {
  console.log("The number is negative");
}

// check if the number is positive, negative or zero
const number1 = prompt("Enter a number: ");

if (number1 >= 0) {
  if (number1 == 0) {
    console.log("The number is zero");
  } else {
    console.log("The number is positive");
  }
} else {
  console.log("The number is negative");
}
