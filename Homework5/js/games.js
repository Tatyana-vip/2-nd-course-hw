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