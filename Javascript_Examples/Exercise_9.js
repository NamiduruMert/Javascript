// program to display the sum of natural numbers

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

let sum = 0;

// looping from i = 1 to number
// in each iteration, i is increased by 1
for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log('The sum of natural numbers:', sum);


// program to display the sum of natural numbers

// take input from the user
const number1 = parseInt(prompt('Enter a positive integer: '));

let sum1 = 0, i = 1;

// looping from i = 1 to number
while(i <= number1) {
    sum1 += i;
    i++;
}

console.log('The sum of natural numbers:', sum1);