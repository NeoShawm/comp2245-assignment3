document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board .square");
    const statusDisplay = document.getElementById("status");
    const newGameButton = document.getElementById("newGame");
    let currentPlayer = "X";
    const gameState = Array(9).fill(null); // Keeps track of board state

    // Exercise 1: Set up the board by adding the "square" class to each cell
    squares.forEach(square => {
        square.classList.add("square");
    });

    // Function to check for a winner
    const checkWinner = () => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                // Update status message for winner
                statusDisplay.textContent = `Congratulations! ${gameState[a]} is the Winner!`;
                statusDisplay.classList.add("you-won");
                return true; // Game is won
            }
        }
        return false; // No winner yet
    };

    // Exercise 2: Add X or O to a square on click, and Exercise 6 to prevent changes once set
    squares.forEach((square, index) => {
        square.addEventListener("click", () => {
            if (!gameState[index]) { // Only proceed if the square is empty
                gameState[index] = currentPlayer;
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                // Check if this move causes a win
                if (!checkWinner()) {
                    // Switch player if no win
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });
    });

    // Exercise 3: Change style on mouseover and mouseout for hover effect
    squares.forEach(square => {
        square.addEventListener("mouseover", () => square.classList.add("hover"));
        square.addEventListener("mouseout", () => square.classList.remove("hover"));
    });

    // Exercise 5: Reset game state when the New Game button is clicked
    newGameButton.addEventListener("click", () => {
        gameState.fill(null); // Reset game state array
        squares.forEach(square => {
            square.textContent = ""; // Clear the text from each square
            square.classList.remove("X", "O"); // Remove any X or O class
        });
        // Reset status message
        statusDisplay.textContent = "Move your mouse over a square and click to play an X or an O.";
        statusDisplay.classList.remove("you-won");
        currentPlayer = "X"; // Reset to starting player
    });
});

