//pseudo-code:
// 1.   create 2 range inputs for user to choose the number of squares of each side
// 1.a  needs to add an indicator to show the value user has chosen
// 1.b  create a button for user to submit
// 2.   create default 16x16 grids
// let numberOfRows = 16, numberOfColumns = 16;
const grid = document.querySelector('.grid');
const gridLayout = document.querySelector('.grid__layout');
const btn = document.querySelector('.header__button')

function drawGrid(numberOfRows, numberOfColumns) {
    gridLayout.style.gridTemplateRows = numberOfRows;
    gridLayout.style.gridTemplateColumns = numberOfColumns;

    for (i = 1; i <= numberOfRows; i++) {

        for (j = 1; j <= numberOfColumns; j++) {

            const cell = document.createElement('div');
            cell.style.gridRow = `${i}`;
            cell.style.gridColumn = `${j}`;
            cell.classList.add(`column${i}-row${j}`, 'cell-unit');
            cell.addEventListener('mouseover', (e) => {
                e.target.classList.toggle('new-color')
                cellClass = e.target.classList[0];
                // console.log(cellClass);
                chgBgdColor(cellClass);
            })
            gridLayout.appendChild(cell);

        }
    }
}

let randomR = Math.floor(Math.random() * 128);
let randomG = Math.floor(Math.random() * 128);
let randomB = Math.floor(Math.random() * 128);
const incR = Math.floor(randomR / 10);
const incG = Math.floor(randomG / 10);
const incB = Math.floor(randomB / 10);
// console.log(randomColor);
const chgBgdColor = (cell) => {
    const mouseOverCell = document.querySelector(`.${cell}`);
    mouseOverCell.style.backgroundColor = `rgb(${randomR}, ${randomG},${randomB})`;
    randomR = (randomR - incR) <= 0 ? 0 : randomR - incR;
    randomG = (randomG - incG) <= 0 ? 0 : randomG - incG;
    randomB = (randomB - incB) <= 0 ? 0 : randomB - incB;

    console.log(`rgb(${randomR}, ${randomG},${randomB})`);
}
// for bonus part, i need to declare a function outside of eventListener and invoke it inside the listener. This function change the background color, and there should be an global varible that does ++ which adds darkness everytime the function is executed. 
// when calling upon that function, the event target's class  will be past, so thaat the function know which cell to apply darkened color
drawGrid(16, 16);
btn.addEventListener('click', () => {
    const num = parseInt(prompt('Pls enter numbers between 10-99:'));
    // let mainGrid = document.getElementById('main-grid');
    while (gridLayout.firstChild) {
        gridLayout.removeChild(gridLayout.firstChild)
    }
    drawGrid(num, num);
})
// 2.a  create a container for the  grid
// 2.b  use  recursive loops to generate the grid
// 2.c  define space for grid
// 2.d  define the style of each cell

// 2.e  add eventListener to each cell for mouse over event
// 3.   once user click the button, clear the whole grid
// 4.   repeat from 2.a
// 5.   define hover effect
