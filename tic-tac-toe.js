document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");
    squares.forEach(square => {
        square.classList.add("square");
    });

    let currentPlayer = "X";
    const gameState = Array(9).fill(null);
    
    document.querySelectorAll("#board .square").forEach((square, index) => {
        square.addEventListener("click", () => {
            if (!gameState[index]) {
                gameState[index] = currentPlayer;
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });
    });
    
    document.querySelectorAll("#board .square").forEach(square => {
        square.addEventListener("mouseover", () => square.classList.add("hover"));
        square.addEventListener("mouseout", () => square.classList.remove("hover"));
    });

    const checkWinner = () => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
    
        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                document.getElementById("status").textContent = `Congratulations! ${gameState[a]} is the Winner!`;
                document.getElementById("status").classList.add("you-won");
                return true;
            }
        }
        return false;
    };
    
});
