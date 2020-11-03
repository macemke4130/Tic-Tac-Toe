let cells = document.querySelectorAll('.row > div');

for (let index = 0; index < cells.length; index++) {
    cells[index].addEventListener('click', cellClicked);
}

function cellClicked() {
   event.target.textContent = "X";
}