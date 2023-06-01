// program to check if the number is even or odd
// take input from the user
const number = prompt("Enter a number: ");

// ternary operator
const result = (number % 2  == 0) ? "even" : "odd";

// display the result
console.log(`The number is ${result}.`);


// program to check if the number is even or odd
// take input from the user
const number1 = prompt("Enter a number: ");

//check if the number is even
if(number1 % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}