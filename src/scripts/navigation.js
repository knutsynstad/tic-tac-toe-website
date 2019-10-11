const navigation = document.querySelector('header');
const navigationToggle = document.querySelector('.navigation--toggle');


const toggleNavigation = () => {
  navigation.classList.toggle('open');
};

const closeNavigation = () => {
  navigation.classList.remove('open');
};

const initNavigation = () => {
  navigationToggle.addEventListener('click', () => toggleNavigation());
};

module.exports = { toggleNavigation, initNavigation, closeNavigation };
