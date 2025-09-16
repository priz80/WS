// Получаем элементы слайдера
const slider = document.querySelector(".slidertarif_conteiner");
const prevButton = document.getElementById("next-tarif");
const nextButton = document.getElementById("prev-tarif");
const slides = Array.from(slider.querySelectorAll(".card-tarif"));
const slideCount = slides.length;
let slideIndex = 0;
// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "block";
      
    } 
    else if (index === slideIndex + 1) {
      slide.style.display = 'block';
    } 
    else if (index === slideIndex - 1) {
      slide.style.display = 'block';
    } 
    else {
      slide.style.display = "none";
    }
  });
}

// Инициализация слайдера
updateSlider();
