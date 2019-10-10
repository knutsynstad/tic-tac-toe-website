const aboutModal = document.querySelector('.about');
const affordances = [
  '.about--open',
  '.about--close',
  '.about--tint',
];

const initAboutModal = () => {
  affordances.forEach((affordance) => {
    const element = document.querySelector(affordance);
    element.addEventListener('click', () => {
      aboutModal.classList.toggle('hidden');
    });
  });
};

module.exports = initAboutModal;
