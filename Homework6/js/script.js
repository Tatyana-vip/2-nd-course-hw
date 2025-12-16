// Задание 1

const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
  console.log(numbs[i]);
  if (numbs[i] === 10) {
    break;
  }
}

// Задание 2

const arr = [1, 5, 4, 10, 0, 3];

console.log(arr.indexOf(4));

// Задание 3

const elements = [1, 3, 5, 10, 20];

console.log(elements.join(' '));

// Задание 4

const createArr = [];

for (let i = 0; i < 3; i++) {
  const createArr2 = [];

  for (let i = 0; i < 3; i++) {
    createArr2.push(1);
  }
  createArr.push(createArr2);
}

console.log(createArr);

// Задание 5

const addValues = [1, 1, 1];

addValues.push(2, 2, 2);
console.log(addValues);

// Задание 6

const sortingArray = [9, 8, 7, 'a', 6, 5];

sortingArray.sort().pop();
console.log(sortingArray);

// Задание 7

const num = [9, 8, 7, 6, 5];

let userAnswer = Number(prompt('Угадай число от 1 до 10'));

if (num.includes(userAnswer)) {
  alert("Угадал");
} else {
  alert("Не угадал");
}

// Задание 8

let line = 'abcdef';

console.log(line.split('').reverse().join(''));

// Задание 9

const nestedArray = [[1, 2, 3,], [4, 5, 6]];

console.log(nestedArray.flat());

// Задание 10

const sumArrayElements = [1, 2, 3, 4, 5];

for (let i = 0; i < sumArrayElements.length - 1; i++) {
  console.log(sumArrayElements[i] + sumArrayElements[i + 1]);
}

// Задание 11

const arrayOfIntegers = [1, 2, 3, 4, 5];
arraySquare = arrayOfIntegers.map(function (a) { return a ** 2; });

console.log(arraySquare);

// Задание 12

function getLengthWords(arr) {
  return arr.map((el) => el.length);
}

console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));

// Задание 13

function filterPositive(array) {
  return array.filter(value => value < 0);
}

console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));

// Задание 14

function randomNum() {
  return Math.floor(Math.random() * 10);
}

const generateArray = [];

for (let i = 0; i < 10; i++) {
  generateArray.push(randomNum());

}

console.log(generateArray);

const generateArrayEven = [];

for (let i = 0; i < generateArray.length; i++) {
  if (generateArray[i] % 2 === 0) {
    generateArrayEven.push(generateArray[i]);
  }

}

console.log(generateArrayEven);

// Задание 15

function generateArrayElements() {
  return Math.floor(Math.random() * 10);
}

const generateArr = [];

for (let i = 0; i < 6; i++) {
  generateArr.push(generateArrayElements());
}

console.log(generateArr);
console.log(generateArr.reduce((a, b) => a + b) / generateArr.length);