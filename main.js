document.addEventListener('DOMContentLoaded', () => {
  const sliderBoxes = document.querySelectorAll('.slider-box');
  const btnNext = document.getElementById('proxima');
  const btnPrevious = document.getElementById('anterior');
  let currentIndex = 0;

  function showSlide(index) {
      sliderBoxes.forEach((box, i) => {
          box.classList.toggle('ativo', i === index);
          });
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % sliderBoxes.length;
      showSlide(currentIndex);
  }

  function previousSlide() {
      currentIndex = (currentIndex - 1 + sliderBoxes.length) % sliderBoxes.length;
      showSlide(currentIndex);
  }

  // Navegação Automática
  setInterval(nextSlide, 7000);

  // Botões de Navegação
  btnNext.addEventListener('click', nextSlide);
  btnPrevious.addEventListener('click', previousSlide);


  });


