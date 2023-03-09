const container = document.querySelector('.image-container');
const images = container.querySelectorAll('img');
const arrows = container.querySelectorAll('.arrow');
let currentImageIndex = 0;

arrows.forEach((arrow) => {
  arrow.addEventListener('click', (event) => {
    event.preventDefault();
    const direction = arrow.classList.contains('right') ? 1 : -1;
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    container.style.transform = `translateX(-${currentImageIndex * 100}%)`;
  });
});


