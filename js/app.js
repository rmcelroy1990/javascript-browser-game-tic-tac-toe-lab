    const COMBOS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]


/*---------------------------- Variables (state) ----------------------------*/

let board = ['X', 'X', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'X'
]; //to represent the state of the squares on the board
let turn = ['X']; //to track whose turn it is
let winner = ['false']; //to represent if anyone has won yet
let tie = ['false']; //to represent if the game has ended in a tie
let playerO = ['O'];

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('h2');
const resetBtnEl = document.querySelector('click');

//console.log(squareEls)

/*-------------------------------- Functions --------------------------------*/
init();

const init = () => {

    console.log(init);
    render();
}

//window.onload = init() {
    console.log(init);
//};

const render = () => {
updateBoard();
updateMessage();
};

const updateBoard = () => {
    for(let i = 0; i < squareEls.length; i++) {
        board = [
        'null', 'null', 'null',
        'null', 'null', 'null',
        'null', 'null', 'null',
        ]
    board.forEach(squareEls => {
    console.log(squareEls);
});
}
}

const updateMessage = () => {
    if (!winner && !tie) {
        if (turn === 'X') {
            messageEl.textContent = "It's X's turn";
        } else {
            messageEl.textContent = "It's O's turn";
        }
    } else if (!winner && tie) {
        messageEl.textContent = "Tie game!";
    } else { 
        if ( turn === 'X') {
          messageEl.textContent = 'X wins!';
        } else {
          messageEl.textContent = 'O wins!';
        }
      }
  
  const handleClick = (evt) => {
    const sqIdx = evt.target.id;
    const squareIsFull = board[sqIdx] !== '';
    if (squareIsFull || winner) {
      return;
    }
}
 squareEls.forEach(square => {
    squareEls.querySelectorAll('click', function(handleClick) {

    })
 })
  
const squareIndex = board.indexOf();

const placePiece = (idx);
    board[idx] = turn;
};

const checkForWinner = () => {
    for( let i = 0; i < COMBOS.length; i++) {
         if(Math.abs(board[COMBOS[i][0]] + board[COMBOS[i][1]] + board[COMBOS[i][2]]) === 3) {
}
winner = true;
    }
}

const checkForTie = () => {
    if (winner) {
        return;
    }
    if (!board.includes('')) {
        tie = true;
    }
};

const switchPlayerTurn = () => {
    if (winner) {
        return;
    }
    if (turn === 'X') {
        turn = 'O';
    } else {
        turn = 'X';
    }};