const gamesboardContainer = document.querySelector("#gamesboard-container");
const optionContainer = document.querySelector(".option-container");
const flipButton = document.querySelector("#flip-button");

// Option Choosing
let angle = 0;
function flip() {
    const optionShips = Array.from(optionContainer.children)
    //An if statement to change the angle to be able to flip the battleship from an angle to another
    angle === 0 ? angle = 90 : angle = 0
    optionShips.forEach(optionShip => optionShip.style.transform = `rotate(${angle}deg)`)
}

//Create Boards
const width = 10
 
function createBoard(color) {
    const gameBoardContainer = document.createElement('div')
    gameBoardContainer.classList.add('game-board')
    gameBoardContainer.style.backgroundColor = color

    gamesboardContainer.append(gameBoardContainer)
}

createBoard("yellow")
createBoard("pink")

flipButton.addEventListener("click", flip)