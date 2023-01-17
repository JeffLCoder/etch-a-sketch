
const grid = document.querySelector('.grid');
const gridLayout = document.querySelector('.grid__layout');
const btn = document.querySelector('.header__button')

function drawGrid(numberOfRows, numberOfColumns) {
    gridLayout.style.gridTemplateRows = numberOfRows;
    gridLayout.style.gridTemplateColumns = numberOfColumns;
    let randomR = Math.floor(Math.random() * 128);
    let randomG = Math.floor(Math.random() * 128);
    let randomB = Math.floor(Math.random() * 128);
    const incR = randomR / 10;
    const incG = randomG / 10;
    const incB = randomB / 10;
    // console.log(randomColor);
    const chgBgdColor = (cell) => {
        const mouseOverCell = document.querySelector(`.${cell}`);
        mouseOverCell.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
        randomR = (randomR - incR) <= 0 ? 0 : Math.floor(randomR - incR);
        randomG = (randomG - incG) <= 0 ? 0 : Math.floor(randomG - incG);
        randomB = (randomB - incB) <= 0 ? 0 : Math.floor(randomB - incB);

        // console.log(`rgb(${randomR}, ${randomG},${randomB})`);
        // console.log(`${incR},${incG},${incB}`);
    }

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



drawGrid(16, 16);
btn.addEventListener('click', () => {
    let num = parseInt(prompt('Pls enter numbers between 10-99:'));
    if (!num) {
        alert('Wrong Input!')
    } else {
        while (gridLayout.firstChild) {
            gridLayout.removeChild(gridLayout.firstChild)
        }
        drawGrid(num, num);
    }


})
