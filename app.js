// Collects all squares and puts them into an array called cells --
let cells = document.querySelectorAll('.row > div');

// Adds event listener to each cell for a user click --
for (let index = 0; index < cells.length; index++) {
    cells[index].addEventListener('click', cellClicked);
}

// Sets initial state variables --
let player = "X";
let gameOver = false;
let populated = [];

// Each time a cell is clicked --
function cellClicked() {
    // If statement determines a play or a page refresh --
    if (gameOver == false) {
        cellWrite();
    } else {
        location.reload();
    }
}

// Sets a square to the current player if the square is blank then calls didYouWin --
function cellWrite() {
    if (event.target.textContent == "") {
        event.target.textContent = player;
        didYouWin();
    }
}

// Checks all possible winning combinations and declares winner -- 
function didYouWin() {
    if (cells[0].textContent == player && cells[1].textContent == player && cells[2].textContent == player) {
        declareWinner(player);
    } else if (cells[3].textContent == player && cells[4].textContent == player && cells[5].textContent == player) {
        declareWinner(player);
    } else if (cells[6].textContent == player && cells[7].textContent == player && cells[8].textContent == player) {
        declareWinner(player);
    } else if (cells[0].textContent == player && cells[3].textContent == player && cells[6].textContent == player) {
        declareWinner(player);
    } else if (cells[1].textContent == player && cells[4].textContent == player && cells[7].textContent == player) {
        declareWinner(player);
    } else if (cells[2].textContent == player && cells[5].textContent == player && cells[8].textContent == player) {
        declareWinner(player);
    } else if (cells[0].textContent == player && cells[4].textContent == player && cells[8].textContent == player) {
        declareWinner(player);
    } else if (cells[2].textContent == player && cells[4].textContent == player && cells[6].textContent == player) {
        declareWinner(player);
    } else {
        // If no one wins the game on this move, check for a tie --
        tieGame();
    }
}

// Checks to see if all of the squares are populated --
function tieGame() {
    for (let index = 0; index < cells.length; index++) {
        if (cells[index].textContent != "") {
            populated[index] = true;
        }
    }
    // I feel like there is a better way to do this but it is not in my toolbox yet --
    if(populated[0] == true && populated[1] == true && populated[2] == true && populated[3] == true && populated[4] == true && populated[5] == true && populated[6] == true && populated[7] == true && populated[8] == true) {
        declareWinner("Draw!");
    } else {
        // If no winner was called and it is not a draw, call flipper --
        flipper();
    }
}

//Changes H2 tag to display the winner or a draw --
function declareWinner(msg) {
    gameOver = true;
    if (msg == "X" || msg == "O") {
        document.getElementById("thewinner").innerHTML = msg + " Wins!";
    } else {
        document.getElementById("thewinner").innerHTML = msg;
    }
    // Refreshes the page to play again --
    document.getElementById("reload").innerHTML = "Click the board to play again!";
}

// Switches player back and forth from X to O --
function flipper() {
    if (player == "X") {
        player = "O";
    } else if (player == "O") {
        player = "X";
    }
}