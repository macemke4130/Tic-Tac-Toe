let cells = document.querySelectorAll('.row > div');

for (let index = 0; index < cells.length; index++) {
    cells[index].addEventListener('click', cellClicked);
}

let player = "X"; // Sets initial player to X --
function flipper() {
    if (player == "X") {
        event.target.textContent = player;
        player = "O";
    } else if (player == "O") {
        event.target.textContent = player;
        player = "X";
    }
}

function cellClicked() {
    flipper();
}

