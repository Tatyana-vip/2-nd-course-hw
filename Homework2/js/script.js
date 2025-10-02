// Задание 1

let a = 10;
alert(a);
a = 20;
alert(a);

// Задание 2

const release = 2007;
alert(`Год выпуска первого iPhone ${release}`);

// Задание 3

const creator = 'Брендан Айк';
alert(`Создатель языка JavaScript ${creator}`);

// Задание 4

let b = 10;
let c = 2;
let d = b + c;
alert(d);
d = b - c;
alert(d);
d = b * c;
alert(d);
d = b / c;
alert(d);

// Задание 5

let result = c ** 5;
alert(result);

// Задание 6

a = 9;
b = 2;
c = a % b;
alert(c);

// Задание 7

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// Задание 8

let age = prompt('Сколько Вам лет?');
alert(age);

// Задание 9

const user = {
    name: 'Василий',
    age: 25,
    isAdmin: false
};

// Задание 10

let userName = prompt('Как Вас зовут?');
alert(`Привет, ${userName}!`);

// Дополнительное задание

let number = Number(prompt('Загадайте любое число'));
let doubledNumber = number * 2;
alert(`Удваиваем загаданное число, получаем ${doubledNumber}`);
let addTen = doubledNumber + 10;
alert(`К удвоенному числу прибавляем 10, получаем ${addTen}`);
let dividedByTwo = addTen / 2;
alert(`Полученное число делим на 2, получаем ${dividedByTwo}`);
let finalResult = dividedByTwo - number;
alert(`Из результата вычитаем первоначальное загаданное число, получаем ${finalResult}`);
alert(`Ответ равен ${finalResult}`);