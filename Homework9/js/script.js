// Задание 1. Скрытие и показ текста
// Задание 3. Динамическое изменение текста

const heading = document.querySelector('h1');
const toggleHeadingButton = document.querySelector('#btn-toggle-heading');
const originalText = heading.textContent;
const changeTextButton = document.querySelector('#btn-change-text');

toggleHeadingButton.addEventListener('click', () => {
    if (heading.classList.contains('hidden')) {
        heading.classList.remove('hidden');
        toggleHeadingButton.textContent = 'Скрыть';
    } else {
        heading.classList.add('hidden');
        toggleHeadingButton.textContent = 'Показать';
    }
});

changeTextButton.addEventListener('click', () => {
    if (heading.textContent === 'Привет, мир!') {
        heading.textContent = originalText;
    } else {
        heading.textContent = 'Привет, мир!';
    }
});

// Задание 2. Изменение стиля элемента

const coloredText = document.querySelector('.color-text');
const changeColorButton = document.querySelector('#btn-change-color');

changeColorButton.addEventListener('click', () => {
    if (coloredText.style.color === 'blue') {
        coloredText.style.color = 'initial';
    } else {
        coloredText.style.color = 'blue';
    }
});

// Задание 4. Поиск и изменение элементов по классу

const descriptionElements = document.querySelectorAll('.description');

descriptionElements.forEach(element => {
    element.textContent = 'Измененный текст';
});

// Задание 5. Работа с querySelectorAll

const descriptionParagraphs = document.querySelectorAll('p.description');

descriptionParagraphs.forEach(paragraph => {
    paragraph.textContent = 'Новый текст';
    paragraph.style.fontWeight = '600';
});

// Задание 6. Добавление нового элемента в DOM

const addButton = document.querySelector('#btn-add-paragraph');

addButton.addEventListener('click', () => {
    const newParagraph = document.createElement('p');

    newParagraph.textContent = 'Новый абзац';

    document.body.appendChild(newParagraph);
});

// Задание 7. Удаление элемента

const removeButton = document.querySelector('#btn-remove-description');

removeButton.addEventListener('click', () => {
    const descriptionParagraph = document.querySelector('p.description');

    descriptionParagraph.remove();
});