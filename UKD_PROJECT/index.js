function toggleText() {
    var text = document.querySelector('.extra-text');
    
    // Перевіряємо, чи текст видимий, і перемикаємо його видимість
    if (text.style.display === "none") {
        text.style.display = "block"; // Показуємо текст
    } else {
        text.style.display = "none"; // Ховаємо текст
    }
}

// Отримуємо елемент
const aboutGym = document.querySelector('.about_gym1');

// Створюємо спостерігача для перехоплення блоків, які з'являються у полі зору
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Коли блок з'являється у полі зору, додаємо клас "visible"
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.5 // Встановлюємо поріг, щоб блок був видимий на 50% (можна налаштувати)
});

// Починаємо спостереження
observer.observe(aboutGym);


