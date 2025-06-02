        
            // --- JavaScript para o Menu Hambúrguer ---
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

            document.querySelectorAll('.image-item img').forEach(img => {
    img.addEventListener('click', function () {
        let modal = document.querySelector('.modal');
        let modalImg = document.querySelector('#imgModal');        
        modal.style.display = 'block';
        modalImg.src = this.src;
    });
});

document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.modal').style.display = 'none';
});

window.addEventListener('click', function (e) {
    let modal = document.querySelector('.modal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
            
            