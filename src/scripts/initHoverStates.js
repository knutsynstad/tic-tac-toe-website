const index = new Map();
const boards = document.querySelectorAll('.boards svg');
const connections = document.querySelectorAll('.connections path');

const initHoverStates = () => {
  boards.forEach((board) => {
    const links = [];
    connections.forEach((connection) => {
      const tokens = connection.id.split('-');
      if (tokens.includes(board.id)) {
        links.push(connection.id);
      }
    });
    index.set(board.id, links);
  });

  boards.forEach((board) => {
    board.addEventListener('mouseover', () => {
      const links = index.get(board.id);

      links.forEach((link) => {
        const element = document.getElementById(link);
        element.setAttribute('opacity', 1);
      });
    });

    board.addEventListener('mouseout', () => {
      const links = index.get(board.id);

      links.forEach((link) => {
        const element = document.getElementById(link);
        element.setAttribute('opacity', 0.2);
      });
    });
  });
};

module.exports = initHoverStates;
