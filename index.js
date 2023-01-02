// create gameboard module pattern
const GameBoard = (() => {
  // create board which is a 3X3 array
  const board = [
    ['', '', ''],
    ['', 'X', ''],
    ['', '', ''],
  ];
  return { board };
})();

const displayController = () => {
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
};

// create Player factory function
const player = (playerName, playerType) => {
  let played = false;
  const choose = (position) => {
    if (GameBoard.board[position] === '' && played === false) {
      GameBoard.board[position] = playerName;
      played = true;
    }
  };
  return { choose, played };
};

// create Game Module pattern
const game = (() => {
  const startGame = (gameType) => {
    let player1;
    let player2;
    if (gameType === 'pvp') {
      player1 = player('X', 'human');
      player2 = player('O', 'human');
    } else if (gameType === 'pvc') {
      player1 = player('X', 'human');
      player2 = player('O', 'bot');
    }
  };

  const declareResult = () => {
    // check for row
    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        if (GameBoard.board[i][j] === GameBoard.board[i][j + 1] === GameBoard.board[i][j + 2]) {

        }
        if (GameBoard.board[i][j] === GameBoard.board[i][j + 3] === GameBoard.board[i][j + 6]) {

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
})();
