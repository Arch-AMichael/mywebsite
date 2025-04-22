// Slider Interactivity
const sliderContainer = document.querySelector('.slider-container');
const sliderItems = document.querySelectorAll('.slider-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateSlider() {
    const offset = -currentIndex * 100;
    sliderContainer.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? sliderItems.length - 1 : currentIndex - 1;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === sliderItems.length - 1) ? 0 : currentIndex + 1;
    updateSlider();
});