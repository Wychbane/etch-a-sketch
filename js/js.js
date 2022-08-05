const container = document.querySelector('.container');


for (let i = 0; i < 16; i++){
    let row = document.createElement('div');
    container.appendChild(row);
    for (let j = 0; j < 16; j++){
        let cell = document.createElement('div');
        cell.className = 'cell';
        row.appendChild(cell);
    }
}

let cells = document.querySelectorAll('.cell')

cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'black';
    });
})