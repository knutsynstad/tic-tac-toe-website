import { closeNavigation } from './navigation';

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
      closeNavigation();
    });
  });
};

module.exports = initAboutModal;
