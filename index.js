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
  let playerX;
  let playerO;

  // create player objects
  const start = () => {
    playerX = player('X');
    playerO = player('O');
    currentPlayer = playerX;
  };

  // add game event listeners to tic-tac-toe boxes
  const addListeners = () => {
    const box = document.querySelectorAll('#box');
    box.forEach((element) => {
      element.addEventListener('click', () => {
        const { index1 } = element.dataset;
        const { index2 } = element.dataset;
        if (GameBoard.board[index1][index2] === '') {
          GameBoard.board[index1][index2] = currentPlayer.name;
          displayController.updateScreen();
          game.switchPlayer();
        }
      });
    });
  };

  const switchPlayer = () => {
    if (currentPlayer === playerX) { currentPlayer = playerO; } else { currentPlayer = playerX; }
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
  return {
    start, switchPlayer, declareResult, addListeners,
  };
})();

game.start();
game.addListeners();
