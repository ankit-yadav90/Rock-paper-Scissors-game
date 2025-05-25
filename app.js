let userScore = 0;
let compSoore = 0;

const choices = document.querySelectorAll(".choice");

choices.forEach((choices) => {
    choices.addEventListener("click", () => {
        console.log("choice was clicked")
    })
})