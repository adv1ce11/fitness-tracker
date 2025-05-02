document.getElementById('nutritionBtn').addEventListener('click', function () {
    window.location.href = '/profile/index.html';
});

document.getElementById('weightBtn').addEventListener('click', function () {
    window.location.href = 'weight.html';
});


document.addEventListener('DOMContentLoaded', function() {
    const blocksContainer = document.querySelector('.blocks-container');
    const gifContainer = document.getElementById('gif-container');
    const gifImage = document.getElementById('gif-image');
    const closeButton = document.getElementById('close-gif');

    blocksContainer.addEventListener('click', function(event) {
        const clickedBlock = event.target.closest('.dark-block, .yellow-block');

        if (clickedBlock && !clickedBlock.classList.contains('active-block')) {
            // Деактивуємо попередній активний блок
            const activeBlock = document.querySelector('.active-block');
            if (activeBlock) {
                activeBlock.classList.remove('active-block');
                activeBlock.classList.add('inactive-block');
                activeBlock.style.backgroundColor = '#101010';
                const textElementsActive = activeBlock.querySelectorAll('.main-text, .info-text');
                textElementsActive.forEach(element => {
                    element.style.color = 'white';
                });
                const infoContainerActive = activeBlock.querySelector('.info-container');
                const gifButtonActive = activeBlock.querySelector('.gif-button');
                if (infoContainerActive) infoContainerActive.style.display = 'none';
                if (gifButtonActive) gifButtonActive.style.display = 'none';
            }

            // Активуємо натиснутий блок
            clickedBlock.classList.remove('inactive-block');
            clickedBlock.classList.add('active-block');
            clickedBlock.style.backgroundColor = '#FEEF41';
            const textElementsClicked = clickedBlock.querySelectorAll('.main-text, .info-text');
            textElementsClicked.forEach(element => {
                element.style.color = 'black';
            });
            const infoContainerClicked = clickedBlock.querySelector('.info-container');
            const gifButtonClicked = clickedBlock.querySelector('.gif-button');
            if (infoContainerClicked) infoContainerClicked.style.display = 'block';
            if (gifButtonClicked) gifButtonClicked.style.display = 'flex';

            // Завантажуємо URL GIF з data-атрибута
            const gifUrl = clickedBlock.dataset.gifUrl;
            gifImage.src = gifUrl ? gifUrl : ''; // Встановлюємо URL GIF, якщо він є
        }
    });

    // Ініціалізація відображення для першого (жовтого) блоку
    const initialActiveBlock = document.querySelector('.yellow-block');
    if (initialActiveBlock) {
        const textElementsInitial = initialActiveBlock.querySelectorAll('.main-text, .info-text');
        textElementsInitial.forEach(element => {
            element.style.color = 'black';
        });
        const infoContainerInitial = initialActiveBlock.querySelector('.info-container');
        const gifButtonInitial = initialActiveBlock.querySelector('.gif-button');
        if (infoContainerInitial) infoContainerInitial.style.display = 'block';
        if (gifButtonInitial) gifButtonInitial.style.display = 'flex';
        gifImage.src = initialActiveBlock.dataset.gifUrl ? initialActiveBlock.dataset.gifUrl : '';
    }

    // Логіка для відкриття/закриття GIF
    blocksContainer.addEventListener('click', function(event) {
        const targetGifButton = event.target.closest('.active-block .gif-button');
        if (targetGifButton) {
            gifContainer.style.display = 'flex';
        }
    });

    if (closeButton) {
        closeButton.addEventListener('click', function() {
            gifContainer.style.display = 'none';
            gifImage.src = "";
        });
    }
});