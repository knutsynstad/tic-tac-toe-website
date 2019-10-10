const aboutModal = document.querySelector('.about');
const aboutOpen = document.querySelector('.about--open');
const aboutClose = document.querySelector('.about--close');

const initAboutModal = () => {
  aboutOpen.addEventListener('click', () => aboutModal.classList.toggle('hidden'));
  aboutClose.addEventListener('click', () => aboutModal.classList.toggle('hidden'));
};

module.exports = initAboutModal;
