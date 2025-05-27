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
            
            
            
            