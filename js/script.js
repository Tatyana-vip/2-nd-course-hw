// Задание 1

let a = 10;
alert(a);
a = 20;
alert(a);

// Задание 2

let release = 2007;
alert(`Год выпуска первого iPhone ${release}`);

// Задание 3

let creator = 'Брендан Айк';
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

//Задание 5

let result = c**5;
alert(result);

// Задание 6

a = 9;
b = 2;
c = a / b;
alert(c);

// Задание 7

let num = 1;
num = ++num;
num = ++num;
num = ++num;
num = ++num;
num = ++num;
num = ++num;
alert(num);

// Задание 8

let age = prompt('Сколько Вам лет?');
alert (age);

// Задание 9.0

const user = {
name: 'Василий',
age: 25,
isAdmin: false
};

// Задание 9.1

user['city of residence'] = 'Москва';

// Задание 9.2

user.age = 27;

// Задание 9.3

delete user['city of residence'];

// Задание 9.4

let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);

// Задание 10

let userName = prompt('Как Вас зовут?');
alert(`Привет, ${userName}!`);