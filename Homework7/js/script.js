// Задание 1

let str = 'js';
console.log(str.toUpperCase());

// Задание 2

function searchStart(arr, str) {
    return arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

// Задание 3

console.log(Math.floor(32.58884));
console.log(Math.ceil(32.58884));
console.log(Math.round(32.58884));

// Задание 4

const numbers = [52, 53, 49, 77, 21, 32];

const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log(`Минимальное значение - ${min}`);
console.log(`Максимальное значение - ${max}`);

// Задание 5

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
}

getRandomNumber();

// Задание 6

function getRandomArrNumbers(num) {
    const randomArray = [];
    for (let i = 0; i < Math.floor(num / 2); i++) {
        randomArray.push(Math.floor(Math.random() * (num + 1)));
    }
    return randomArray;
}

console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

// Задание 7

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 5));

// Задание 8

const options1 = { day: 'numeric', month: 'long', year: 'numeric' };

const formattedDate = new Date().toLocaleString('ru-RU', options1);

console.log(`Текущая дата: ${formattedDate}`);

// Задание 9

let currentDate = new Date();
let nextDate73 = new Date(currentDate);
nextDate73.setDate(currentDate.getDate() + 73);

const options2 = { day: 'numeric', month: 'long', year: 'numeric' };

console.log('Дата через 73 дня:', nextDate73.toLocaleDateString('ru-RU', options2));

// Задание 10

function formatDate(date) {
    const weekdays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = weekdays[date.getDay()];

    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);

    return `Дата: ${day} ${month} ${year} - это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

const date = new Date();
console.log(formatDate(date));