const slider = document.querySelector('.slider')
let buttons = document.querySelectorAll('button')
const input = document.querySelector('.input')
const select = document.querySelector('.select-btn')
const colorPicker = document.querySelector('.colorPicker')
const random = document.getElementById('random')
const eraser = document.getElementById('eraser')
const sliderInput = document.querySelector('.slider-input')
let cell;
let color;
let unit;
let container = document.querySelector('.container');


eraser.addEventListener('click', () => {
    color = eraser.innerHTML
})

slider.addEventListener('input', () => {
    let container = document.querySelector('.container');
    container.innerHTML = '';
    unit = slider.value
    makeGrid(slider.value)
})

colorPicker.addEventListener('input', () => {
    color = colorPicker.value
})

random.addEventListener('click', () => {
    color = random.innerHTML
})

//  buttons.forEach(button => button.addEventListener('click', () => {
//     color = button.innerText
// }))

function resetBoard() {
    let cells = container.querySelectorAll('.div')
    cells.forEach(cell => (cell.style.backgroundColor = 'white'))
    // 'rgb(212, 212, 212'
}

function opacityCells() {
    let cells = container.querySelectorAll('.div')
    
    cells.forEach(cell => cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'rgb(0,0,0)'
        if (cell.style.opacity <= 1) {
            cell.style.opacity = Number(cell.style.opacity) + 0.1
        } else {
            cell.style.opacity = 0.1
        }
    }))}



function makeGrid(unit) {

    container.style.gridTemplateColumns = `repeat(${unit}, 1fr)`
    container.style.gridTemplateRows = `repeat(${unit}, 1fr)`
    let grid = unit * unit;
    

        for(let i =0; i < grid; i++) {
            let cell = document.createElement('div');
            // cell.style.border = '1px dotted grey';
            cell.style.backgroundColor = 'white';
            cell.classList.add('div')
            cell.addEventListener('mouseover', () => {
                if (color == 'Random') {
                    cell.style.backgroundColor = randomColor()
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


makeGrid(25);

