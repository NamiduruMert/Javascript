const number = [1, 5, 17, 3, 25, 8, 20];

// 1.)  Print the square of each element in the list of numbers
console.log("1st exercise--------------------------------------------------");
for (let i = 0; i < number.length; i++) {
  console.log(`${number[i]} squared is ${Math.pow(number[i], 2)}`);
}

// 2.)  Which numbers in the list of numbers are a multiple of 5
console.log("2nd exercise--------------------------------------------------");
for (let i = 0; i < number.length; i++) {
  if (number[i] % 5 === 0) {
    console.log(`The number ${number[i]} is divisible by 5..(+++)`);
  } else {
    console.log(`The number ${number[i]} is not divisible by 5.(---).`);
  }
}
console.log("3rd exercise--------------------------------------------------");
// 3.)Find the sum of the even numbers in the list of numbers

let result = 0;

for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 === 0) {
    result += number[i];
  }
}
console.log(result);
console.log("4th exercise--------------------------------------------------");
// 4.)Print all the products in the list of products in capital letters.

const products = [
  "Iphone 12",
  "Samsung s22",
  "Iphone 13",
  "Samsung S23",
  "samsung s25",
];

let upperProducts = [];

for (let i = 0; i < products.length; i++) {
  console.log(products[i].toUpperCase());
  upperProducts += products[i].toUpperCase() + " ";
}
console.log(upperProducts);
console.log("5th exercise--------------------------------------------------");
// 5.)How many elements in the list of products include samsung?
for (let i = 0; i < products.length; i++) {
  if (products[i].toUpperCase().includes("SAMSUNG")) {
    console.log(`${products[i]} product includes Samsung word (+++) `);
  } else {
    console.log(`${products[i]} product doesn't include Samsung word (---)`);
  }
}

console.log("6th exercise--------------------------------------------------");

// 6.)Find the  grade point average and achievement status of each member in the students list

const students = [
  { name: "Mert", surname: "NAMIDURU", notes: [60, 70, 80] },
  { name: "Mehmet", surname: "NAMIDURU", notes: [50, 90, 40] },
  { name: "Semih", surname: "KARAKAYA", notes: [20, 85, 35] },
  { name: "Dalp", surname: "Zdmr", notes: [20, 13, 44] },
];
let totalNotes = 0;
for (let i = 0; i < students.length; i++) {
  for (let f = 0; f < students[0].notes.length; f++) {
    totalNotes += students[i].notes[f];
  }

  if (totalNotes / 3 >= 50) {
    console.log(
      `${students[i].name} ${
        students[i].surname
      }'s grade point average ===${Math.round(
        totalNotes / 3
      )} === Passed the exam!!!`
    );
  } else {
    console.log(
      `${students[i].name} ${
        students[i].surname
      }'s grade point average ===${Math.round(
        totalNotes / 3
      )} === Failed the exam!!!`
    );
  }

  totalNotes = 0;
}

console.log("7th exercise--------------------------------------------------");

//7.) Calculate the grade point averages of all students
let totalAllNotes = 0;
for (let i = 0; i < students.length; i = i + 1) {
  for (let f = 0; f < students[i].notes.length; f += 1) {
    totalAllNotes += students[i].notes[f];
  }
}
console.log(
  Math.round(totalAllNotes / (students[0].notes.length * students.length))
);
