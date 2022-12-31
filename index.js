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

// create Game Module pattern
const game = ({
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
      // check for row
      for(let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (GameBoard.board[i,j] === GameBoard.board[i,j+3] === GameBoard.board[i,j+6] || GameBoard.board[i,j] === GameBoard.board[i,j+1] === GameBoard.board[i,j+2]){

          }
        }
      }       
    // check for diagonal 
    if (GameBoard.board[0,0] === GameBoard.board[1,1] === GameBoard.board[2,2]) {
      return true;
    }
    if (GameBoard.board[0,2] === GameBoard.board[1,1] === GameBoard.board[2,0]) {
      return true;
    }
  }     
})();