document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.login--form'); // Отримуємо форму за класом

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Забороняємо стандартну відправку форми

    // Отримуємо значення з полів форми за допомогою id
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Перевірка, чи всі поля заповнені
    if (email && password) {
      // Перехід на іншу сторінку після натискання "Увійти"
      window.location.href = 'users/profile/'; // Замініть на потрібну URL-адресу
    } else {
      alert('Будь ласка, заповніть усі поля!');
    }
  });
});