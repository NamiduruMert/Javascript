//JavaScript program to swap two variables

//take input from the users
let a = 10;
let b = 4;

//create a temporary variable
let temp;

//swap variables
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

console.log("Example-2");

//JavaScript program to swap two variables

//take input from the users
let a1 = 22;
let b2 = 18;

// XOR operator
a1 = a1 ^ b2;
b2 = a1 ^ b2;
a1 = a1 ^ b2;

console.log(`The value of a1 after swapping: ${a1}`);
console.log(`The value of b2 after swapping: ${b2}`);
