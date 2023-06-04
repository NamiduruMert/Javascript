// function that allows to print the word sent to it as much as the number of repetitions
console.log("1st exercise------------------");
function textCounter(word, count) {
  for (let i = 0; i < count; i++) {
    console.log(word);
  }
}
textCounter("Mert", 5);

// Write a function that calculates the area and perimeter of a rectangle.
console.log("2nd exercise------------------");
function areaRectangle(firstCorner, secondCorner) {
  const Area = firstCorner * secondCorner;
  const Perimeter = firstCorner * 2 + secondCorner * 2;

  console.log(`Rectangle Area : ${Area}   Rectangle Perimeter : ${Perimeter}`);
}

areaRectangle(8, 9);

// Make the coin toss application using a function

console.log("3rd exercise------------------");

function CoinToss(number) {
  for (let f = 0; f < number; f++) {
    if (Math.random() * 100 > 50) {
      console.log("Tura ");
    } else {
      console.log("Yazı");
    }
  }
}

CoinToss(3);

// Write a function that returns the divisors of a number sent to it as an array.

console.log("4th exercise------------------");

function Divisors(BaseNumber) {
  let ourArray = [];
  for (let i = 0; i <= BaseNumber; i++) {
    if (BaseNumber % i === 0) {
      ourArray.push(i);
    }
  }
  return ourArray;
}

console.log(Divisors(15));
// define a function called sum that takes a variable number of parameters
console.log("5th exercise------------------");

function addition() {
  let lastResult = 0;

  for (let i = 0; i < arguments.length; i++) {
    lastResult = lastResult + arguments[i];
  }
  return lastResult;
}

console.log(addition(15, 8, 4));
console.log(addition(15, 8, 4, 20, -8));
