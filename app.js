let userscore=0;
let computerscore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreboard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() *3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter ==="r") return "Rock";
    if(letter ==="p") return "Paper";
    return "Scissors";
}

function win(userChoice,computerChoice){
    const smallUserWord = "user".fontsize(3).sup();
    const smallComputerWord = "computer".fontsize(3).sup();
    const userChoice_div=document.getElementById(userChoice);
     userscore++;
     userScore_span.innerHTML = userscore;
    computerScore_span.innerHTML =computerscore;

    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallComputerWord}. You Win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 400);

}   



function lose(userChoice,computerChoice){
    const smallUserWord = "user".fontsize(3).sup();
    const smallComputerWord = "computer".fontsize(3).sup();
    const userChoice_div=document.getElementById(userChoice)
    computerscore++;
    userScore_span.innerHTML = userscore;
    computerScore_span.innerHTML =computerscore;


    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallComputerWord}. You Lost!!!!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 400);
}

function draw(userChoice,computerChoice){

   const smallUserWord = "user".fontsize(3).sup();
   const smallComputerWord = "computer".fontsize(3).sup();
   const userChoice_div=document.getElementById(userChoice);

   result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallComputerWord}. It's Draw...`;
   document.getElementById(userChoice).classList.add('gray-glow');
   setTimeout(() => userChoice_div.classList.remove('gray-glow'), 400);

}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;

        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice)
            break;;
    }
}
function main() {
rock_div.addEventListener('click',() => game("r"));
paper_div.addEventListener('click',() =>game("p"));
scissors_div.addEventListener('click',() =>game("s"));
}

main();
