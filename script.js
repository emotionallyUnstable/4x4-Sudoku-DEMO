function generateSudoku() {
    // Create an empty 4x4 grid
    let grid = new Array(4).fill(0).map(() => new Array(4).fill(0));
  
    // Fill in your Sudoku grid generation logic here
  
    return grid;
  }

  const sudokuTable = document.getElementById("sudoku");
  const cells = sudokuTable.querySelectorAll("td");

  cells.forEach(cell => {
    cell.addEventListener("click",function() {
        const userInput = prompt("Enter a number (1-4):");


        const number = parseInt (userInput);
        if (!isNaN(number) && number >= 1 && number <=4) {
            cell.textContent = number;
        } else {
            alert("Invalid input. Please enter a number from 1 to 4.");
        }
    });
  });