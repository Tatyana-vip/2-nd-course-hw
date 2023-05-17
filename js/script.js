// Задание 1

const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
	console.log(numbs[i]);
	if (numbs[i] == 10) break;
}

// Задание 2

const arr = [1, 5, 4, 10, 0, 3];

console.log(arr.indexOf(4));

// Задание 3

const elements = [1, 3, 5, 10, 20];

let str = elements.join(' ');

console.log(str);

// Задание 4

const createArr = [];

for (let i = 0; i < 3; i++) {
	createArr[i] = [];
	
	for (let j = 0; j < 1; j++) {
		createArr[i].push(j + 1);
	}
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

let userAnswer = Number(prompt('Введите число от 1 до 10'));

console.log(num.includes(userAnswer));

// Задание 8

let line = 'abcdef';

console.log(line.split('').reverse().join(''));

// Задание 9

const nestedArray = [[1, 2, 3,],[4, 5, 6]];

let getNestedArrays = nestedArray.flat();

console.log(getNestedArrays);

// Задание 10

const sumArrayElements = [1, 2, 3, 4, 5];

for (let i = 0; i < sumArrayElements.length - 1; i++) {
	console.log(sumArrayElements[i] + sumArrayElements[i + 1]);
}

// Задание 11

const arrayOfIntegers = [1, 2, 3, 4, 5];
arraySquare = arrayOfIntegers.map(function(a){return a**2;});

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

const generateArray = (length, max) => (
	[...new Array(length)]
	  .map(() => Math.round(Math.random() * max))
  );
  
const numbers = generateArray(10, 10);

let evens = numbers.filter(function(element) {
	return element %2 == 0 && element > 0;
	});

console.log(numbers);  
console.log(evens);

// Задание 15

const generateArr = (length, max) => (
	[...new Array(length)]
	  .map(() => Math.round(Math.random() * max) + 1)
  );
  
const result = generateArr(6, 10);

const arithmeticMeanOfElements = result.reduce((a, b) => a + b) / result.length;

console.log(result);
console.log(arithmeticMeanOfElements);