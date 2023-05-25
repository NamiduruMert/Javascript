const shortCorner = 5;
const longCorner = 12;

const area = shortCorner * longCorner;

console.log(area);

// JavaScript program to find the area of a triangle

const side1 = parseInt(12);
const side2 = parseInt(10);
const side3 = parseInt(9);

// calculate the semi-perimeter
const s = (side1 + side2 + side3) / 2;

//calculate the area
const areaValue = parseInt(
  Math.sqrt(s * (s - side1) * (s - side2) * (s - side3))
);

console.log(`The area of the triangle is ${areaValue}`);
