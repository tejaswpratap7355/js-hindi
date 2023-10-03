const name = "Tejasw";
const repoCoun = 40

// console.log(name + repoCoun + "VAlue");

console.log(`Hello my name is ${name} and my repo count is ${repoCoun}`);

const gameName = new String("Tejasw-sh-com")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  tejasw  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://tej.com/tej%20singh"
console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));