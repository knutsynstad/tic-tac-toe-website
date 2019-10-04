module.exports = () => {
  document.querySelectorAll('.accordion .accordion--togggle')
    .forEach((row) => {
      row.addEventListener('click', () => {
        row
          .parentNode
          .parentNode
          .classList
          .toggle('open');
      }, false);
    });
};
