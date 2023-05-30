const url = "https://github.com/NamiduruMert/namidurumert";

const title = "Learn javascript with ME";

// How many characters does the url have?

console.log(`Url has ${url.length} characters`);

// How many words does the title consist of?

const words = title.split(" ");

const wordsCount = words.length;

console.log(`Title has ${wordsCount} words`);

// Does the url start with http?

if (url.startsWith("https")) {
  console.log("Url start with https ");
} else {
  console.log("Url doesn't start with https");
}

// Is there a javascript word in the title ?

const searchingWord = "javascript";

const finder = title.includes("javascript");

if (finder !== -1) {
  console.log("Title has javascript word");
} else {
  console.log("Title has not javascript word");
}


// Create the following expression using the url and title variables https://github.com/NamiduruMert/namidurumert-learn-javascript-with-me


const lastvalue1 = title.split(" ");

const lastvalue2 = `${url}-${lastvalue1[0]}-${lastvalue1[1]}-${lastvalue1[2]}-${lastvalue1[3]}`

console.log (lastvalue2)