const popUp = document.querySelector('.modal-box'),
    overlay = document.querySelector('.overlap'),
    showModal = document.querySelector('.rounded-btn'),
    close = document.querySelector('.pop-btn');

showModal.addEventListener('click', () => popUp.classList.toggle('active'))
showModal.addEventListener('click', () => overlay.classList.toggle('active'))


close.addEventListener('click', () => popUp.classList.remove('active'))
close.addEventListener('click', () => overlay.classList.remove('active'))
