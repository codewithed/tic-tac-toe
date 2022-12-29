// create gameboard module pattern
const GameBoard = (() => {
  // create board which is a 3X3 array
  const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
})();

// create Player factory function
const Player = (playerName, playerType) => {
  const choose = (position) => {
    if (GameBoard.board[position] === '') {
      GameBoard.board[position] = playerName;
    }
  };
};
