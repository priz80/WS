/* const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
} */

// Все внутренние ссылки теперь прокручиваются плавно, будто скользят по льду!
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    // Начинается плавное скольжение! 🛷
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});