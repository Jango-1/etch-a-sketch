const gridContainer = document.querySelector(".grid-container");

for (let row = 0; row < 4; row++) {
    const flexRow = document.createElement("div");
    flexRow.classList.add('flex-row');
    
    for (let i = 0; i < 4; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add('grid-item');
        gridItem.addEventListener('mouseover', function(event) {
            event.target.classList.add('black-sketch');
        });
        flexRow.appendChild(gridItem);
    }

    gridContainer.appendChild(flexRow);
}

const gridForm = document.getElementById('grid-form');

gridForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    gridContainer.innerHTML = '';

    let inputNumber = document.getElementById('quantity').value;

    for (let row = 0; row < inputNumber; row++) {
        const flexRow = document.createElement("div");
        flexRow.classList.add('flex-row');
        
        for (let i = 0; i < inputNumber; i++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add('grid-item');
            gridItem.addEventListener('mouseover', function(event) {
                event.target.classList.add('black-sketch');
            });
            flexRow.appendChild(gridItem);
        }
    
        gridContainer.appendChild(flexRow);
    }
});

const randomColor = () => Math.floor(Math.random() * 256);

const colorful = document.getElementById('go-crazy');

colorful.addEventListener('click', function () {
    const allGridItems = document.querySelectorAll('.grid-item');

    allGridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', function() {
            const color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
            this.style.backgroundColor = color;
        });
    });
});