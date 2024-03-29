// Задание 1

const people = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));

// Задание 2

function isPositive(number) {
  return number > 0;
}

function isMale(person) {
  return person.gender === 'male';
}

function filter(array, ruleFunction) {
  const result = [];
  array.map(function(element) {
    if (ruleFunction(element)) {
      result.push(element);
    }
  });
  return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const peopleGender = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(peopleGender, isMale));

// Задание 3

let counter = 0;
const intervalId = setInterval(() => {
  console.log(new Date());
  counter += 3;
  if (counter >= 30) {
    clearInterval(intervalId);
    console.log('30 секунд прошло');
  }
}, 3000);

// Задание 4

function delayForSecond(callback) {
	setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
});

// Задание 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { cb(); }

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => {
    sayHi('Глеб');
});