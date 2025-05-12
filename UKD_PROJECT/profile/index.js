document.addEventListener("DOMContentLoaded", function () {
    const nutritionBtn = document.getElementById('nutritionBtn');
    const weightBtn = document.getElementById('weightBtn');
  
    if (nutritionBtn && weightBtn) {
      nutritionBtn.addEventListener('click', () => {
        nutritionBtn.classList.add('active');
        weightBtn.classList.remove('active');
      });
  
      weightBtn.addEventListener('click', () => {
        weightBtn.classList.add('active');
        nutritionBtn.classList.remove('active');
      });
    }
  
    const mealPlan = document.getElementById('mealPlan');
    const mealPhotoLarge = document.getElementById('mealPhotoLarge');
    const mealPhotoSmall = document.getElementById('mealPhotoSmall');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const progressPercent = document.querySelector('.progress-percent');
  
    let currentDaySet = 1; // стартуємо з 1
    const totalSets = 4;
  
    const dayPlans = {
      1: {
        title: "ДНІ 1–5:",
        breakfast: "Омлет із 2 яєць + тост із цільнозернового хліба + овочевий салат",
        lunch: "Куряче філе (250 г) + гречка (300 г) + тушковані овочі",
        dinner: "Салат із тунця + варене яйце + ½ авокадо",
        images: ["/images/omlet.png", "/images/grechka.png"]
      },
      2: {
        title: "ДНІ 6–10:",
        breakfast: "Вівсянка на молоці з горіхами та ягодами",
        lunch: "Запечена риба (150 г) + кіноа (70 г) + спаржа",
        dinner: "Грецький салат (огірки, помідори, сир фета, оливки) + цільнозерновий хліб",
        images: ["/images/oatmeal.png", "/images/fish.png"]
      },
      3: {
        title: "ДНІ 11–15:",
        breakfast: "Тост із авокадо + варене яйце + помідор",
        lunch: "Яловичий стейк (150 г) + печена картопля + броколі",
        dinner: "Сочевичний суп + зелень + цільнозернові сухарики",
        images: ["/images/avocadoToast.png", "/images/steak.png"]
      },
      4: {
        title: "ДНІ 16–20:",
        breakfast: "Сир із медом та горіхами + яблуко",
        lunch: "Індичка (150 г) + рис (80 г) + овочевий салат",
        dinner: "Смузі (кефір + банан + мигдаль)",
        images: ["/images/cottageCheese.png", "/images/turkey.png"]
      }
    };
  
    function updateContent(daySet) {
      const data = dayPlans[daySet];
      mealPlan.innerHTML = `
        <h2>${data.title}</h2>
        <p><span class="meal-label">Сніданок:</span> ${data.breakfast}</p>
        <p><span class="meal-label">Обід:</span> ${data.lunch}</p>
        <p><span class="meal-label">Вечеря:</span> ${data.dinner}</p>
      `;
      mealPhotoLarge.src = data.images[0];
      mealPhotoSmall.src = data.images[1];
    }
  
    function animateProgress(from, to) {
      let current = from;
      const step = from < to ? 1 : -1;
      const interval = setInterval(() => {
        current += step;
        progressPercent.textContent = `${current}%`;
        if (current === to) clearInterval(interval);
      }, 15); // швидкість анімації
    }
  
    function updateProgress() {
        const target = Math.round((currentDaySet - 1) * (100 / 3));
        const current = parseInt(progressPercent.textContent);
        if (current !== target) {
          animateProgress(current, target);
        }
      }
  
    nextBtn.addEventListener('click', () => {
      currentDaySet = currentDaySet === totalSets ? 1 : currentDaySet + 1;
      updateContent(currentDaySet);
      updateProgress();
    });
  
    prevBtn.addEventListener('click', () => {
      currentDaySet = currentDaySet === 1 ? totalSets : currentDaySet - 1;
      updateContent(currentDaySet);
      updateProgress();
    });
  
    // Ініціалізація при завантаженні
    updateContent(currentDaySet);
    progressPercent.textContent = "0%";
  });
  