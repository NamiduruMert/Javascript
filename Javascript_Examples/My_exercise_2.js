const fruits = ["Apple", "Banana", "Orange", "Strawberry", "Pear"];

console.log("Fruit has " + fruits.length + " item");

const lastchild = fruits.length - 1;

console.log(
  "Fruit first item: " + fruits[0] + " Fruit second item: " + fruits[lastchild]
);

if (fruits.includes("Apple")) {
  console.log("Apple is element of fruits");
} else {
  console.log("Apple is not valid in fruits");
}

const value4 = fruits;
const newfruitClass = value4.push("Cherry");

console.log(value4);

const value5 = fruits;
const deleteitematlast = value5.splice(value5.length - 3, 2);

console.log(value5);

const student1 = [
  {
    name: "Yiğit",
    surname: "Bilgi",
    birthdate: 2010,
    notes: [
      {
        firstNote: 70,
        secondNote: 60,
        thirdnote: 80,
      },
    ],
  },
  {
    name: "Ada",
    surname: "Bilgi",
    birthdate: 2012,
    notes: [
      {
        firstNote: 80,
        secondNote: 80,
        thirdnote: 90,
      },
    ],
  },
  {
    name: "Ahmet",
    surname: "Turan",
    birthdate: 2009,
    notes: [
      {
        firstNote: 60,
        secondNote: 60,
        thirdnote: 70,
      },
    ],
  },
];


console.log((2023 - student1[0].birthdate) , (2023 -student1[1].birthdate) , (2023 -student1[2].birthdate))

console.log((student1[0].notes[0].firstNote + student1[0].notes[0].secondNote + student1[0].notes[0].thirdnote) / 3)

console.log((student1[1].notes[0].firstNote + student1[1].notes[0].secondNote + student1[1].notes[0].thirdnote) / 3)

console.log((student1[2].notes[0].firstNote + student1[2].notes[0].secondNote + student1[2].notes[0].thirdnote) / 3)
