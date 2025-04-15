// Отримуємо елементи форми
const form = document.getElementById('registration-form');
const fullNameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Перевірка, чи скрипт завантажено
console.log("JavaScript завантажено");

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Забороняємо стандартну відправку форми
  
  // Перевірка на порожні поля
  if (!fullNameInput.value || !emailInput.value || !passwordInput.value) {
    alert('Будь ласка, заповніть всі поля!');
    return;
  }
  
  // Логування введених даних
  console.log('Ім\'я:', fullNameInput.value);
  console.log('Електронна пошта:', emailInput.value);
  console.log('Пароль:', passwordInput.value);

  // Сповіщення про успішну реєстрацію
  alert('Реєстрація успішна! Ви будете перенаправлені на сторінку входу.');

  // Очистка полів форми після відправлення
  fullNameInput.value = '';
  emailInput.value = '';
  passwordInput.value = '';

  // Перехід на сторінку login.html після сповіщення
  setTimeout(function() {
    window.location.href = '/login/login.html'; // Перехід на сторінку login.html
  }, 2000); // Затримка 2 секунди перед редиректом
});
