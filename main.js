let resultsRound = document.getElementById("results-round");  // Sélectionne l'élément HTML pour afficher les résultats des rounds

let getComputerChoice = () => {
    
    let random = Math.floor(Math.random() * choices.length) 
    return choices[random]  // Génère un choix aléatoire de l'ordinateur parmi les options possibles
}

let nbrWinComputer = 0, nbrWinPlayer = 0;  // Initialise les compteurs de victoires pour l'ordinateur et le joueur

let playRound = (roundNbr) => {

    playerSelection = prompt("Choisissez parmi ces choix : Rock, Paper, Scissors").toLowerCase()  // Demande au joueur de faire un choix

    if (!playerSelection || !choices.includes(playerSelection)) {  // Vérifie si le choix du joueur est valide
        console.log("Choix invalide. Veuillez choisir parmi 'Rock', 'Paper' ou 'Scissors'.");
        return playRound(roundNbr);  // Redemande au joueur de choisir en cas de choix invalide
    }

    computerSelection = getComputerChoice().toLowerCase()  // Obtenir le choix de l'ordinateur

    // Compare les choix pour déterminer le résultat du round et met à jour les compteurs
    if (computerSelection === playerSelection) {
        roundResult = "Match Null"
    } else if ((computerSelection === 'rock' && playerSelection === 'scissors') || (computerSelection === 'scissors' && playerSelection === 'paper') || (computerSelection === 'paper' && playerSelection === 'rock')) {
        roundResult = "L'ordinateur a gagné cette manche"
        nbrWinComputer++
    } else {
        roundResult = "Vous avez gagné cette manche"
        nbrWinPlayer++
    }

    resultsRound.innerHTML += `<p>Résultat round ${roundNbr} : ${roundResult}</p>`  // Affiche le résultat du round dans l'élément HTML
}

let game = () => {
    for (let i=1 ; i<=5 ; i++){
        playRound(i);  // Joue 5 rounds en utilisant la fonction playRound
    }

    // Calcule et affiche le résultat final du jeu en fonction des compteurs de victoires
    let gameResult
    if (nbrWinComputer == nbrWinPlayer){
        gameResult = 'Egalité'
    } else if (nbrWinComputer > nbrWinPlayer){
        gameResult = `Vous avez perdu, L'ordinateur a gagné ${nbrWinComputer} manches`
    } else {
        gameResult = `Vous avez gagné ${nbrWinPlayer} manches`;
    }

    resultsRound.innerHTML += `<p>Résultat final: ${gameResult}</p>`  // Affiche le résultat final du jeu dans l'élément HTML
}
game()  // Appelle la fonction game pour démarrer le jeu
