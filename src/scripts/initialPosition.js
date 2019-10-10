const initialPosition = () => {
  const boardSize = 45;
  const height = window.innerHeight;
  const yOffset = 14040;
  const hangLine = (height / 2) - (boardSize / 2);

  return hangLine - yOffset;
};

module.exports = initialPosition;
