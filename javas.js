// the sizes are in px 

const container = document.querySelector(".container");
const contSize = 400;

let square;
let squares = 30;
let widthHeight = contSize / squares;

for(let i=0;squares*squares > i; i++){
    square = document.createElement("div");
    square.className = "square";
    square.style.width = `${widthHeight}px`;
    square.style.height = `${widthHeight}px`;

    container.appendChild(square);
}
 
