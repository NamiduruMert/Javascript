// generating  a random number
const a = Math.random();
console.log(a);

// generating a random number
const a1 = Math.random() * (10 - 1) + 1;
console.log(`Random value between 1 and 10 is ${a1}`);

// generating a random number
const a2 = Math.floor(Math.random() * (10 - 1)) + 1;
console.log(`Random value between 1 and 10 is ${a2}`);

// input from the user
const min = parseInt(10);
const max = parseInt(100);

// generating a random number
const a3 = Math.floor(Math.random() * (max - min + 1)) + min;

// display a random number
console.log(`Random value between ${min} and ${max} is ${a3}`);
