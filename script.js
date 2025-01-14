let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgPara = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () => {
    //rock, paper, scissors
    let options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawChoice = () => {
    msgPara.innerText = "Game was Draw! Play Again.";
    msgPara.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) //if(userWin == true)
    {
        userScore++;
        userScorePara.innerText = userScore;
        msgPara.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msgPara.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        compScorePara.innerText = compScore;
        msgPara.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        msgPara.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    //GENERATE USER CHOICE 
    const compChoice = genComputerChoice();

    if(userChoice === compChoice)
    {
        //Draw Game
        drawChoice();
    }
    else
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            //comp has : paper, sessiors
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            //comp has : rock, sessiors
            userWin = compChoice === "scissors" ? false : true;
        }
        else
        {
            //user has : sessiors
            //comp has : rock, paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

//EVENT LISTNER ON ALL 3 CHOICE
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

