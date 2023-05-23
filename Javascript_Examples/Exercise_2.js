//Checking if a number is between 0 and 40!!!

const Number1 = -12;
const Number2 = 38;
const Number3 = 66;
const Number4 = -37;
const Number5 = 3;

console.log("1st exercise");

if (40 >= Number1 && Number1 >= 0) {
  console.log(`Number 1 is between 0 and 40`);
} else if (40 <= Number1) {
  console.log(`Number 1 is greater than 40`);
} else {
  console.log(`Number 1 is less than 0.`);
}
if (40 >= Number2 && Number2 >= 0) {
  console.log(`Number 2 is between 0 and 40`);
} else if (40 <= Number2) {
  console.log(`Number 2 is greater than 40`);
} else {
  console.log(`Number 2 is less than 0.`);
}
if (40 >= Number3 && Number3 >= 0) {
  console.log(`Number 3 is between 0 and 40`);
} else if (40 <= Number3) {
  console.log(`Number 3 is greater than 40`);
} else {
  console.log(`Number 3 is less than 0.`);
}
if (40 >= Number4 && Number4 >= 0) {
  console.log(`Number 4 is between 0 and 40`);
} else if (40 <= Number4) {
  console.log(`Number 4 is greater than 40`);
} else {
  console.log(`Number 4 is less than 0.`);
}
if (40 >= Number5 && Number5 >= 0) {
  console.log(`Number 5 is between 0 and 40`);
} else if (40 <= Number5) {
  console.log(`Number 5 is greater than 40`);
} else {
  console.log(`Number 5 is less than 0.`);
}

//Checking if a number is a positive odd number!!!

console.log("2nd exercise");

if (Number1 >= 0 && Number1 % 2 === 1) {
  console.log("Number1 = Positive=+ Odd=+");
} else if (Number1 >= 0) {
  console.log("Number1 = Positive=+ Odd=-");
} else if (Number1 % 2 !== 0) {
  console.log("Number1 = Positive=- Odd=+");
} else {
  console.log("Number1 = Positive=- Odd=-");
}
if (Number2 >= 0 && Number2 % 2 === 1) {
  console.log("Number2 = Positive=+ Odd=+");
} else if (Number2 >= 0) {
  console.log("Number2 = Positive=+ Odd=-");
} else if (Number2 % 2 !== 0) {
  console.log("Number2 = Positive=- Odd=+");
} else {
  console.log("Number2 = Positive=- Odd=-");
}
if (Number3 >= 0 && Number3 % 2 === 1) {
  console.log("Number3 = Positive=+ Odd=+");
} else if (Number3 >= 0) {
  console.log("Number3 = Positive=+ Odd=-");
} else if (Number3 % 2 !== 0) {
  console.log("Number3 = Positive=- Odd=+");
} else {
  console.log("Number3 = Positive=- Odd=-");
}
if (Number4 >= 0 && Number4 % 2 === 1) {
  console.log("Number4 = Positive=+ Odd=+");
} else if (Number4 >= 0) {
  console.log("Number4 = Positive=+ Odd=-");
} else if (Number4 % 2 !== 0) {
  console.log("Number4 = Positive=- Odd=+");
} else {
  console.log("Number4 = Positive=- Odd=-");
}
if (Number5 >= 0 && Number5 % 2 === 1) {
  console.log("Number5 = Positive=+ Odd=+");
} else if (Number5 >= 0) {
  console.log("Number4 = Positive=+ Odd=-");
} else if (Number5 % 2 !== 0) {
  console.log("Number5 = Positive=- Odd=+");
} else {
  console.log("Number5 = Positive=- Odd=-");
}

console.log("3rd exercise");

//Comparison of the magnitudes of x,y,z numbers!!!

const Xnumber = 20;
const Ynumber = 15;
const Znumber = 10;

function NumberSort(x, y, z) {
  const dizi = [x, y, z];
  dizi.sort(function (a, b) {
    return a - b;
  });
  return dizi;
}

const SortIndex = NumberSort(Xnumber, Ynumber, Znumber);
console.log("Sorted array: " + SortIndex);
console.log("Smallest number: " + SortIndex[0]);
console.log("Median number: " + SortIndex[1]);
console.log("Largest number: " + SortIndex[2]);

//For averages calculated based on 2 midterm 1 final grades;
//1.)If the average is over 50, the course can be passed.
//2.)To pass, the final grade must be at least 50, even if the average is 50.
//3.)If 70 is taken from the final, even if the average is below 50, the course can be passed

console.log("3rd Example");

const Student_1_Name = "Emma";
const Student_1_Surname = "Thomson";
const Student_1_Note_1 = 20;
const Student_1_Note_2 = 50;
const Student_1_Note_3 = 60;

const averageS1 = Math.round(
  (Student_1_Note_1 + Student_1_Note_2 + Student_1_Note_3) / 3
);

const Student_2_Name = "Oliver";
const Student_2_Surname = "Wilson";
const Student_2_Note_1 = 48;
const Student_2_Note_2 = 48;
const Student_2_Note_3 = 68;

const averageS2 = Math.round(
  (Student_2_Note_1 + Student_2_Note_2 + Student_2_Note_3) / 3
);

const Student_3_Name = "Ava";
const Student_3_Surname = "Edwards";
const Student_3_Note_1 = 20;
const Student_3_Note_2 = 20;
const Student_3_Note_3 = 72;

const averageS3 = Math.round(
  (Student_3_Note_1 + Student_3_Note_2 + Student_3_Note_3) / 3
);

console.log(
  `${Student_1_Name} ${Student_1_Surname} Grade Average = ${averageS1}`
);
console.log(
  `${Student_2_Name} ${Student_2_Surname} Grade Average = ${averageS2}`
);
console.log(
  `${Student_3_Name} ${Student_3_Surname} Grade Average = ${averageS3}`
);

//1.)If the average is over 50, the course can be passed.

console.log("If the average is over 50, the course can be passed.");

if (averageS1 >= 50) {
  console.log(`${Student_1_Name} ${Student_1_Surname} passed the class.+++++`);
} else {
  console.log(`${Student_1_Name} ${Student_1_Surname} failed the class.-----`);
}
if (averageS2 >= 50) {
  console.log(`${Student_2_Name} ${Student_2_Surname} passed the class.+++++`);
} else {
  console.log(`${Student_2_Name} ${Student_2_Surname} failed the class.-----`);
}
if (averageS3 >= 50) {
  console.log(`${Student_3_Name} ${Student_3_Surname} passed the class.+++++`);
} else {
  console.log(`${Student_3_Name} ${Student_3_Surname} failed the class.-----`);
}

//2.)To pass, the final grade must be at least 50, even if the average is 50.

console.log(
  "To pass, the final grade must be at least 50, even if the average is 50."
);

if (averageS1 >= 50) {
  if (Student_1_Note_3 >= 50) {
    console.log(
      `${Student_1_Name} ${Student_1_Surname} passed the class.Average = +++ Final Note = +++`
    );
  } else {
    console.log(
      `${Student_1_Name} ${Student_1_Surname} failed the class.Average = +++ Final Note = ---`
    );
  }
} else {
  console.log(
    `${Student_1_Name} ${Student_1_Surname} failed the class.Average = ---`
  );
}
if (averageS2 >= 50) {
  if (Student_2_Note_3 >= 50) {
    console.log(
      `${Student_2_Name} ${Student_2_Surname} passed the class.Average = +++ Final Note = +++`
    );
  } else {
    console.log(
      `${Student_2_Name} ${Student_2_Surname} failed the class.Average = +++ Final Note = ---`
    );
  }
} else {
  console.log(
    `${Student_2_Name} ${Student_2_Surname} failed the class.Average = ---`
  );
}
if (averageS3 >= 50) {
  if (Student_3_Note_3 >= 50) {
    console.log(
      `${Student_3_Name} ${Student_3_Surname} passed the class.Average = +++ Final Note = +++`
    );
  } else {
    console.log(
      `${Student_3_Name} ${Student_3_Surname} failed the class.Average = +++ Final Note = ---`
    );
  }
} else {
  console.log(
    `${Student_3_Name} ${Student_3_Surname} failed the class.Average = ---`
  );
}

//3.)If 70 is taken from the final, even if the average is below 50, the course can be passed
console.log(
  "If 70 is taken from the final, even if the average is below 50, the course can be passed"
);

if (Student_1_Note_3 >= 70) {
  console.log(
    `${Student_1_Name} ${Student_1_Surname} passed the class.Final Note >= 70`
  );
} else {
  console.log(
    `${Student_1_Name} ${Student_1_Surname} failed the class.Final Note <= 70`
  );
}
if (Student_2_Note_3 >= 70) {
  console.log(
    `${Student_2_Name} ${Student_2_Surname} passed the class.Final Note >= 70`
  );
} else {
  console.log(
    `${Student_2_Name} ${Student_2_Surname} failed the class.Final Note <= 70`
  );
}
if (Student_3_Note_3 >= 70) {
  console.log(
    `${Student_3_Name} ${Student_3_Surname} passed the class.Final Note >= 70`
  );
} else {
  console.log(
    `${Student_3_Name} ${Student_3_Surname} failed the class.Final Note <= 70`
  );
}
