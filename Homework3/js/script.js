// Задание 1

let password = 'пароль';
let enterPassword = prompt('Введите пароль');

alert(enterPassword === password ? 'Пароль введен верно' : 'Пароль введен неправильно');

// Задание 2

let c = 7;

console.log(c > 0 && c < 10 ? 'Верно' : 'Неверно');

// Задание 3

let d = 700;
let e = 10;

console.log(d > 100 || e > 100 ? 'Верно' : 'Неверно');

// Задание 4

let a = '2';
let b = '3';

alert(Number(a) + Number(b));

// Задание 5

let monthNumber = 12;

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default:
        console.log('Такого месяца не существует');
}

// Дополнительные задания

// Задание 1

let num = Number(prompt('Пожалуйста, введите любое число'));

if (num % 2 === 0) {
    alert('Число четное');
}
else if (num % 2 === 1) {
    alert('Число нечетное');
}
else {
    alert('Введенное значение не является числом');
}

// Задание 2

let clientOS = 1;

if (clientOS === 0) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1) {
    console.log('Установите версию приложения для Android по ссылке');
}

// Задание 3

let clientDeviceOS = 1;
let clientDeviceYear = 2014;

if (clientDeviceOS === 0 && clientDeviceYear >= 2015) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientDeviceOS === 0 && clientDeviceYear < 2015) {
    console.log('Установите облегченную версию приложения для iOS по ссылке');
} else if (clientDeviceOS === 1 && clientDeviceYear >= 2015) {
    console.log('Установите версию приложения для Android по ссылке');
} else {
    console.log('Установите облегченную версию приложения для Android по ссылке');
}