module.exports = () => {
  const aboutModal = document.querySelector('.about');
  const aboutOpen = document.querySelector('.about--open');
  const aboutClose = document.querySelector('.about--close');
  aboutOpen.addEventListener('click', () => aboutModal.show());
  aboutClose.addEventListener('click', () => aboutModal.close());
};
