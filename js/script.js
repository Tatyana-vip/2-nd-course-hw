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

const arr = [52, 53, 49, 77, 21, 32];

const min = Math.min(...arr);
const max = Math.max(...arr);

console.log(min, max);

// Задание 5

function getRandomNumber(minValue, maxValue) {
  let randomNumber = Math.floor(Math.random() * maxValue) + minValue;
  console.log(randomNumber);
  }
  
getRandomNumber(1, 10);

// Задание 6

function getRandomArrNumbers(num) {
  const arr = [];
  for (let i = 0; i < Math.floor(num / 2); i++) {
  arr.push(Math.floor(Math.random() * num));
  }
  return arr;
  }

console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

// Задание 7

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }

console.log(getRandomNumber(1, 5));

// Задание 8

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate = new Date();
let fullDate = "Текущая дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear();

console.log(fullDate);

// Задание 9

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate.toLocaleDateString());

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