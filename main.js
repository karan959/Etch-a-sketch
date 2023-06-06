let contain = document.querySelector('#container');
let gridValue = document.querySelector('#gridLabel');
let range = document.querySelector('#gridSize');
let clearButton = document.querySelector('.clear');
let randomColor = document.querySelector('.random');
let red = document.querySelector('.red');
let colorInput = document.querySelector('.color');
let black = document.querySelector('.black')

// function to create the grid
function createGrid(size){
    contain.setAttribute('style',`grid-template-columns: repeat(${size}, 2fr); grid-template-rows: repeat(${size}, 2fr);`);
    for(let i=0; i<=(size*size); i++)
    {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', (event) =>{
            event.target.style.backgroundColor = 'black';
        })
        contain.appendChild(div);
    }
    /*var gridPixels = container.querySelectorAll('#container > div');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = 'black';
    })*/
}

// functin called to create default container of 16 grid
createGrid(16);

// function to erase the sketch  
function eraseAllColor() {
    var gridPixels = contain.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = ' #5c868d');
}


clearButton.addEventListener('click', eraseAllColor);

range.addEventListener('input',()=>{
    let val = range.value;
    gridValue.textContent = val;
    createGrid(val);
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

randomColor.addEventListener('click',() =>{
    let divs = contain.querySelectorAll('div'); 
    divs.forEach(div => {
        div.addEventListener('mouseover',() => {
             div.style.backgroundColor = getRandomColor();
        });
    });
});

red.addEventListener('click',()=> {
    let divs = contain.querySelectorAll('div');
    divs.forEach(div => {
        div.addEventListener('mouseover',() => {
            div.style.backgroundColor = 'red';
        });
    });
});

colorInput.addEventListener('click',()=>{
    let divs = contain.querySelectorAll('div');
    divs.forEach(div => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = colorInput.value;
        })
    })
})

black.addEventListener('click',() => {
    let pixels = contain.querySelectorAll('div');
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = 'black';
        })
    })
})



