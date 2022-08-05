const container = document.querySelector('.container');
const button = document.createElement('button');

let cellNumber = 16;

button.textContent = 'Click here to change size';
container.appendChild(button);

generateGrid()
// Create a function to ask how big to make the grid
button.addEventListener('click', getSize);

let cells = document.querySelectorAll('.cell')

sketch()

function generateGrid(num=cellNumber) {
    for (let i = 0; i < num; i++){
        let row = document.createElement('div');
        container.appendChild(row);
        for (let j = 0; j < num; j++){
            let cell = document.createElement('div');
            cell.className = 'cell';
            row.appendChild(cell);
        }
    }
    sketch();
}



function getSize (){
    cellNumber = prompt('What size do you want your Etch-a-Sketch?: (Max size: 100)' , 16);
        while (cellNumber > 100 || cellNumber < 0){
            cellNumber = prompt('What size do you want your Etch-a-Sketch?: (Max size: 100)' , 16);
        }
        deleteGrid();
        generateGrid(cellNumber);
        sketch();
}

function sketch() {
    let cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });
    });
}

function deleteGrid() {
    let grid = document.querySelectorAll('.cell')
    grid.forEach((e) => (e).remove());

}