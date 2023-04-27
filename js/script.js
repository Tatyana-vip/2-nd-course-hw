// Задание 1

function min(a, b) {
    return a < b ? a : b;
}

console.log(min(8, 4));

// Задание 2

function evenOrOdd(n) {
  return n % 2 == 0 ? `Число четное` : `Число нечетное`;
}

console.log(evenOrOdd(3));

// Задание 3

// 3.1.

function outputSquareNumber(num) {
	console.log(num ** 2);
}

outputSquareNumber(3);

// 3.2.

function returnSquareNumber(num) {
    return num ** 2;
}

console.log(returnSquareNumber(5));

// Задание 4

function printMessage() {
    let age = Number(prompt("Сколько Вам лет?"));

    if (age < 0) {
        alert("Вы ввели неправильное значение");
    } else if (age >= 0 && age <= 12) {
        alert("Привет, друг!");
    } else {
        alert("Добро пожаловать!");
    }
}

printMessage();

// Задание 5

let mult = function(a, b) {

    if (isNaN(a) || isNaN(b)) {
        console.log("Одно или оба значения не являются числом");
    } else {
        return a * b;
    }   
}

console.log(mult(3, 'br'));

// Задание 6

function inputSomeValue() {
    let n = prompt("Введите число");

    if (isNaN(n)) {
        alert("Переданный параметр не является числом");
    } else {
        let m = n ** 3;
        alert(n + " в кубе равняется " + m);
    }
}  

inputSomeValue();

// Задание 7

function getAreaCircle() {
    return Math.PI * this.radius ** 2;
  }

function getPerimeterCircle() {
    return 2 * Math.PI * this.radius;
  }

  const circle1 = {
    radius: 3,
  
    getArea: getAreaCircle,
    getPerimeter: getPerimeterCircle,
  };
  
  const circle2 = {
    radius: 5,
  
    getArea: getAreaCircle,
    getPerimeter: getPerimeterCircle,
  };

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());