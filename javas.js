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
    square.classList.add(`s${i}`);
    container.appendChild(square);
}
 
for(i = 0; squares*squares > i; i++){
    let thisOne = document.querySelector(`.s${i}`);
    thisOne.addEventListener("mouseover", function(){
        thisOne.classList.add("over");
    });
}
    