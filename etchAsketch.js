
let buttons = document.querySelectorAll('button')
const input = document.querySelector('.input')
const select = document.querySelector('.select-btn')
let cell;
let color;
let unit = input.value;
let cells;




 buttons.forEach(button => button.addEventListener('click', () => {
    color = button.innerText
        
}))

function makeGrid(unit) {
    const container = document.querySelector('.container');
    container.style.gridTemplateColumns = `repeat(${unit}, 1fr)`
    container.style.gridTemplateRows = `repeat(${unit}, 1fr)`
    let grid = unit * unit;
    let opacity = 0.1;

        for(let i =0; i < grid; i++) {
            let cell = document.createElement('div');
            // cell.style.border = '1px solid grey';
            cell.style.backgroundColor = 'white';
            cell.classList.add('div')
            
        
            cell.addEventListener('mouseover', () => {
                if (color == 'Random') {
                    cell.style.backgroundColor = randomColor();
                } else if (color == 'Opacity') {
                    cell.style.backgroundColor = 'black';
                    // cell.style.opacity = '0.1'
                    cell.style.opacity = parseFloat(cell.style.opacity) + '0.1';
                    
                } else if (color == 'Eraser') {
                    cell.style.backgroundColor = 'white'
                } else {
                    cell.style.backgroundColor = color
                }
            })
            container.insertAdjacentElement('beforeend', cell);
            }
}

function randomColor() {
    let symbols = '0123456789ABCDEF';
    const hash = '#';
    let colorString = []
    
    for (let i = 0; i < 6; i ++) {
        colorString.push(symbols[Math.floor(Math.random() * 16)])
    }
        return hash + colorString.join('')
}

function opacity() {
    let opacity = this.style.opacity;
    this.style.opacity = opacity ? (parseFloat(opacity) + 0.1) : 0.2;
}

// if (cell.style.opacity >= 0.1) {
//     cell.style.opacity += 0.1
// }

makeGrid(50);

// function createGrid() {
//     unit = input.value
// }






