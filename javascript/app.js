//pseudo-code:
// 1.   create 2 range inputs for user to choose the number of squares of each side
// 1.a  needs to add an indicator to show the value user has chosen
// 1.b  create a button for user to submit
// 2.   create default 16x16 grids
let numberOfRows = 16, numberOfColumns = 16;
const grid = document.querySelector('.grid');
const gridLayout = document.querySelector('.grid__layout');
gridLayout.style.gridTemplateRows = numberOfRows;
gridLayout.style.gridTemplateColumns = numberOfColumns;
const viewPortWidth = document.body.clientWidth;
let cellWidth = viewPortWidth * 0.8 / numberOfColumns;
// console.log(viewPortWidth);
// console.log(cellWidth);
// const cellHeight =;

for (i = 1; i <= numberOfRows; i++) {

    for (j = 1; j <= numberOfColumns; j++) {

        const cell = document.createElement('div');
        cell.style.width = `${cellWidth}`;
        cell.style.height = `${cellWidth}`;
        console.log(cell.style.width);
        cell.style.gridRow = `${i}`;
        cell.style.gridColumn = `${j}`;
        cell.classList.add(`column${i}-row${j}`, 'cell-unit');
        cell.style.backgroundColor = 'orange';
        gridLayout.appendChild(cell);

    }
}

// 2.a  create a container for the  grid
// 2.b  use  recursive loops to generate the grid
// 2.c  define space for grid
// 2.d  define the style of each cell

// 2.e  add eventListener to each cell for mouse over event
// 3.   once user click the button, clear the whole grid
// 4.   repeat from 2.a
// 5.   define hover effect
