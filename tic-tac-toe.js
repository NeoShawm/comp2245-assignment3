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
    
});
