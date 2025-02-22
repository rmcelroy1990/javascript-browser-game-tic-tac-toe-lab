//const players = {
   // '1 : 'X',
   // '-1' : 'O'
   // 'null' : ''

    //const COMBOS = [
       // [0, 1, 2],
      //  [3, 4, 5],
      //  [6, 7, 8],
      //  [0, 3, 6],
     //   [1, 4, 7],
     //   [2, 5, 8],
      //  [0, 4, 8],
     //   [2, 4, 6],
  //  ]
//}

/*---------------------------- Variables (state) ----------------------------*/

let board = ['[0]', '[1]', '[2]', '[3]', '[4]', '[5]', '[6]', '[7]', '[8]',
]; //to represent the state of the squares on the board
let turn = ['X']; //to track whose turn it is
let winner = ['false']; //to represent if anyone has won yet
let tie = []; //to represent if the game has ended in a tie
let playerO = ['O'];
/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.squares');
const messageEl = document.querySelector('h2');

//console.log(squareEls)

/*-------------------------------- Functions --------------------------------*/
function init() {
}
//render('game-started');
//console.log('game-started');

//function render() {;

function updateBoard() {
    
//board = [
       // 'null', 'null', 'null',
       // 'null', 'null', 'null',
       // 'null', 'null', 'null'
//];
         for(let i = 0; i < squareEls.length; i++); {
         }     
     updatedBoard.forEach((squareEls) => {
        // console.log.push(squareEls[i]);
     });
    }
function updateMessage() {
    render ()
    const updateMessage = document.getElementById("update-message");
   // updateMessage.textContent = "If both winner and tie have a value of false (meaning the game is still in progress), render whose turn it is.
// If winner is false, but tie is true, render a tie message.
// Otherwise, render a congratulatory message to the player that has won.";
}
  
function handleClick() {

}

//const squareEls = document.querySelector('button').addEventListener('click', handleClick);

function placePiece()
board.forEach(place, index) => {
    squareEls[index].textContent = PLAYERS[value]
}
//console.log(placePiece);

function checkForWinner() {
    for(let i = 0; i < winningCombos.length; i++) {
        if(Math.abs(board[winningCombos[i][0] + board[winningCombos[i][1]]+ board[winningCombos[i][2]]]) === 3 {
            return turn
        }
    }
}
function checkForTie() {
   for(let i = 0; i < winningCombos.length; i++) 
}

function switchPlayerTurn() {
    for(let i = 0; i < winningCombos.length; i++)
        if(winner === true)
            return 'X'; {
} else if (winner === 'T') messageEl.textContent = '$'
}

render() {
clear the board game and reset to beginning
}
/*----------------------------- Event Listeners -----------------------------*/

document.querySelector('button').addEventListener('click', init);
//document.getElementById('game-board').addEventListener('click'handleMove)


/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  
squareIndex = 
/*---------------------------- Variables (state) ----------------------------*/




/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/
//document.querySelector('button').addEventListener('click', init);
//document.getElementById('game-board').addEventListener('click'handleMove)


