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
  const updateBoardDisplay = () => {
    const boxes = document.querySelectorAll('#box');
    let counter = 0;
    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        boxes[counter].textContent = GameBoard.board[i][j];
        counter += 1;
      }
    }
  };
  const removeResult = () => {
    const result = document.getElementById('modal');
    result.remove();
  };
  return {
    updateBoardDisplay, removeResult,
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

  const reStart = () => {
    // reset gameboard
    GameBoard.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];

    displayController.updateBoardDisplay();
    displayController.removeResult();
    game.start();
  };

  // add game event listeners to tic-tac-toe boxes
  const addListeners = () => {
    const box = document.querySelectorAll('#box');
    box.forEach((element) => {
      element.addEventListener('click', () => {
        // selects chosen box
        const { index1 } = element.dataset;
        const { index2 } = element.dataset;
        if (GameBoard.board[index1][index2] === '') {
          GameBoard.board[index1][index2] = currentPlayer.name;
          displayController.updateBoardDisplay();
          game.checkForResult();
          game.switchPlayer();
        }
      });
    });
  };

  const switchPlayer = () => {
    if (currentPlayer === playerX) { currentPlayer = playerO; } else { currentPlayer = playerX; }
  };

  const checkForResult = () => {
    const result = document.getElementById('modal');
    // check for row
    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        if (GameBoard.board[i][j] === GameBoard.board[i][j + 1] === GameBoard.board[i][j + 2]) {
          result.textContent = ` PLAYER ${GameBoard.board[i][j]} WINS`;
          result.classList.add('active');
          result.addEventListener('click', game.reStart);
        }
        if (GameBoard.board[i][j] === GameBoard.board[i][j + 3] === GameBoard.board[i][j + 6]) {
          result.textContent = ` PLAYER ${GameBoard.board[i][j]} WINS`;
          result.classList.add('active');
          result.addEventListener('click', game.reStart);
        }
      }
    }
    // check for diagonal
    if (GameBoard.board[0][0] === GameBoard.board[1][1] === GameBoard.board[2][2]) {
      result.textContent = ` PLAYER ${GameBoard.board[0][0]} WINS`;
      result.classList.add('active');
      result.addEventListener('click', game.reStart);
    }
    if (GameBoard.board[0][2] === GameBoard.board[1][1] === GameBoard.board[2][0]) {
      result.textContent = ` PLAYER ${GameBoard.board[0][2]} WINS`;
      result.classList.add('active');
      result.addEventListener('click', game.reStart);
    } /* check for draw */ else if (!GameBoard.board[0].includes('') && !GameBoard.board[1].includes('') && !GameBoard.board[2].includes('')) {
      result.textContent = "IT'S A DRAW";
      result.classList.add('active');
      result.addEventListener('click', game.reStart);
    }
  };
  return {
    start, switchPlayer, checkForResult, addListeners, reStart,
  };
})();

// initialize the game
game.start();
game.addListeners();
