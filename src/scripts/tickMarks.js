const legendWrapper = document.querySelector('.legend--wrapper');
const tickMarks = document.querySelectorAll('.legend--tick');

module.exports = (transform) => {
  legendWrapper.style.marginLeft = `${transform.x}px`;
  tickMarks.forEach((tick) => {
    tick.style.width = `${225 * transform.k}px`;
  });
};
