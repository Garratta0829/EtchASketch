let cell;



function makeGrid() {
    const container = document.querySelector('.container');
    container.style.gridTemplateColumns = `repeat(16, 1fr)`
    container.style.gridTemplateRows = `repeat(16, 1fr)`
    // let grid = unit * unit;

        for(let i =0; i < 256; i++) {
            let cell = document.createElement('div');
            cell.style.backgroundColor = 'blue';
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = 'white';
            })
            // cell.setAttribute('id', i)
            container.insertAdjacentElement('beforeend', cell);
            }
    
}


makeGrid();

// cell.forEach(cell => cell.addEventListener('mouseover', (e) => {
//     cell.style.backgroundColor = 'white';
// }))



// for (let j = 0; j < 256; i++) {
//     const cell = document.createElement('div');
//     cell.style.border = '2px solid black';
//     cell.style.height = '10px';
//     cell.style.width = '10px';
//     container.appendChild(cell);
// }




// make cells function, append cells to rows