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

  // Menu Mobile
        document.addEventListener('DOMContentLoaded', function() {
            const btnMenu = document.getElementById('btn-menu');
            const menuMobile = document.getElementById('menu-mobile');
            const btnFecharMenu = document.querySelector('.btn-fechar-menu');
            const overlayMenu = document.getElementById('overlay-menu');

            btnMenu.addEventListener('click', function() {
                menuMobile.classList.add('abrir-menu');
                overlayMenu.style.display = 'block';
            });

            btnFecharMenu.addEventListener('click', function() {
                menuMobile.classList.remove('abrir-menu');
                overlayMenu.style.display = 'none';
            });

            overlayMenu.addEventListener('click', function() {
                menuMobile.classList.remove('abrir-menu');
                overlayMenu.style.display = 'none';
            });
        });



