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

for (const key in obj) {
    alert(key + " — зарплата " + obj[key] + " долларов.");
}

// Задание 5

for (let n = 1000, num = 0; n >= 50; num++) {
    n /= 2;
    alert(n);
}

// Задание 6

for (let dayNumber = 7; dayNumber <= 31; dayNumber += 7) { 
          console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`); 
      }