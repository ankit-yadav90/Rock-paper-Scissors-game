let userScore = 0;
let compSoore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw.");
};

const showWinner = (userWin) => {
    if(userWin) {
        console.log("you win!");
    }else {
        console.log("you lose");
    };
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const CompChoice = genCompChoice();
    console.log("comp choice = ", CompChoice);

    if(userChoice === CompChoice) {
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock") {
           userWin = CompChoice === "paper" ? false : true;
        }else if(userChoice === "papre") {
           userWin = CompChoice === "scissors" ? false : true;
        }else {
           userWin = CompChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choices) => {
    choices.addEventListener("click", () => {
        const userChoice = choices.getAttribute("id");
        playGame(userChoice);
    });
});