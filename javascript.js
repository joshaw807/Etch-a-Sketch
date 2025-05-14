const board = document.querySelector(".gridContainer");
const btn = document.querySelector(".setSize");
const colorInput = document.querySelector(".colorInput")
let color = "black";


function createBoard(size) {
  let squares = document.querySelectorAll(".grid");
  squares.forEach((element) => element.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let isMouseDown = false;
  let amount = size * size;

  for (let i = 0; i < amount; i++) {
    let grid = document.createElement("div");
    grid.classList.add("grid");

    grid.addEventListener("mousedown", () => {
      isMouseDown = true;
    });
    grid.addEventListener("mouseup", () => {
      isMouseDown = false;
    });
    grid.addEventListener("mouseover", (e) => {
      if (isMouseDown) {
        colorSquare(e);
      }
    });
    board.insertAdjacentElement("beforeend", grid);
  }
}
createBoard(16);

btn.addEventListener("click", () => {
  let input = document.querySelector(".userInput").value;

  if (input >= 2 && input <= 100) {
    createBoard(input);
  } else {
    console.log("too many squares");
  }
});

colorInput.addEventListener("input", (e) =>{
    color = e.target.value;
});


function colorSquare(e) {
  e.target.style.backgroundColor = color;
}

function changeColor(choice) {
  color = choice;
}

function clearColor() {
  let squares = document.querySelectorAll(".grid");
  squares.forEach((element) => element.style.backgroundColor = "white");
}

// function changeBoardSize(input) {}
