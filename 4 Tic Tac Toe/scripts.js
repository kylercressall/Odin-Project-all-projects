let gameboard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let activePlayer = "X";

let gameActive = true;

let winningSquares = [];

const container = document.getElementById("container");
const info = document.getElementById("info");

function drawGameboard() {
  container.innerHTML = "";

  const div = document.createElement("div");
  div.className = "gameboard";

  gameboard.forEach((row, rowIndex) => {
    const divRow = document.createElement("div");
    divRow.className = "row";

    row.forEach((cell, cellIndex) => {
      const divCell = document.createElement("div");

      if (cell === "") {
        divCell.className = "cell";

        divCell.addEventListener("click", function () {
          markSquare(rowIndex, cellIndex);
        });
      } else if (cell === "X" || cell === "O") {
        divCell.className = "filled-cell";
      }

      winningSquares.forEach((winningCell) => {
        if (winningCell[0] === rowIndex && winningCell[1] === cellIndex) {
          divCell.classList.add("win-cell");
        }
      });

      divCell.textContent = cell;
      divRow.appendChild(divCell);
    });

    div.appendChild(divRow);
  });

  container.appendChild(div);
}

function markSquare(row, col) {
  if (!gameActive) return;
  gameboard[row][col] = activePlayer;
  activePlayer = activePlayer === "X" ? "O" : "X";
  drawGameboard();
  editInfo("");
  checkForWin();
}

function editInfo(text) {
  info.textContent = `Current Player: ${activePlayer}`;
}

function manageWin(text) {
  console.log(winningSquares);
  gameActive = false;
  info.textContent = `Player ${text} Won!`;
  drawGameboard();
}

function checkForWin() {
  for (let i = 0; i < 3; i++) {
    // check all the rows
    if (
      gameboard[i][0] !== "" &&
      gameboard[i][0] === gameboard[i][1] &&
      gameboard[i][1] === gameboard[i][2]
    ) {
      winningSquares = [
        [i, 0],
        [i, 1],
        [i, 2],
      ];
      manageWin(gameboard[i][0]);
      return gameboard[i][0];
    }
    // check all the columns
    if (
      gameboard[0][i] !== "" &&
      gameboard[0][i] === gameboard[1][i] &&
      gameboard[1][i] === gameboard[2][i]
    ) {
      winningSquares = [
        [0, i],
        [1, i],
        [2, i],
      ];
      manageWin(gameboard[0][i]);
      return gameboard[0][i];
    }
  }
  // check top-left to bottom-right diagonal
  if (
    gameboard[0][0] !== "" &&
    gameboard[0][0] === gameboard[1][1] &&
    gameboard[1][1] === gameboard[2][2]
  ) {
    winningSquares = [
      [0, 0],
      [1, 1],
      [2, 2],
    ];
    manageWin(gameboard[1][1]);
    return gameboard[0][0];
  }
  // check bottom-left to top-right diagonal
  if (
    gameboard[0][2] !== "" &&
    gameboard[0][2] === gameboard[1][1] &&
    gameboard[1][1] === gameboard[2][0]
  ) {
    winningSquares = [
      [0, 2],
      [1, 1],
      [2, 0],
    ];
    manageWin(gameboard[1][1]);
    return gameboard[0][2];
  }
}

drawGameboard();
editInfo("");

function restartGame() {
  gameboard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  winningSquares = [];
  gameActive = true;
  activePlayer = "X";
  drawGameboard();
  editInfo();
}
document.getElementById("restart").addEventListener("click", restartGame);
