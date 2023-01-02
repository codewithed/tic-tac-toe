// create gameboard module pattern
const GameBoard = (() => {
  // create board which is a 3X3 array
  const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  return { board };
})();

// create displayContoller module pattern
const displayController = (() => {
  const updateScreen = () => {
    const boxes = document.querySelectorAll('#box');
    let counter = 0;
    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        boxes[counter].textContent = GameBoard.board[i][j];
        counter += 1;
      }
    }
  };
  return {
    updateScreen,
  };
})();

// create Player factory function
const player = (playerName, playerType) => {
  const name = playerName;
  const type = playerType;
  return { name, type };
};

// create Game Module pattern
const game = (() => {
  let currentPlayer;
  const playerX = player('X');
  const playerO = player('O');
  currentPlayer = playerX;

  const switchPlayer = () => {
    if (currentPlayer === playerX) { currentPlayer = playerO; } else { currentPlayer = playerX; }
  };

  const select = (position, currentPlayer) => {
    if (GameBoard.board[position] === '') {
      GameBoard.board[position] = currentPlayer.name;
      displayController.updateScreen();
      game.switchPlayer();
    }
  };

  const declareResult = () => {
    // check for row
    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        if (GameBoard.board[i][j] === GameBoard.board[i][j + 1] === GameBoard.board[i][j + 2]) {
          return true;
        }
        if (GameBoard.board[i][j] === GameBoard.board[i][j + 3] === GameBoard.board[i][j + 6]) {
          return true;
        }
      }
    }
    // check for diagonal
    if (GameBoard.board[0][0] === GameBoard.board[1][1] === GameBoard.board[2][2]) {
      return true;
    }
    if (GameBoard.board[0][2] === GameBoard.board[1][1] === GameBoard.board[2][0]) {
      return true;
    }
  };
  return { switchPlayer, declareResult, select };
})();

game.start();
