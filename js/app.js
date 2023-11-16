const openModal = document.querySelector('.modal-box'),
    clicklModal = document.querySelector('.rounded-btn'),
    closeModal = document.querySelector('.cancel-flex');

clicklModal.addEventListener('click', () => {
    openModal.showModal()
});

closeModal.addEventListener('click', () => {
    openModal.close()
})




// THIS IS FOR THE NAVIGATION TOGGLE






