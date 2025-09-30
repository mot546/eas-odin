// the sizes are in px 

const container = document.querySelector(".container");
const contSize = 400;
const submitButton = document.querySelector("#submit");
let squares = 16;
let square;

function divBox(){
    let widthHeight = contSize / squares;
    
    for(let i=0;squares*squares > i; i++){
        square = document.createElement("div");
        square.className = "square";
        square.style.width = `${widthHeight}px`;
        square.style.height = `${widthHeight}px`;
        square.classList.add(`s${i}`);
        container.appendChild(square);
        squares>30? square.style.border = "none": square.style.border = ".5px solid black";
    }
    
    //hover effect
    for(let i = 0; squares*squares > i; i++){
        let thisOne = document.querySelector(`.s${i}`);
        thisOne.addEventListener("mouseover", function(){
            thisOne.classList.add("over");
        });
    }
 
}

function reset(){

        container.innerHTML = "";
        divBox();
}

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", reset);

submitButton.addEventListener("click", function(){
let size = document.querySelector(".size");
squares = Number(size.value) ;
reset();
});

divBox();