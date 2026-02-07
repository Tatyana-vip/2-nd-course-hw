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

// Переверни текст

function reverseText() {

    const input = prompt('Введите текст');
    const reversed = input.split('').reverse().join('');

    alert(`Перевёрнутый текст:\n${reversed}`);
}

// Камень, ножницы, бумага

function playRockPaperScissors() {

    const options = ["камень", "ножницы", "бумага"];
    let userChoice = prompt("Выберите: камень, ножницы или бумага").toLowerCase();
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    let result;
    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Вы проиграли!";
    }

    alert(
        `Ваш выбор: ${userChoice}\n` +
        `Выбор компьютера: ${computerChoice}\n` +
        result
    );
}

// Простая викторина

function runQuiz() {
    const quiz = [
        {
            question: "Какой цвет у неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let score = 0;

    for (let i = 0; i < quiz.length; i++) {
        const question = quiz[i];

        let questionText = question.question + "\n";
        for (let j = 0; j < question.options.length; j++) {
            questionText += question.options[j] + "\n";
        }

        const userAnswer = prompt("Введите номер правильного ответа:\n\n" + questionText);

        if (parseInt(userAnswer) === question.correctAnswer) {
            score++;
            alert(`Вы ответили верно!`);
        } else {
            alert(`Вы ответили неверно!`)
        }
    }

    alert(`Викторина завершена!\nПравильных ответов: ${score} из ${quiz.length}`);
}