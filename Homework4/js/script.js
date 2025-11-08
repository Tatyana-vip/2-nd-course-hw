// Задание 1

let a = 0;

while (a < 2) {
    console.log('Привет');
    a++;
}

// Задание 2

let b = 1;

while (b <= 5) {
    console.log(b);
    b++;
}

// Задание 3

let c = 7;

while (c <= 22) {
    console.log(c);
    c++;
}

// Задание 4

const obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400
}

for (let key in obj) {
    alert(key + " — зарплата " + obj[key] + " долларов.");
}

// Задание 5

for (var n = 1000, num = 0; n >= 50; num++, n /= 2);

alert("Итоговое число: " + n);
alert("Количество итераций: " + num);

// Задание 6

for (let dayNumber = 7; dayNumber <= 31; dayNumber += 7) {
    console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
}

// Дополнительные задания

// Задание 1

for (var k = 100, iterations = 0; k >= 0; iterations++, k -= 7);

alert("Результат: " + k);
alert("Количество итераций: " + iterations);

// Задание 2

const months = [
  "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

for (let i = 0; i < months.length; i++) {
  const monthName = months[i];
  const monthNumber = i + 1;
  console.log(`${monthNumber} - ${monthName}`);
}

// Задание 3

const book = {
  "название": "Остров сокровищ",
  "автор": "Роберт Стивенсон",
  "год издания": 1883,
  "жанр": "приключенческий роман"
};

for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}

// Задание 4

const numbers = [12, 25, 9, 17, 5, 6, 8, 3, 7, 4];

let minNumber = numbers[0];

for (let d = 1; d < numbers.length; d++) {
  if (numbers[d] < minNumber) {
    minNumber = numbers[d];
  }
}

console.log("Минимальное число в массиве:", minNumber);