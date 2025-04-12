// Цей скрипт додає просте сповіщення при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function() {
    alert('Вітаю на моєму сайті!');
});

// Цей скрипт додає обробник подій для кнопки "Дізнатися більше"
const learnMoreButton = document.querySelector('#hero .button');

if (learnMoreButton) {
    learnMoreButton.addEventListener('click', function(event) {
        event.preventDefault(); // Запобігає стандартній дії посилання (переходу за URL)
        alert('Ви натиснули кнопку "Дізнатися більше"!');
        // Тут можна додати більш складну логіку, наприклад, плавний скролінг до іншого розділу
    });
}

// Цей скрипт додає ефект підсвічування при наведенні на елементи з класом "feature-item"
const featureItems = document.querySelectorAll('.feature-item');

featureItems.forEach(function(item) {
    item.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#f0f0f0'; // Змінюємо колір фону при наведенні
        this.style.transition = 'background-color 0.3s ease'; // Додаємо плавний перехід
    });

    item.addEventListener('mouseout', function() {
        this.style.backgroundColor = ''; // Повертаємо початковий колір фону при відведенні курсора
    });
});