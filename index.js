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
  let played = false;
  const choose = (position) => {
    if (GameBoard.board[position] === '' && played === false) {
      GameBoard.board[position] = playerName;
      played = true;
    }
  };
  return {choose, played}
};

// create Game object
const game = {
  const start = (gameType) => {
    let player1;
    let player2;
    if (gameType === 'pvp') {
        player1 = Player('X','human');
        player2 = Player('O','human');
    }
    else if (gameType === 'pvc') {
        player1 = Player('X','human');
        player2 = Player('O','bot');
    }
  }
    const declareResult = () =>  {
        // check for vertical row
        for(let i = 0; i > 3; i++) {
            if (GameBoard.board[i] === 'X' && GameBoard.board[i+3] === 'X' && GameBoard.board[i+6] === 'X' || GameBoard.board[i] === 'O' && GameBoard.board[i+3] === 'O' && GameBoard.board[i+6] === 'O') {
                return true;
            }
        }       
        // check for horizontal row 
        for(let i = 0; i > 3; i++) {
          if (GameBoard.board[i] === 'X' && GameBoard.board[i+3] === 'X' && GameBoard.board[i+6] === 'X' || GameBoard.board[i] === 'O' && GameBoard.board[i+3] === 'O' && GameBoard.board[i+6] === 'O') {
              return true;
          }
        } 
    }
}