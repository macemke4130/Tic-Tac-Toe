// Collects all squares and puts them into an array called cells --
let cells = document.querySelectorAll('.row > div');

// Adds event listener to each cell for a user click --
for (let index = 0; index < cells.length; index++) {
    cells[index].addEventListener('click', cellClicked);
}

// Sets initial state variables --
let player = "X";
let gameOver = false;
let moveNum = 0;

// Switches player back and forth from X to O --
function flipper() {
    if (player == "X") {
        player = "O";
    } else if (player == "O") {
        player = "X";
    }
}

// Sets a square to the current player
function cellWrite() {
    event.target.textContent = player;
}

// Checks to see if the game is a draw --
function countUp() {
    if (moveNum < 8) {
        moveNum++;
    } else {
        declareWinner("Draw!");
    }
}

//Changes H3 tag to display the winner or a draw --
function declareWinner(msg) {
    gameOver = true;
    if (msg == "X" || msg == "O") {
        document.getElementById("thewinner").innerHTML = msg + " Wins!";
    } else {
        document.getElementById("thewinner").innerHTML = msg;
    }
}

// Checks all possible winning combinations on each click event -- 
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
    }
}

// Each time a cell is clicked --
function cellClicked() {
    // If statement prevents players from clicking on more squares once the game is over --
    if (gameOver == false) {
        cellWrite();
        didYouWin();
        flipper();
        countUp();
    }
}

