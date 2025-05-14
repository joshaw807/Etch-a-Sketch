const board = document.querySelector(".gridContainer");
const btn = document.querySelector(".setSize");

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
    grid.addEventListener("mouseover", () => {
      if (isMouseDown) {
        grid.style.backgroundColor = "black";
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

// function changeBoardSize(input) {}
