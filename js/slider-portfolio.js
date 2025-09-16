// Получаем элементы слайдера
const slyder = document.querySelector('.slider-portfolio_container');
const prevButtons = document.getElementById('prev-portfolio');
const nextButtons = document.getElementById('next-portfolio');
const slydes = Array.from(slyder.querySelectorAll('div'));
const slideCounter = slydes.length;
let sliderInd = 0;
/* let sliderI = 1; */

// Устанавливаем обработчики событий для кнопок
prevButtons.addEventListener('click', showPreviousSlider);
nextButtons.addEventListener('click', showNextSlider);

// Функция для показа предыдущего слайда
function showPreviousSlider() {
  sliderInd = (sliderInd - 1 + slideCounter) % slideCounter;
  updateSliders();
}

// Функция для показа следующего слайда
function showNextSlider() {
  sliderInd = (sliderInd + 1) % slideCounter;
  updateSliders();
}

// Функция для обновления отображения слайдера
function updateSliders() {
  slydes.forEach((slide, index) => {

    if (index === sliderInd) {
      slide.style.display = 'block';
    } 
    else if (index === sliderInd + 1) {
      slide.style.display = 'block';
    } 

    else {
      slide.style.display = 'none';
    }

  });
}


// Инициализация слайдера
updateSliders();