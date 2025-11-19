// Угадай число
function guessTheNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    while (true) {
        let guessNumber = prompt("Угадай число от 1 до 100");
        guessNumber = Number(guessNumber);
        if (guessNumber === randomNumber) {
            alert("Молодец, угадал! Это число " + randomNumber + ".");
            break;
        } else if (guessNumber > randomNumber) {
            alert("Загаданное число меньше, еще попытка.");
        } else {
            alert("Загаданное число больше, еще попытка.");
        }
    }
}

// Простая арифметика
function generateTask() {
    let num1 = Math.floor(Math.random() * 20) + 1;
    let num2;
    do {
        num2 = Math.floor(Math.random() * 20) + 1;
    } while (num1 % num2 !== 0);

    const operators = ['+', '-', '*', '/'];
    let operator = operators[Math.floor(Math.random() * operators.length)];

    let userAnswer;
    let correctAnswer;

    switch (operator) {
        case '+':
            userAnswer = prompt(`Сколько будет ${num1} + ${num2}?`);
            correctAnswer = num1 + num2;
            break;
        case '-':
            userAnswer = prompt(`Сколько будет из ${num1} вычесть ${num2}?`);
            correctAnswer = num1 - num2;
            break;
        case '*':
            userAnswer = prompt(`Сколько будет ${num1} умножить на ${num2}?`);
            correctAnswer = num1 * num2;
            break;
        case '/':
            userAnswer = prompt(`Сколько будет ${num1} разделить на ${num2}?`);
            correctAnswer = num1 / num2;
            break;
    }

    if (Number(userAnswer) === correctAnswer) {
        alert("Ответ верный!");
    } else {
        alert(`Неверно. Правильный ответ: ${correctAnswer}.`);
    }
}