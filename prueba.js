
const choices = ["rock", "paper", "scissors"];
    let userPoints = 0;
    let computerPoints = 0;
  
    // Función para generar la jugada aleatoria de la computadora
    function getComputerChoice() {
      const randomIndex = Math.floor(Math.random() * 3);
      return choices[randomIndex];
    }
  
    // Función para determinar el resultado del juego
    function determineWinner(userChoice, computerChoice) {
      if (userChoice === computerChoice) {
        return "Es un empate";
      } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
      ) {
        return "¡Ganaste!";
      } else {
        return "¡Perdiste! Inténtalo de nuevo.";
      }
    }
  
    // Función para actualizar la interfaz de usuario
    function updateUI(userChoice, computerChoice, result) {
      const computerChoiceImg = document.getElementById("computerChoiceImg");
      const userChoiceImg = document.getElementById("userChoiceImg");
      const resultElement = document.getElementById("result");
      const userPointsElement = document.getElementById("userPoints");
      const computerPointsElement = document.getElementById("computerPoints");
  
      computerChoiceImg.src = computerChoice + ".png";
      userChoiceImg.src = userChoice + ".png";
      resultElement.textContent = result;
      userPointsElement.textContent = "Tú: " + userPoints;
      computerPointsElement.textContent = "Computadora: " + computerPoints;
    }
  
    // Función principal para el juego
    function playGame(userChoice) {
      const computerChoice = getComputerChoice();
      const result = determineWinner(userChoice, computerChoice);
  
      if (result === "¡Ganaste!") {
        userPoints++;
      } else if (result === "¡Perdiste! Inténtalo de nuevo.") {
        computerPoints++;
      }
  
      updateUI(userChoice, computerChoice, result);
    }
  
    // Event listeners para las imágenes de elección
    const rockImg = document.getElementById("rock");
    rockImg.addEventListener("click", function() {
      playGame("rock");
    });
  
    const paperImg = document.getElementById("paper");
    paperImg.addEventListener("click", function() {
      playGame("paper");
    });
  
    const scissorsImg = document.getElementById("scissors");
    scissorsImg.addEventListener("click", function() {
      playGame("scissors");
});