const legendWrapper = document.querySelector('.legend--wrapper');
const tickMarks = document.querySelectorAll('.legend--tick');
const margins = [8, 8, 12, 12, 16, 16, 16, 12, 8];
const boardSize = 45;

const updateTickMarks = (transform) => {
  legendWrapper.style.marginLeft = `${transform.x}px`;
  tickMarks.forEach((tick, index) => {
    const width = (boardSize * margins[index]) + boardSize;
    tick.style.width = `${width * transform.k}px`;
  });
};

const initTickMarks = () => {
  updateTickMarks({
    k: 1,
  });
};

module.exports = { updateTickMarks, initTickMarks };
