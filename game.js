let boxes = document.querySelectorAll(".box");
let display = document.getElementById("display");
let resetButton = document.getElementById("reset-button");
let turnO = true;
let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Update display message
function updateDisplay(message) {
  display.innerText = message;
}

boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    if (box.innerText !== "") {
      return;
    }

    if (turnO === true) {
      box.innerText = "O";
      turnO = false;
      updateDisplay("Player X's Turn");
    } else {
      box.innerText = "X";
      turnO = true;
      updateDisplay("Player O's Turn");
    }

    checkWinner();
  });
});

function checkWinner() {
  for (let i = 0; i < winPatterns.length; i++) {
    let pos1 = winPatterns[i][0];
    let pos2 = winPatterns[i][1];
    let pos3 = winPatterns[i][2];

    if (
      boxes[pos1].innerText !== "" &&
      boxes[pos1].innerText === boxes[pos2].innerText &&
      boxes[pos2].innerText === boxes[pos3].innerText
    ) {
      updateDisplay("🎉 Winner is: " + boxes[pos1].innerText + " 🎉");
      disableBoxes();
      return;
    }
  }

  let allFilled = true;
  boxes.forEach(function (box) {
    if (box.innerText === "") {
      allFilled = false;
    }
  });

  if (allFilled === true) {
    updateDisplay("🤝 Game Draw! 🤝");
    disableBoxes();
  }
}

function disableBoxes() {
  boxes.forEach(function (box) {
    box.style.pointerEvents = "none";
  });
}

function resetGame() {
  boxes.forEach(function (box) {
    box.innerText = "";
    box.style.pointerEvents = "auto";
  });
  turnO = true;
  updateDisplay("Player O's Turn");
}

// Add event listener to reset button
resetButton.addEventListener("click", resetGame);