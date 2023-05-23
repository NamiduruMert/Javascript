// The success of the course with the grade point averages of 2 students.

const Student_1_name = "Sophia";
const Student_1_surname = "Davis";
const Student_1_birthdate = "2002";
const Student_1_maths_note_1 = 70;
const Student_1_maths_note_2 = 70;
const Student_1_maths_note_3 = 80;

const Average_Student_1 =
  (Student_1_maths_note_1 + Student_1_maths_note_2 + Student_1_maths_note_3) /
  3;
console.log(
  "1st student grade point average " + "= " + Math.round(Average_Student_1)
);

//`Grade point average of the 1st student = ${Math.round(Average_Student_1)}`  ==  The same text can be written with the backtick symbol

const Student_2_name = "Ethan";
const Student_2_surname = "Johnson";
const Student_2_birthdate = "2003";
const Student_2_maths_note_1 = 40;
const Student_2_maths_note_2 = 40;
const Student_2_maths_note_3 = 50;

const Average_Student_2 =
  (Student_2_maths_note_1 + Student_2_maths_note_2 + Student_2_maths_note_3) /
  3;
console.log(
  "2nd student grade point average " + "= " + Math.round(Average_Student_2)
);

if (Average_Student_1 >= 50) {
  console.log("Student 1 was successful in this course.");
} else {
  console.log("Student 1 failed in this course.");
}

if (Average_Student_2 >= 50) {
  console.log("Student 2 was successful in this course.");
} else {
  console.log("Student 2 failed in this course.");
}
